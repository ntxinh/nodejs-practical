const { Router } = require('express');
const AuthController = require('../controllers/auth');

const router = new Router();

router.post('/register', (req, res) => {
  AuthController.register(req, res);
});

router.post('/login', (req, res, next) => {
  AuthController.login(req, res, next);
});

module.exports = router;
