const router = require('express').Router();
const verify = require('../controllers/verify');

router.get('/get-email-otp',verify.emailOtpSend);
router.get('/get-phone-otp',verify.phoneOtpSend);
router.post('/verify-phone-otp',verify.phoneOtpCheck);
router.post('/verify-email-otp',verify.verifyEmail);
router.post('/verify-forgot',verify.forgotOtpCheck);
router.post('/upload-id', verify.uploadId);

module.exports = {
  router: router,
  basePath: '/api'
};
