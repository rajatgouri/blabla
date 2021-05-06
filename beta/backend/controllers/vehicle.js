const User = require("../models/User");

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
  