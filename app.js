//noinspection JSUnresolvedFunction
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const logUtil = require('./utils/log_util');

const response_formatter = require('./app/middleware/response_formatter');


const api = require('./routes/api');
const index = require('./routes/index');
const users = require('./routes/users');

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(response_formatter('^/api'));
app.use(convert(require('koa-static')(__dirname + '/public')));

app.use(views(__dirname + '/views', {
  extension: 'jade'
}));

// app.use( async(ctx, next)=>{
//   const start = new Date();
//   var ms;
//   try{
//     await next();
//     ms = new Date() - start;
//     logUtil.logResponse(ctx, ms)
//   } catch (error) {
//     ms = new Date() - start;
//     logUtil.logError(ctx, error, ms)
//   }
// });


router.use('/', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());
router.use('/api', api.routes(), api.allowedMethods());


app.use(router.routes(), router.allowedMethods());

// response
// app.on('error', function(err, ctx){
//   logger.error('server error', err, ctx);
// });


module.exports = app;