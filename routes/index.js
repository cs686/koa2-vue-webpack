const router = require('koa-router')();
// const User = require('../app/c')

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title'
  };

  await ctx.render('index');
})
module.exports = router;
