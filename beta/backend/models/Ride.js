const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({ 
    from: {
      type: String,
      required: true,
    },
    to : {
        type: String,
        required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    vehicle: {
      type: String,
      required: true,
    },
    driver: {
        type: String,
        required: true,
    },
})

module.exports = RideSchema;