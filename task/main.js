let async = require('async');
let read = require('./read');
let write = require('./write');
let logger = require('debug')('crawl:main');
var url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
logger('start');
async.waterfall([
    function (callback) {
        read(url,callback);
    },
    function (data,callback) {
        console.log(data);
        write(data,callback);
    }
], function (err,result) {
    logger('success')
});