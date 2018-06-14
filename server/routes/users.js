var express = require('express');
var router = express.Router();
var mongouse = require('mongoose');
var User = require('../models/User.js');


/* ----------- GET ----------- */
/* GET users list. */
router.get('/', function (req, res, next) {

    User
        .find()
        .exec(function (err, users) {
            res
                .set('Content-type', 'application/json')
                .status(200)
                .json(users);
        });

});

/* GET user by id. */
router.get('/:id', function (req, res, next) {

    User
        .find({'_id': req.params.id})
        .exec(function (err, user) {
            res
                .set('Content-type', 'application/json')
                .status(200)
                .json(user);
        });

});


/* ----------- POST ----------- */
/* POST user create */
router.post('/', function (req, res, next) {

    User.create(req.body, function(err, user) {
        res
            .set('Content-type', 'application/json')
            .status(200)
            .send('end');
    });

});


/* ----------- PUT ----------- */
/* PUT user update */
router.put('/', function (req, res, next) {

    User.findByIdAndUpdate(req.body, function(err, user) {
        res
            .set('Content-type', 'application/json')
            .status(200)
            .send('end');
    });

});


/* Export */
module.exports = router;
