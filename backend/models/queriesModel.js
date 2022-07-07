const mongoose = require('mongoose');
const validator = require('validator');

const queriesSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'A person must have a name'],
		},
		designation: {
			type: String,
			required: [true, 'A person must have a designation  '],
			trim: true,
		},
		organization: {
			type: String,
			required: [true, 'A person must have a Organization  '],
		},
		phoneno: {
			type: String,
			required: [true, 'A person must have a phone no  '],
			validate: [
				validator.isMobilePhone,
				'Please provide a valid phone number',
			],
		},
		email: {
			type: String,
			required: [true, 'Please provide your email'],
			lowercase: true,
			validate: [validator.isEmail, 'Please provide a valid email'],
		},
		query: {
			type: String,
			required: [true, 'A person must have a query  '],
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	},
);

// queriesSchema.post(/^find/, function (docs, next) {
// 	console.log(`Query took ${Date.now() - this.start} milliseconds!`);
// 	next();
// });

const Queries = mongoose.model('Queries', queriesSchema);
module.exports = Queries;
