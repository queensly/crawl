let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
let async = require('async');
let debug = require('debug');
let logger = debug('crawl:read');
module.exports = function (url, callback) {
    request({url,encoding:null}, function (err, response, body) {
        body = iconv.decode(body,'gbk');
        var movies = [];
        var $ = cheerio.load(body);
        $('.keyword .list-title').each(function () {
            var $this = $(this);
            var movie = {
                name:$this.text(),
                url:$this.attr('href')
            };
            logger(`读到电影: ${movie.name}`);
            movies.push(movie);
        });
        callback(err,movies);
    })
};