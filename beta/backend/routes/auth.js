const router = require('express').Router();
const client = require('../controllers/user');

router.post('/client/signup',client.registerUser);
router.post('/driver/signup',client.registerDriver);
router.post('/login', client.loginUser);

module.exports = {
  router: router,
  basePath: '/api'
};
