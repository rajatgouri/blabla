const router = require('express').Router();
const admin = require('../controllers/admin');

router.get('/admin/get-users', admin.getUsers);
router.get('/admin/get-user', admin.getUserById);
router.get('/admin/get-admin-rides', admin.getAdminRides);
router.get('/admin/get-admin-ride', admin.getAdminRide);
router.post('/admin/approve-user', admin.approveUser);

module.exports = {
  router: router,
  basePath: '/api'
};
