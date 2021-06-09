const Router = require('express').Router;

const UserControllers = require('../controllers/contacts/index');

const router = Router();

router.get('/:userId', UserControllers.get);
router.get('/', UserControllers.getAll);
router.post('/', UserControllers.post);
router.put('/:userId', UserControllers.put);
router.delete('/:userId', UserControllers.deleteController)

module.exports = router;
