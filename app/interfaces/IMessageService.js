class IMessageService {
    constructor() {
        if (!this.getMessages) {
            throw new Error('getMessages method is not implemented');
        }

        if (!this.create) {
            throw new Error('create method is not implemented');
        }
    }
}

module.exports = IMessageService;
