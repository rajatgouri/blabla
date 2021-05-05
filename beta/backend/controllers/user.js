const { createToken } = require('../utils/auth');
require('dotenv').config();
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, VERIFICATION_SID } = process.env;
const twilio = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const User = require("../models/User");
const sendSms = require('../twilio');
const sgMail = require('@sendgrid/mail');
const mime = require('mime');
const fs = require('fs');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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
    return res.status(200).json({ msg: 'Invalid data' });
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
        return res.status(200).json({ msg: err });
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
      return res.status(200).send({ msg: err });
    }

    if (!user) {
      return res.status(200).json({ msg: 'The user does not exist' });
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch && !err) {
        return res.status(200).json({
          token: createToken(user),
        });
      } else {
        return res
          .status(200)
          .json({ msg: "The email and password don't match." });
      }
    });
  });
};

exports.emailOtpSend = (req, res) => {
  console.log(req.query);
  if (!req.query.email) {
    return res.status(400).send({ msg: 'You need to send email' });
  }

  // generate a 6 digit random otp
  const otp = Math.floor(100000 + Math.random() * 900000);
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
    const msg = {
      to: req.query.email,
      from: process.env.SENDGRID_EMAIL, // Change to your verified sender
      subject: 'Carpooling OTP',
      text: 'Reset Passowrd Otp!',
      html: `<h1 style = "text-align:center; color: red;">Password Reset Otp</h1>
             <pre>The otp to reset your password is ${otp} </pre>`,
    }
    sgMail.send(msg)
    .then(info => {
        console.log(info)
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
      return res.status(200).json({ msg: 'The user does not exist' });
    }
    if (user.emailOtp == req.body.otp) {
      user.emailOtp = null;
      user.isEmailVerified = true;
      user.save()
      .then(result=>{
        res.status(200).send({message: "Email verified successfully"})
      })
      .catch(err => {
        res.status(200).send({message: "Some error occured , please try again"})
      });
    } else {
      res.status(200).send({message: "Wrong OTP"})
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
      .create({ to: '+' + req.query.phone, channel });
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
    console.log(e);
    return res.status(500).send(e);
  }

  if (verificationResult.status === 'approved') {
    User.findOne({ email: req.query.email }, (err, user) => {
      if (err) {
        return res.status(400).send({ msg: err });
      }
  
      if (!user) {
        return res.status(200).json({ msg: 'The user does not exist' });
      }
      if (user.emailOtp == req.body.otp) {
        user.isNumberVerified = true;
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

exports.verifyId = async (req, res) => {
  User.findOne({ email: req.query.email }, (err, user) => {
    if (err) {
      return res.status(400).send({ msg: err });
    }

    if (!user) {
      return res.status(200).json({ msg: 'The user does not exist' });
    } 

    var matchesBackId = req.body.backId.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
    responseBackId = {}; 
    var matchesFrontId = req.body.frontId.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
    responseFrontId = {}; 
    var matchesProfilePicture= req.body.profilePicture.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
    responseProfilePicture = {}; 
    if (matchesBackId.length !== 3 || matchesFrontId.length !== 3 || matchesProfilePicture.length !== 3) {
        return new Error('Invalid input string');
    }  
    responseBackId.type = matchesBackId[1];
    responseBackId.data = new Buffer(matchesBackId[2], 'base64');
    let decodedBackImg = responseBackId;
    let imageBufferBAck = decodedBackImg.data;
    let typeBack = decodedBackImg.type;
    let extensionBack = mime.extension(typeBack);
    let fileNameBack = user._id +'back_id'+ '.' + extensionBack;
    responseFrontId.type = matchesFrontId[1];
    responseFrontId.data = new Buffer(matchesFrontId[2], 'base64');
    let decodedFrontImg = responseFrontId;
    let imageBufferFront = decodedFrontImg.data;
    let typeFront = decodedFrontImg.type;
    let extensionFront = mime.extension(typeFront);
    let fileNameFront = user._id +'front_id'+ '.' + extensionFront;
    responseProfilePicture.type = matchesProfilePicture[1];
    responseProfilePicture.data = new Buffer(matchesProfilePicture[2], 'base64');
    let decodedProfileImg = responseProfilePicture;
    let imageBufferProfile = decodedProfileImg.data;
    let typeProfile = decodedProfileImg.type;
    let extensionProfile = mime.extension(typeProfile);
    let fileNameProfile = user._id +'profile_pic'+ '.' + extensionProfile;
    try {
        fs.writeFileSync("./assets/images/" + fileNameBack, imageBufferBAck, 'utf8');
        fs.writeFileSync("./assets/images/" + fileNameFront, imageBufferFront, 'utf8');
        fs.writeFileSync("./assets/images/" + fileNameProfile, imageBufferProfile, 'utf8');
        user.backId = "images/" +  fileNameBack,
        user.frontId = "images/" + fileNameFront,
        user.profilePicture = "images/" + fileNameProfile
        user.save()
        .then((data,error)=>{
            if (error) {
                res.status(500 ).send({
                    msg: "Failed to update"
                });
            }
            res.status(200).send({
                msg: "Id Added Succesfully",
                data: data,
            }); 
        });
    } catch (e) {
        console.log(e);
        next(e);
    }
  })
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
      return res.status(200).json({ msg: 'The user does not exist' });
    }
    user.vehicles.push(req.body)
    user.save()
    .then(result=>{
      res.status(200).send({message: "Vehicle Added successfully", data: result})
    })
    .catch(err => {
      res.status(200).send({message: "Some error occured , please try again"})
    });
  })
};
