const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const newsRouter = require('./routes/newsRoutes');
const queryRouter = require('./routes/queriesRoutes');
const userRouter = require('./routes/userRoutes');
const crossOriginResourcePolicy = require('cross-origin-resource-policy');

const app = express();

app.enable('trust proxy');
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use('/', crossOriginResourcePolicy({ policy: 'cross-origin' }));
// 1) GLOBAL MIDDLEWARES
// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
	max: 100,
	windowMs: 60 * 60 * 1000,
	message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Serving static files
console.log(__dirname);
app.use(express.static(`${__dirname}/public`));
app.use(compression());
// Test middleware
app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	// console.log(req.headers);
	next();
});

// 3) ROUTES
app.use('/api/v1/news', newsRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/query', queryRouter);
app.all('*', (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
