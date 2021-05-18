const router = require('express').Router();
const payment = require('../controllers/payment');

router.post('/pay', payment.processPayment);
router.post('/confirm-ride', payment.confirmRide);

module.exports = {
  router: router,
  basePath: '/api'
};
