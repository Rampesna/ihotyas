/*
* Express Server Implementation
* */
const express = require('express');
const expressServer = express();

/*
* WS Implementation
* */
const wsServer = require('./app/services/ws/core');
wsServer.startWsServer();

/**
 * Environment Variables
 * */
const environments = require('dotenv').config().parsed;

/**
 * User Routes
 * */
const coreRouter = require('./routes/core');

/**
 * Enable Express Server to use bodyParser
 * Start Express Server Listening
 * */
expressServer.use(express.json());
expressServer.listen(environments.SERVER_PORT);
expressServer.use('/api/v1', coreRouter);

/**
 * Catch 404 and forward to error handler
 * */
expressServer.get('*', (request, response) => {
    response.send({
        isSuccess: false,
        message: 'Page not found!',
        data: null,
        statusCode: 404
    }, 404);
});
