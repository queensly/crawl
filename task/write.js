var Movie = require('../model');
var async = require('async');
var logger = require('debug')('crawl:write');
module.exports = function (movies,callback) {
    async.forEach(movies, function (movie, cb) {
        Movie.create(movie,cb);
        logger(`写入电影 ${movie.url}`);
    },callback)
};