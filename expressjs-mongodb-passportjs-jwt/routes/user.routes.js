const { Router } = require('express');

const router = new Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/* GET user profile. */
router.get('/profile', (req, res, next) => {
  res.send(req.user);
});

module.exports = router;
