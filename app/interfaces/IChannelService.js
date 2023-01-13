class IChannelService {
    constructor() {
        if (!this.getByUserId) {
            throw new Error('getByUserId method is not implemented');
        }
    }
}

module.exports = IChannelService;
