const router = require('express').Router();
const routes = [
    'auth',
    'vehicle',
    'verify',
    'admin',
    'ride',
    'payment'
];

module.exports = {
    init: function() {
        routes.forEach(route => {
            const defination = require(`./${route}`);
            router.use(defination.basePath, defination.router)
        });
        return router;
    }
}