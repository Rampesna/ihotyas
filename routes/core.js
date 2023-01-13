const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const channelRouter = require('./channel');

// Middlewares
const CorsMiddleware = require('../app/http/middlewares/CorsMiddleware');
const CoreRequestMiddleware = require('../app/http/middlewares/CoreRequestMiddleware');

router.use(CorsMiddleware);
router.use(CoreRequestMiddleware);

router.use('/user', userRouter);
router.use('/channel', channelRouter);

module.exports = router;
