const ChannelService = require('../../services/mongodb/ChannelService');

exports.getByUserId = async (request, response) => {
    serviceResponse = await ChannelService.getByUserId(request.user.id);
    response.send(serviceResponse, serviceResponse.statusCode);
}
