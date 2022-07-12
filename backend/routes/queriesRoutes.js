const express = require('express');
const queriesController = require('../controllers/queriesController');
const authController = require('../controllers/authController');
const rateLimit = require('express-rate-limit');
const router = express.Router();
const createQueryLimiter = rateLimit({
	windowMs: 60 * 60 * 1000, // 1 hour
	max: 5, // Limit each IP to 5 create account requests per `window` (here, per hour)
	message:
		'Too many accounts created from this IP, please try again after an hour',
});
router
	.route('/')
	.get(queriesController.getAllQueries)
	.post(queriesController.createQueries, createQueryLimiter);

router
	.route('/:id')
	.get(queriesController.getQueries)
	.delete(
		authController.protect,
		authController.restrictTo('admin'),
		queriesController.deleteQueries,
	);

module.exports = router;
