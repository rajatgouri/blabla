const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({ 
    vehicleType: {
      type: String,
      required: true,
    },
    modelName : {
        type: String,
        required: true,
    },
    places: {
      type: String,
      required: true,
    },
    modelYear: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
})

module.exports = VehicleSchema;