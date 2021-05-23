require('dotenv').config();
const paydunya = require('paydunya');
const Payment = require("../models/Payment");
const Ride = require("../models/Ride");
const sgMail = require('@sendgrid/mail');
const User = require("../models/User");
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const { MASTER_KEY, PRIVATE_KEY, PUBLIC_KEY, PAYDUNYA_TOKEN ,REDIRECT_URL ,CANCEL_URL , PAYMENT_MODE} = process.env;
var setup = new paydunya.Setup({
    masterKey: MASTER_KEY,
    privateKey: PRIVATE_KEY,
    publicKey: PUBLIC_KEY,
    token: PAYDUNYA_TOKEN,
    mode: PAYMENT_MODE // Optional. Use this option for test payments.
  });

var store = new paydunya.Store({
    name: 'Carpooling', // Only the name is required
    tagline: "Lets Carpool",
    phoneNumber: '8077265082',
    returnURL: REDIRECT_URL,
    cancelURL : CANCEL_URL,
    postalAddress: 'Dakar Plateau - Establishment kheweul',
});

var invoice = new paydunya.CheckoutInvoice(setup, store);
exports.processPayment = (req, res) => {
    User.findOne({ _id: req.body.ride.user  }, (err, user) => {
        if (err) {
          return res.status(400).send({ msg: err });
        }
    
        if (!user) {
          return res.status(400).json({ msg: 'The user does not exist' });
        }
        if (!user.isIdApproved) {
          return res.status(400).json({ msg: 'You need to wait before your Id gets approved' });
        }
        invoice.addItem('Seats', req.body.ride.seats,req.body.ride.total/req.body.ride.seats);
        invoice.addItem('Carpooling', 1,500);
        invoice.totalAmount = +req.body.ride.total + 500;
        invoice.create()
            .then(function (){
                const payment = {
                    ride: req.body.ride.id,
                    user: req.body.ride.user,
                    userName: req.body.ride.fullName,
                    token: invoice.token,
                    total: req.body.ride.total + 500,
                    status: invoice.status,
                    seats: req.body.ride.seats
                }
                Payment.create(payment, function (err) {
                    if (err){
                        console.log(err);
                        res.status(400).send({msg: err});
                    } 
                    res.status(200).send({url:invoice.url})
                  });
            })
            .catch(function (e) {
                res.status(400).send({msg: e})
            });
    });
};

exports.confirmRide = (req, res) => {
    if (!req.body.token) {
        return res.status(400).send({ msg: 'Invalid Data' });
    }

    Payment.findOne({token: req.body.token }, (err, pay) => {
        if (err) {
        return res.status(400).send({ msg: err });
        }
        const invoice = new paydunya.CheckoutInvoice(setup, store);
        invoice.confirm(req.body.token )
        .then(function (){
            if ( invoice.status == "completed" ) {
                pay.status = "completed";
                pay.save((err, pay)=>{
                    if (err) {
                        return res.status(400).send({ msg: err });
                    }
                    const booking = {
                        client : pay.user,
                        clientName : pay.userName,
                        seats: pay.seats,
                        token: req.body.token
                    }
                    Ride.findOne({_id: pay.ride}, (err, ride) => {
                        if (err) {
                            return res.status(400).send({ msg: err });
                        }
                        const filteredBookings = ride.bookings.filter(b=>{
                            if(b.token == req.body.token) {
                                return b;
                            }
                        })
                        if (filteredBookings.length > 0) {
                            return res.status(200).send({ msg: "Booking already done" });
                        }
                        ride.bookings.push(booking);
                        ride.save((err, ride) => {
                            if (err) {
                                return res.status(400).send({ msg: err });
                            }
                            User.findById(booking.client , ( err, client ) => {
                                if (err) {
                                    return res.status(400).send({ msg: err });
                                }
                                User.findById(ride.driver , ( err, driver ) => {
                                    if (err) {
                                        return res.status(400).send({ msg: err });
                                    }
                                    const msg = {
                                        to: client.email,
                                        from: process.env.SENDGRID_EMAIL, // Change to your verified sender
                                        subject: 'Booking Confirmed',
                                        text: 'Booking Confirmed',
                                        html: `<h1 >Booking Confirmed</h1>
                                               <div>Booking Confirmed for the ride on ${ride.date} from ${ride.from} to ${ride.to}.
                                               <p>Driver Phone : ${driver.phone}</p>
                                               <p>Driver Name : ${driver.fullName}</p>
                                               <p>Seats Booked  : ${booking.seats}</p>
                                               </div>`,
                                      }
                                      sgMail.send(msg)
                                      .then(info => {
                                        const msg2 = {
                                            to: driver.email,
                                            from: process.env.SENDGRID_EMAIL, // Change to your verified sender
                                            subject: 'Booking Confirmed',
                                            text: 'Booking Confirmed',
                                            html: `<h1 >Booking Confirmed</h1>
                                                   <div>Booking Confirmed for the ride on ${ride.date} from ${ride.from} to ${ride.to}.
                                                   <p>Client Phone : ${client.phone}</p>
                                                   <p>Client Name : ${client.fullName}</p>
                                                   <p>Seats Booked  : ${booking.seats}</p>
                                                   </div>`,
                                          }
                                          sgMail.send(msg2)
                                          .then(info=>{
                                            const msg3 = {
                                                to: process.env.SENDGRID_EMAIL,
                                                from: process.env.SENDGRID_EMAIL, // Change to your verified sender
                                                subject: 'Booking Confirmed',
                                                text: 'Booking Confirmed',
                                                html: `<h1>Booking Confirmed</h1>
                                                       <div>Booking Confirmed for the ride on ${ride.date} from ${ride.from} to ${ride.to}.
                                                       <p>Client Phone : ${client.phone}</p>
                                                       <p>Client Name : ${client.fullName}</p>
                                                       <p>Driver Phone : ${driver.phone}</p>
                                                       <p>Driver Name : ${driver.fullName}</p>
                                                       <p>Seats Booked  : ${booking.seats}</p>
                                                       </div>`,
                                              }
                                              sgMail.send(msg3)
                                              .then(info=>{
                                                return res.status(200).send({ ride: ride });
                                              })
                                              .catch(err=>{
                                                return res.status(400).send({msg: "Some error occured"})
                                              })
                                          })
                                          .catch(err => {
                                            return res.status(400).send({msg: "Some error occured"})
                                          });
                                      })
                                      .catch(err => {
                                        return res.status(400).send({msg: "Some error occured"})
                                      });
                                })
                            })
                            return res.status(200).send({ ride: ride });
                        })
                    })
                })
            };
        })
        .catch(function (e) {
            res.status(400).send({ msg: e });
        });
    })
};

