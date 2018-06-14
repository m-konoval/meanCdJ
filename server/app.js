
/* ----------- DEPENDENCIES ----------- */
require('long-stack-traces');

var createError     = require('http-errors');
var express         = require('express');
var path            = require('path');
var cookieParser    = require('cookie-parser');
var logger          = require('morgan');
var http            = require('http');
var mongoose        = require('mongoose');

// routes import
var index           = require('./routes/index');
var massages        = require('./routes/massages');
var users           = require('./routes/users');



/* ----------- init APP ----------- */
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



/* ----------- init ROUTES ----------- */
app.use('/', index);
app.use('/massages', massages);
app.use('/users', users);

// catch 404 
app.use(function (req, res, next) {
    next(createError(404));
});



/* ----------- SERVER & PORT ----------- */
var port    = process.env.PORT || '8081';
var server  = http.createServer(app);

    app.set('port', port);
    server.listen(port);



/* ----------- start TEST connection MongoDB ----------- */
let conctionString = 'mongodb://localhost:27017/massages';

mongoose.Promise = global.Promise;
mongoose.connect(conctionString)
    .then(() => console.log('OK'))
    .catch((err) => console.log('Error: ' + err));
/* ----------- end TEST ----------- */



/* ----------- HEADERS settings ----------- */
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
/* ----------- HEADERS settings ----------- */



/* ----------- EXPORT App ----------- */
module.exports = app;
