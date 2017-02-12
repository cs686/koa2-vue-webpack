var log4js = require('log4js');

var config = require('../config/log_config');

log4js.configure(config);

var logUtil = {};
var errorLogger = log4js.getLogger('errorLogger');
var resLogger = log4js.getLogger('resLogger');


//封装错误日志
logUtil.logError = function (ctx, error, resTime) {
    if (ctx && error) {
        errorLogger.error(formatError(ctx, error, resTime));
    }
};
//封装响应日志
logUtil.logResponse = function (ctx, resTime) {
    if (ctx) {
        resLogger.info(formatRes(ctx, resTime));
    }
};

var formatRes = function (ctx, resTime) {
    var logText = new String();
//响应日志开始
    logText += "\n" + "*************** response log start ***************" + "\n";
    //添加请求日志
    logText += formatReqLog(ctx.request, resTime);
    //响应状态码
    logText += "response status: " + ctx.status + "\n";
    //响应内容
    logText += "response body: " + "\n" + JSON.stringify(ctx.body) + "\n";
    //响应日志结束
    logText += "*************** response log end ***************" + "\n";
    return logText;
};

var formatError = function (ctx, err, resTime) {
    var logText = new String();
    logText += "\n" + "*************** error log start ***************" + "\n";
    logText += formatReqLog(ctx.request, resTime);
    logText += "err name: " + err.name + "\n";
    logText += "err message: " + err.message + "\n";
    logText += "err stack: " + err.stack + "\n";
    logText += "*************** error log end ***************" + "\n";
    return logText;
};

var formatReqLog = function (req, resTime) {
    var logText = new String();
    var method = req.method;
    logText += "request method: " + method + "\n";
    logText += "request originalUrl: " + req.originalUrl + "\n";
    logText += "request client ip: " + req.ip + "\n";
    var startTime;
    if (method === 'GET') {
        logText += "request query: " + JSON.stringify(req.query) + "\n";
        startTime = req.query.requestStartTime;
    } else {
        logText += "request body: " + "\n" + JSON.stringify(req.body) + "\n";
        startTime = req.body.requestStartTime;
    }
    logText += "response time: " + resTime + "\n";
    return logText;
};

module.exports = logUtil;


