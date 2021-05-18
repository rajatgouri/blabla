const router = require('express').Router();
const ride = require('../controllers/ride');

router.post('/add-ride', ride.addRide);
router.get('/get-rides', ride.getRides);
router.get('/get-ride', ride.getRideById);

module.exports = {
  router: router,
  basePath: '/api'
};
