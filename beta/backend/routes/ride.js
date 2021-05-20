const router = require('express').Router();
const ride = require('../controllers/ride');

router.post('/add-ride', ride.addRide);
router.get('/get-rides', ride.getRides);
router.get('/get-ride', ride.getRideById);
router.get('/get-my-rides', ride.getMyRides);
router.get('/start-ride', ride.startRide);
router.get('/end-ride', ride.endRide);
router.get('/cancel-ride', ride.cancelRide);

module.exports = {
  router: router,
  basePath: '/api'
};
