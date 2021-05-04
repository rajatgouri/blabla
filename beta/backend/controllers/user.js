const { createToken } = require('../utils/auth');
require('dotenv').config();
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, VERIFICATION_SID } = process.env;
const twilio = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const User = require("../models/User");
const nodemailer = require('nodemailer');
const config = require('../config/config');
const sendSms = require('../twilio');

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
    return res.status(400).send({ msg: 'You need to send email and password' });
  }

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
};

exports.emailOtpSend = (req, res) => {
  if (!req.query.email) {
    return res.status(400).send({ msg: 'You need to send email' });
  }

  // generate a 6 digit random otp
  const otp = Math.floor(100000 + Math.random() * 900000);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.transport.email,
        pass: config.transport.password
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
  });

  User.findOne({ email: req.query.email }, (err, user) => {
    if (err) {
      return res.status(400).send({ msg: err });
    }

    if (!user) {
      return res.status(400).json({ msg: 'The user does not exist' });
    }
    user.emailOtp = otp;
    return user.save();
  }).then(result=>{
    const mailOptions = {
      from: config.transport.email,
      to: req.query.email,
      subject: 'Reset Passowrd Otp!',
      html: `<h1 style = "text-align:center; color: red;">Password Reset Otp</h1>
              <pre>The otp to reset your password is ${otp} </pre>`,
    };
    transporter.sendMail(mailOptions)
    .then(info => {
        res.status(200).send({message: "Otp sent successfully"})
    })
    .catch(err => {
        res.status(400).send({message: "Otp not sent please try again"})
    });
  })
};

exports.verifyEmail = (req, res) => {
  if (!req.body.email || !req.body.otp) {
    return res.status(400).send({ msg: 'You need to send email and otp' });
  }

  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.status(400).send({ msg: err });
    }

    if (!user) {
      return res.status(400).json({ msg: 'The user does not exist' });
    }
    if (user.emailOtp == req.body.otp) {
      user.emailOtp = null;
      user.isEmailVerified = true;
      user.save()
      .then(result=>{
        res.status(200).send({message: "Email verified successfully"})
      })
      .catch(err => {
        res.status(400).send({message: "Some error occured , please try again"})
      });
    } else {
      res.status(400).send({message: "Wrong OTP"})
    }
  })
};

exports.phoneOtpSend = async (req, res) => {
  const channel = 'sms';
  let verificationRequest;
  console.log(req.query.phone);
  try {
    verificationRequest = await twilio.verify.services(VERIFICATION_SID)
      .verifications
      .create({ to: '+'+ req.query.phone, channel });
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }

  console.log(verificationRequest);

  return res.status(200).send({msg:"Verify otp sent"});
};

exports.phoneOtpCheck = async (req, res) => {
  const { verificationCode: code } = req.body;
  let verificationResult;
  const errors = { wasValidated: true };

  try {
    verificationResult = await twilio.verify.services(VERIFICATION_SID)
      .verificationChecks
      .create({ code, to: '+'+ req.query.phone });
  } catch (e) {
    logger.error(e);
    return res.status(500).send(e);
  }

  console.log(verificationResult);

  if (verificationResult.status === 'approved') {
    User.findOne({ email: req.query.email }, (err, user) => {
      if (err) {
        return res.status(400).send({ msg: err });
      }
  
      if (!user) {
        return res.status(400).json({ msg: 'The user does not exist' });
      }
      if (user.emailOtp == req.body.otp) {
        user.isPhoneVerified = true;
        user.save()
        .then(result=>{
          res.status(200).send({message: "Phone verified successfully"})
        })
        .catch(err => {
          res.status(400).send({message: "Some error occured , please try again"})
        });
      } else {
        res.status(400).send({message: `Unable to verify code. status: ${verificationResult.status}`})
      }
    })
  }
};
