const User = require("../models/User");
const Ride = require("../models/Ride");

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
    const vehicle = user.vehicles.filter(v=> v._id == req.body.ride.vehicle);
    const ride = {
      ...req.body.ride,
      vehicleName : vehicle[0].modelName,
      totalSeats : vehicle[0].places
    }
    Ride.create(ride, function (err,ride) {
      if (err) res.status(400).send({message: "Some error occured , please try again"});
      res.status(200).send({message: "Ride Added successfully", data: ride})
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
    res.status(200).send({rides: rides})
  })
};
  