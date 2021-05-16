const User = require("../models/User");
const Ride = require("../models/Ride");

exports.addRide = (req, res) => {
  if (!req.body.vehicle.id 
    || !req.body.vehicle.from 
    || !req.body.vehicle.to 
    || !req.body.vehicle.date 
    || !req.body.vehicle.time 
    || !req.body.vehicle.vehicle 
    || !req.body.vehicle.vehicle ) {
    return res.status(400).send({ msg: 'You need to send email' });
  }

  User.findOne({ email: req.query.email }, (err, user) => {
    if (err) {
      return res.status(400).send({ msg: err });
    }

    if (!user) {
      return res.status(400).json({ msg: 'The user does not exist' });
    }
    user.vehicles.push(req.body)
    user.save()
    .then(result=>{
      res.status(200).send({message: "Vehicle Added successfully", data: result})
    })
    .catch(err => {
      res.status(400).send({message: "Some error occured , please try again"})
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
  