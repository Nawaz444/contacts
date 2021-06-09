const Router = require('express').Router;

const contactsRoutes = require('./contacts');


const router = Router();

router.use('/contacts', contactsRoutes);


module.exports = router;
