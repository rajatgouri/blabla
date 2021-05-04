const router = require('express').Router();
const client = require('../controllers/user');

router.post('/client/signup',client.registerUser);
router.post('/driver/signup',client.registerDriver);
router.get('/get-email-otp',client.emailOtpSend);
router.get('/get-phone-otp',client.phoneOtpSend);
router.post('/verify-email-otp',client.verifyEmail);
router.post('/login', client.loginUser);

module.exports = {
  router: router,
  basePath: '/api'
};
