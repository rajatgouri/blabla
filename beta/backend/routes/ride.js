const router = require('express').Router();
const ride = require('../controllers/ride');

router.post('/add-ride', ride.addRide);

module.exports = {
  router: router,
  basePath: '/api'
};
