const {serviceResponse} = require('../../core/ServiceResponse');
const IChannelService = require('../../interfaces/IChannelService');
const ChannelModel = require('../../models/mongodb/Channel');

class ChannelService extends IChannelService {
    constructor() {
        super();
    }

    async getByUserId(
        userId
    ) {
        try {
            let channels = await ChannelModel.find({
                $or: [
                    {
                        senderId: userId
                    },
                    {
                        receiverId: userId
                    }
                ]
            });

            return serviceResponse(
                true,
                'Channels are fetched',
                channels,
                200
            );
        } catch (error) {
            return serviceResponse(
                false,
                'Error occurred while fetching channels',
                error,
                500
            );
        }
    }
}

module.exports = new ChannelService();
