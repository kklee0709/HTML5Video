var express = require('express');
var url = require('url');

var router = express.Router();

var todoItems = [
    { id: 1, desc: 'Sample Player from cocotuts', path: './cocotuts' },
    { id: 2, desc: 'Sample Player from Adam', path: './Adam' },
    { id: 3, desc: 'To be added', path: './' }
];

router.get('/', function (req, res) {

    var bUrl = req.protocol+"://"+req.hostname+":"+req.port;
    console.log("url: "+bUrl);

    bUrl = req.protocol+"://"+req.hostname+":5000";
    console.log("url: "+bUrl);


    // load data from DB here
    res.render('index', {
        title: 'HTML5 Video Sample Players',
        url: bUrl,
        items: todoItems
    });
});

router.post('/add', function (req, res) {
    var newItem = req.body.newItem;

    todoItems.push({
        id: todoItems.length + 1,
        desc: newItem
    });

    res.redirect('/');
});

module.exports = router;
