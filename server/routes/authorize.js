var express = require('express');
var router = express.Router();
var mongouse = require('mongoose');
var User = require('../models/User.js');



/* ----------- POST ----------- */
// POST authorize user for login
router.post('/', function (req, res, next) {

    User
        .findOne(
            { 'userName': req.body.userName }
        )
        .exec(function (err, user) {
            res
                .set('Content-type', 'application/json')
                .status(200)
                .json(user);
        });

});



/* ----------- Export ----------- */
module.exports = router;
