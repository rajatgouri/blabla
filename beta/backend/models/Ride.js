const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({ 
  client: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  seats: {
      type: String,
      required: true,
  },
  token: {
    type: String,
    required: true,
  }
})

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
    price: {
      type: String,
      required: true,
    },
    driver: {
        type: String,
        required: true,
    },
    driverName: {
      type: String,
      required: true,
    },
    totalSeats: {
      type: String,
      required: true,
    },
    vehicleName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    startedAt: {
      type: String,
    },
    endedAt: {
      type: String,
    },
    bookings : [bookingSchema]
})

module.exports = mongoose.model('Ride', RideSchema);