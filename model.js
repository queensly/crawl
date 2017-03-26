/**
 * Created by Administrator on 2017/3/26.
 */
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/crawl');
var MovieSchema = new mongoose.Schema({
    name:String,
    url:String
});
module.exports = mongoose.model('Movies',MovieSchema);