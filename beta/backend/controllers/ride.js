const User = require("../models/User");
const Ride = require("../models/Ride");

exports.addRide = (req, res) => {
  if (!req.body.ride
    || !req.body.ride.from 
    || !req.body.ride.to 
    || !req.body.ride.date 
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
    Ride.create(req.body.ride, function (err,ride) {
      if (err) res.status(400).send({message: "Some error occured , please try again"});
      res.status(200).send({message: "Ride Added successfully", data: ride})
    });
  })
};

exports.getVehicleById = (req, res) => {
  if (!req.query.email) {
    return res.status(400).send({ msg: 'You need to send email' });
  }

  User.findOne({ email: req.query.email }, (err, user) => {
    if (err) {
      return res.status(400).send({ msg: err });
    }

    if (!user) {
      return res.status(400).json({ msg: 'The user does not exist' });
    }
    res.status(200).send({vehicles: user.vehicles})
  })
};
  