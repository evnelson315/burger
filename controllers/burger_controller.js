/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
	res.redirect('/burger');
});

router.get('/burger', function (req, res) {
	burger.all(function (data) {
		var hbsObject = { burger: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burger/create', function (req, res) {
	burger.create(['name', 'devour'], [req.body.name, 0], function () {
		res.redirect('/burger');
	});
});

router.put('/burger/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({ devour: req.body.devour }, condition, function () {
		res.redirect('/burger');
	});
});

module.exports = router;
