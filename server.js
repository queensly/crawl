let express = require('express');
let path = require('path');
let Move = require('./model');
let app = express();
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.get('/', function (req, res) {
    Move.find({}, function (err, docs) {
        res.render('index',{movies:docs})
    })
});
app.listen(8080);
