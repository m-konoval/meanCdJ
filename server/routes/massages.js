var express = require('express');
var router = express.Router();
var mongouse = require('mongoose');
var Massage = require('../models/Massage.js');



/* ----------- GET ----------- */
// GET users listing
router.get('/', function (req, res, next) {

    Massage
        .find({})
        .exec(function (err, massages) {
            res
                .set('Content-type', 'application/json')
                .status(200)
                .json(massages);
        });

});



/* ----------- POST ----------- */
// POST massage
router.post('/', function (req, res, next) {

    Massage.create(req.body, function(err, massage) {
        res
            .set('Content-type', 'application/json')
            .status(200)
            .send();
    });

});



/* ----------- DELETE ----------- */
// DELETE massage
router.delete('/', function (req, res, next) {

    Massage.deleteOne(req.body, function(err, massage) {
        res
            .set('Content-type', 'application/json')
            .status(200)
            .send();
    });

});



/* ----------- Export ----------- */
module.exports = router;
