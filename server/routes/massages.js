var express = require('express');
var router = express.Router();

const massages = [
    {
        userName: 'Miko',
        massage: 'Massage from ..',
        created: Date
    },
    {
        userName: 'Less',
        massage: 'Massage from second ..',
        created: Date
    }
];

/* GET users listing. */
router.get('/', function (req, res, next) {

    res
    .set('Content-type', 'application/json')
    .status(200)
    .json(massages);
});

/* POST massages */
router.post('/', function (req, res, next) {

    massages.push(req.body);

    res
    .set('Content-type', 'application/json')
    .status(200).send('ok');
});


module.exports = router;