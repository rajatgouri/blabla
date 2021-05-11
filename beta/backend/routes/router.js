const router = require('express').Router();
const routes = [
    'auth',
    'vehicle',
    'verify',
    'admin'
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