const multer = require('multer');
const sharp = require('sharp');
const Gallery = require('../models/galleryModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('../utils/appError');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
	if (file.mimetype.startsWith('image')) {
		cb(null, true);
	} else {
		cb(new AppError('Not an image! Please upload only image.', 400), false);
	}
};

const upload = multer({
	storage: multerStorage,
	fileFilter: multerFilter,
});

exports.uploadGalleryImages = upload.fields([{ name: 'image', maxCount: 1 }]);

exports.resizeGalleryImages = catchAsync(async (req, res, next) => {
	if (!req.files.image) return next();

	// 1) Cover image
	req.body.image = `gallery-${Date.now()}.jpeg`;
	await sharp(req.files.image[0].buffer)
		.resize(2000, 1333)
		.toFormat('jpeg')
		.jpeg({ quality: 90 })
		.toFile(`public/img/gallery/${req.body.image}`);
	next();
});

exports.getAllGallery = factory.getAll(Gallery);
exports.getGallery = factory.getOne(Gallery);
exports.createGallery = factory.createOne(Gallery);
exports.updateGallery = factory.updateOne(Gallery);
exports.deleteGallery = factory.deleteOne(Gallery);
