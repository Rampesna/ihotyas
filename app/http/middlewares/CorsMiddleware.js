const CorsMiddleware = async (
    request,
    response,
    next
) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    response.header('Access-Control-Allow-Credentials', true);

    next();
};

module.exports = CorsMiddleware;
