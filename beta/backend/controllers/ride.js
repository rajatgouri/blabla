const User = require("../models/User");
const Ride = require("../models/Ride");
require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.addRide = (req, res) => {
  if (!req.body.ride
    || !req.body.ride.from 
    || !req.body.ride.to 
    || !req.body.ride.date 
    || !req.body.ride.price 
    || !req.body.ride.time 
    || !req.body.ride.driver 
    || !req.body.ride.vehicle ) {
    return res.status(400).send({ msg: 'Invalid form Data' });
  }

  User.findOne({ _id: req.body.ride.driver  }, (err, user) => {
    if (err) {
      return res.status(400).send({ msg: err });
    }

    if (!user) {
      return res.status(400).json({ msg: 'The user does not exist' });
    }

    if (!user.isIdApproved) {
      return res.status(400).json({ msg: 'You need to wait before your Id gets approved' });
    }

    const vehicle = user.vehicles.filter(v=> v._id == req.body.ride.vehicle);
    const ride = {
      ...req.body.ride,
      driverName : user.fullName,
      vehicleName : vehicle[0].modelName,
      totalSeats : vehicle[0].places,
      status : "Scheduled"
    }
    Ride.create(ride, function (err,ride) {
      if (err) res.status(400).send({msg: "Some error occured , please try again"});
      res.status(200).send({msg: "Ride Added successfully", data: ride})
    });
  })
};

exports.getRides = (req, res) => {
  if (!req.query.from || !req.query.to || !req.query.date) {
    return res.status(400).send({ msg: 'Please send all entries' });
  }

  Ride.find({ from: req.query.from , to:req.query.to ,date:req.query.date}, (err, rides) => {
    if (err) {
      return res.status(400).send({ msg: err });
    }
    rides = rides.map(r=>{
      if (r.status === 'Scheduled') {
        return r;
      }
    })
    rides = rides.length > 0 ? rides : null;
    res.status(200).send({rides: rides})
  })
};

exports.getMyRides = (req, res) => {
  if (!req.query.id) {
    return res.status(400).send({ msg: 'Please send id' });
  }

  Ride.find({ driver: req.query.id}, (err, rides) => {
    if (err) {
      return res.status(400).send({ msg: err });
    }
    res.status(200).send({myRides: rides})
  })
};

exports.getClientRides = (req, res) => {
  if (!req.query.id) {
    return res.status(400).send({ msg: 'Please send id' });
  }

  Ride.find({ "bookings.client": req.query.id}, (err, rides) => {
    if (err) {
      return res.status(400).send({ msg: err });
    }
    res.status(200).send({clientRides: rides})
  })
};

exports.getRideById = (req, res) => {
  if (!req.query.id) {
    return res.status(400).send({ msg: 'Invalid Data' });
  }

  Ride.findById(req.query.id, (err, ride) => {
    if (err) {
      return res.status(400).send({ msg: err });
    }
    User.findById(ride.driver, (err2,user) => {
      if (err2) {
        return res.status(400).send({ msg: err2 });
      }
      res.status(200).send({ride: ride , driver: user})
    })
  })
};

exports.startRide = (req, res) => {
  if (!req.query.id || !req.query.startedAt) {
    return res.status(400).send({ msg: 'Invalid Data' });
  }

  Ride.findById(req.query.id, (err, ride) => {
    if (err) {
      return res.status(400).send({ msg: err });
    }
    ride.status = "Ongoing";
    ride.startedAt = req.query.startedAt;
    ride.save((err, ride) => {
      if (err) {
        return res.status(400).json({ msg: err });
      }
      return res.status(200).json({startedRide: ride});
    });
  })
};

exports.endRide = (req, res) => {
  if (!req.query.id || !req.query.endedAt) {
    return res.status(400).send({ msg: 'Invalid Data' });
  }

  Ride.findById(req.query.id, (err, ride) => {
    if (err) {
      return res.status(400).send({ msg: err });
    }
    ride.status = "Completed";
    ride.endedAt = req.query.endedAt;
    ride.save((err, ride) => {
      if (err) {
        return res.status(400).json({ msg: err });
      }
      return res.status(200).json({startedRide: ride});
    });
  })
};

exports.cancelRide = (req, res) => {
  if (!req.query.id) {
    return res.status(400).send({ msg: 'Invalid Data' });
  }

  Ride.findOne({_id: req.query.id}, (err, ride) => {
      if (err) {
          return res.status(400).send({ msg: err });
      }
      ride.status = "Cancelled";
      ride.save((err, ride) => {
          if (err) {
              return res.status(400).send({ msg: err });
          }
          User.findById(ride.driver , ( err, driver ) => {
              if (err) {
                  return res.status(400).send({ msg: err });
              }
            const msg = {
              to: driver.email,
              from: process.env.SENDGRID_EMAIL, // Change to your verified sender
              subject: 'Booking Cancelled',
              text: 'Booking Cancelled',
              html: `<h1>Booking Cancelled</h1>
                            <pre>Booking Cancelled for the ride on ${ride.date} from ${ride.from} to ${ride.to}.<br></br>
                            </pre>`,
            }
            sgMail.send(msg)
              .then(info => {
                const msg2 =  {
                  to: process.env.SENDGRID_EMAIL,
                  from: process.env.SENDGRID_EMAIL, // Change to your verified sender
                  subject: 'Booking Cancelled',
                  text: 'Booking Cancelled',
                  html: `<h1 >Booking Cancelled</h1>
                                <p>Booking Confirmed for the ride on ${ride.date} from ${ride.from} to ${ride.to}.
                                <p>Driver Phone : ${driver.phone}</p>
                                <p>Driver Name : ${driver.fullName}</p>
                                </p>`,
                }
                sgMail.send(msg2)
                  .then(info => {
                    ride.bookings.forEach(booking=>{
                      User.findById(booking.client , ( err, client ) => {
                        if (err) {
                            return res.status(400).send({ msg: err });
                        }
                        const msg3 = {
                          to: client.email,
                          from: process.env.SENDGRID_EMAIL, // Change to your verified sender
                          subject: 'Booking Cancelled',
                          text: 'Booking Cancelled',
                          html: `<h1 >Booking Cancelled</h1>
                                        <p>Booking Cancelled for the ride on ${ride.date} from ${ride.from} to ${ride.to}.
                                          <p>Your booking amount will be refunded to you within a few days.</p>
                                        </p>`,
                        }
                        sgMail.send(msg3)
                          .then(info => {
                            return res.status(200).send({ ride: ride });
                          })
                          .catch(err => {
                            return res.status(400).send({ msg: "Some error occured" })
                          })
                      })
                    })
                  })
                  .catch(err => {
                    return res.status(400).send({ msg: "Some error occured" })
                  });
              })
              .catch(err => {
                return res.status(400).send({ msg: "Some error occured" })
              });
          })
        return res.status(200).send({ ride: ride });
      })
  })
};

  