module.exports = {
    jwtSecret: 'carpool',
    db: 'mongodb://localhost:27017/carpool',
    transport: {
        email: 'info.pushideasinc@gmail.com',
        password: 'Rajat@123'
    },
    twilio: {
        TWILIO_PHONE_NUMBER: '+15712002677',
        TWILIO_ACCOUNT_SID: 'ACa4cccda7e538fe9e62fa9a9806600cd3',
        TWILIO_AUTH_TOKEN: 'ae59c67f4eface1639b60ece0461b419',
    }
};