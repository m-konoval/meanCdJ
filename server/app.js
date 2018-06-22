
/* ----------- DEPENDENCIES ----------- */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var mongoose = require('mongoose');

// routes import
var massages = require('./routes/massages');
var users = require('./routes/users');
var auth = require('./routes/authorize');



/* ----------- init APP & SERVER ----------- */
var app = express();
var port = process.env.PORT || '8081';
var server = http.createServer(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



/* ----------- HEADERS settings ----------- */
app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});
/* ----------- HEADERS settings ----------- */



/* ----------- init ROUTES ----------- */
app.use('/massages', massages);
app.use('/users', users);
app.use('/authorize', auth);

// catch 404
app.use(function (req, res, next) {
    next(createError(404));
});



/* ----------- init SOCKET IO ----------- */
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    socket.on('send', function () {
        io.emit('updateChat', true);
    });
});



/* ----------- start TEST connection MongoDB ----------- */
let conctionString = 'mongodb://localhost:27017/massages';

mongoose.Promise = global.Promise;
mongoose.connect(conctionString)
    .then(() => console.log('OK'))
    .catch((err) => console.log('Error: ' + err));
/* ----------- end TEST ----------- */



/* ----------- SERVER & PORT ----------- */
app.set('port', port);
server.listen(port);



/* ----------- EXPORT App ----------- */
module.exports = app;
