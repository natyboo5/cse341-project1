const router = require('express').Router();
// GET /feed/posts
router.get('/', (req, res) => { res.send('Hello World'); });

router.use('/users', require('./users'));

module.exports = router;