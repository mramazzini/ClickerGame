const router = require('express').Router();
const apiRoutes = require('./api');
const dashboardRoutes = require('./gameRoutes');


router.use('/api', apiRoutes);
router.use('/', dashboardRoutes);

module.exports = router;