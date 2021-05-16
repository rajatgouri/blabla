const router = require('express').Router();
const vehicle = require('../controllers/vehicle');

router.post('/add-vehicle', vehicle.addVehicle);
router.get('/get-vehicles', vehicle.getVehicleById);

module.exports = {
  router: router,
  basePath: '/api'
};
