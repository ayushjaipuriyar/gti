const express = require('express');
const queriesController = require('../controllers/queriesController');
const authController = require('../controllers/authController');
const router = express.Router();

router
	.route('/')
	.get(queriesController.getAllQueries)
	.post(queriesController.createQueries);

router
	.route('/:id')
	.get(queriesController.getQueries)
	.delete(
		authController.protect,
		authController.restrictTo('admin'),
		queriesController.deleteQueries,
	);

module.exports = router;
