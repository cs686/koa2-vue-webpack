const models = require('../../models');
exports.getUser = async(ctx, next) => {
    console.log(3333)
    const author = await models.User.findById(1);
    ctx.body = {
        author
    }
};

exports.registerUser = async(ctx, next) => {
    // console.log('registerUser', ctx.request.body);
    ctx.body = 2
};

exports.getIndex = async(ctx, next) => {
    const author = await models.User.findById(1);
    await ctx.render('index', {
        title: 'sss',
        contentData: JSON.stringify(author)
    });
}