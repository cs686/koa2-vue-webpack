const router = require('koa-router')();
const gm = require('gm')
const Demo = require('../app/controllers/demo.controller')

router.get('/', Demo.user);

module.exports = router;