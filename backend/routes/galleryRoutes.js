const express = require('express');
const galleryController = require('../controllers/galleryController');
const authController = require('../controllers/authController');
const router = express.Router();

router
	.route('/')
	.get(galleryController.getAllGallery)
	.post(
		authController.protect,
		authController.restrictTo('admin'),
		galleryController.uploadGalleryImages,
		galleryController.resizeGalleryImages,
		galleryController.createGallery,
	);

router
	.route('/:id')
	.get(galleryController.getGallery)
	.patch(
		authController.protect,
		authController.restrictTo('admin'),
		galleryController.uploadGalleryImages,
		galleryController.resizeGalleryImages,
		galleryController.updateGallery,
	)
	.delete(
		authController.protect,
		authController.restrictTo('admin'),
		galleryController.deleteGallery,
	);

module.exports = router;
