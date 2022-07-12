const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'A Photo must have a name'],
			trim: true,
		},
		image: {
			type: String,
			// default: 'default.jpg',
			required: [true, 'A Photo must have a cover image'],
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	},
);
const Gallery = mongoose.model('Gallery', gallerySchema);
module.exports = Gallery;
