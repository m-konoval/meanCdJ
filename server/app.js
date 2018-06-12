var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var mongoose = require('mongoose');

require('long-stack-traces');

//var index = require('./routes/index');
var massages = require('./routes/massages');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let conctionString = 'mongodb://localhost:27017/massages';

mongoose.Promise = global.Promise;
mongoose.connect(conctionString)
    .then(() => console.log('OK'))
    .catch((err) => console.log('Error: ' + err));

app.all('/*', function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
   res.header('Access-Control-Allow-Headers', 'Content-type,Accept');

   if(req.method === 'OPTIONS') {
       res.status(200).end();
   } else {
       next();
   }
});

//app.use('/', index);
app.use('/massages', massages);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

var port = process.env.PORT || '8081';
app.set('port', port);

var server = http.createServer(app);

server.listen(port);

module.exports = app;
