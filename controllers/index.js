const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
//const dashboardRoutes = require('./gameRoutes');


router.use('/api', apiRoutes);
//router.use('/', dashboardRoutes);
router.use('/', homeRoutes);

module.exports = router;