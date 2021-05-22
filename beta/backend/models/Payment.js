const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({ 
    user: {
      type: String,
      required: true,
    },
    userName : {
      type: String,
      required: true,
    },
    ride : {
        type: String,
        required: true,
    },
    token : {
      type: String,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },
    seats: {
      type: String,
      required: true,
    },
    status: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Payment', PaymentSchema);