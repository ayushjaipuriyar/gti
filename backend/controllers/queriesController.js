const sharp = require('sharp');
const Queries = require('./../models/queriesModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('./../utils/appError');

exports.getAllQueries = factory.getAll(Queries);
exports.getQueries = factory.getOne(Queries);
exports.createQueries = factory.createOne(Queries);
exports.updateQueries = factory.updateOne(Queries);
exports.deleteQueries = factory.deleteOne(Queries);
