const User = require("../models/User");

exports.getUsers = (req, res) => {
    try {
        User.find({ $or: [{ role: 'user' }, { role: 'driver' }] }, (err, users) => {
            if (err) {
                return res.status(400).json({ msg: err });
            }

            if (users) {
                return res.status(200).json({ users: users });
            }
        });
    } catch (e) {
        return res.status(400).json({ msg: e });
    }
};

exports.getUserById = (req, res) => {
    try {
        User.findById(req.query.id, (err, users) => {
            if (err) {
                return res.status(400).json({ msg: err });
            }

            if (users) {
                return res.status(200).json({ user: users });
            }
        });
    } catch (e) {
        return res.status(400).json({ msg: e });
    }
};

exports.approveUser = (req, res) => {
    try {
        User.findById(req.body.id, (err, user) => {
            if (err) {
                return res.status(400).json({ msg: err });
            }

            if (user) {
                user.isIdApproved = true ;
                user.save()
                .then((result)=>{
                    return res.status(200).json({ msg: "User Approved" });
                })
            }
        });
    } catch (e) {
        return res.status(400).json({ msg: e });
    }
};