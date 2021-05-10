const { createToken } = require('../utils/auth');
const User = require("../models/User");

exports.registerUser = (req, res) => {
  if (
    !req.body.email ||
    !req.body.fullName ||
    !req.body.phone ||
    !req.body.password
  ) {
    return res.status(400).json({ msg: 'Invalid data' });
  }
  const incomingUser = {
    email : req.body.email,
    fullName : req.body.fullName,
    phone : req.body.phone ,
    password : req.body.password,
    isNumberVerified : false,
    isEmailVerified : false,
    isIdApproved : false,
    profilePicture : 'test',
    frontId : 'test',
    backId : 'test',
    role: 'user'
  }
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }

    if (user) {
      return res.status(400).json({ msg: 'The user already exists' });
    }

    let newUser = User(incomingUser);
    newUser.save((err, user) => {
      if (err) {
        return res.status(400).json({ msg: err });
      }
      return res.status(201).json(user);
    });
  });
};

exports.registerDriver = (req,res) => {
  if (
    !req.body.email ||
    !req.body.fullName ||
    !req.body.phone ||
    !req.body.password
  ) {
    return res.status(400).json({ msg: 'Invalid data' });
  }
  const incomingUser = {
    email : req.body.email,
    fullName : req.body.fullName,
    phone : req.body.phone ,
    password : req.body.password,
    isNumberVerified : false,
    isEmailVerified : false,
    isIdApproved : false,
    profilePicture : 'test',
    frontId : 'test',
    backId : 'test',
    role: 'driver'
  }
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }

    if (user) {
      return res.status(400).json({ msg: 'The user already exists' });
    }

    let newUser = User(incomingUser);
    newUser.save((err, user) => {
      if (err) {
        return res.status(400).json({ msg: err });
      }
      return res.status(201).json(user);
    });
  });
}

exports.loginUser = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ msg: 'You need to send email/number and password' });
  }

  if (req.body.email.includes('@')) {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        return res.status(400).send({ msg: err });
      }
  
      if (!user) {
        return res.status(400).json({ msg: 'The user does not exist' });
      }
  
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          return res.status(200).json({
            token: createToken(user),
          });
        } else {
          return res
            .status(400)
            .json({ msg: "The email and password don't match." });
        }
      });
    });
  } else {
    User.findOne({ phone: req.body.email }, (err, user) => {
      if (err) {
        return res.status(400).send({ msg: err });
      }
  
      if (!user) {
        return res.status(400).json({ msg: 'The user does not exist' });
      }
  
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          return res.status(200).json({
            token: createToken(user),
          });
        } else {
          return res
            .status(400)
            .json({ msg: "The phone and password don't match." });
        }
      });
    });
  }
};

exports.addVehicle = (req, res) => {
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
    user.vehicles.push(req.body)
    user.save()
    .then(result=>{
      res.status(200).send({msg: "Vehicle Added successfully", data: result})
    })
    .catch(err => {
      res.status(400).send({msg: "Some error occured , please try again"})
    });
  })
};
