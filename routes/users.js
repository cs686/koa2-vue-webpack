const router = require('koa-router')();

router.get('/', function (ctx, next) {
    ctx.body = {
        username:'Jim',
        age:30
    }
});

module.exports = router;
