const express = require('express');
const router = express.Router();

const AuthenticationMiddleware = require('../app/http/middlewares/AuthenticationMiddleware');

// Controllers
const ChannelController = require('../app/http/controllers/ChannelController');

// Requests
const GetByUserIdRequest = require('../app/http/requests/ChannelController/GetByUserIdRequest');

router.use(AuthenticationMiddleware);
router.get('/getByUserId', GetByUserIdRequest, ChannelController.getByUserId);

module.exports = router;
