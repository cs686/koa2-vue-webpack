var path = require('path');

var baseLogPath = path.resolve(__dirname, "../logs");

//错误日志目录
var errorPath = "/error";
//错误日志文件名
var errorFileName = "error";
//错误日志输出完整路径
var errorLogPath = baseLogPath + errorPath + "/" + errorFileName;


//错误日志目录
var responsePath = "/response";
//错误日志文件名
var responseFileName = "response";
//错误日志输出完整路径
var responseLogPath = baseLogPath + responsePath + "/" + responseFileName;


module.exports = {
    "appenders":
        [
            {
                "category":"errorLogger",
                "type":"dateFile",
                "filename": errorLogPath,
                "alwaysIncludePattern":true,
                "pattern": "-yyyy-MM-dd-hh.log"
            },
            {
                "category":"resLogger",
                "type":"dateFile",
                "filename": responseLogPath,
                "alwaysIncludePattern":true,
                "pattern": "-yyyy-MM-dd-hh.log"
            }
        ],
    "levels":
        {
            "errorLogger":"ERROR",
            "resLogger":"ALL"
        }
}