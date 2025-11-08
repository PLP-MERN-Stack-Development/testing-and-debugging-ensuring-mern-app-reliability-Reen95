const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/userController');

router.post('/', ctrl.createUser);
router.get('/', ctrl.listUsers);

module.exports = router;
