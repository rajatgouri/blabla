const User = require('../models/user');

exports.createAdmin= ()=> {
    const incomingUser = {
        email : "admin2@carpooling.com",
        fullName : "Admin",
        phone : "123456789" ,
        password : "Admin123@",
        isNumberVerified : true,
        isEmailVerified : true,
        isIdApproved : true,
        profilePicture : 'test',
        frontId : 'test',
        backId : 'test',
        role: 'admin'
    }
    
    let newUser = User(incomingUser);
    newUser.save((err, user) => {
    if (err) {
        console.log(err);
    }
    console.log(user);
    });
} 
