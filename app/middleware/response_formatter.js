const response_formatter = async(ctx) => {
    if (ctx.body){
        ctx.body={
            code:0,
            message:'success',
            data:ctx.body
        }
    } else {
        ctx.body = {
            code: 0, message: 'success'
        }
    }
};
const url_filter = function (pattern) {
  return async function (ctx, next) {
      let reg = new RegExp(pattern);
      await next();
      if (reg.test(ctx.originalUrl)){
          response_formatter(ctx);
      }
  }
};
module.exports = url_filter;