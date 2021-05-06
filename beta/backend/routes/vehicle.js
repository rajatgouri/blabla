const router = require('express').Router();
const vehicle = require('../controllers/vehicle');

router.post('/add-vehicle', vehicle.addVehicle);

module.exports = {
  router: router,
  basePath: '/api'
};
