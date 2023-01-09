const {serviceResponse} = require('../../core/ServiceResponse');
const IMessageService = require('../../interfaces/IMessageService');
const MessageModel = require('../../models/mongodb/Message');

class MessageService extends IMessageService {
    constructor() {
        super();
    }

    async getMessages(
        pageIndex,
        pageSize,
        senderId,
        receiverType,
        receiverId
    ) {
        try {
            let messages = await MessageModel.find({
                senderId: senderId,
                receiverType: receiverType,
                receiverId: receiverId
            }).skip(pageIndex * pageSize).limit(pageSize).sort({
                createdAt: -1
            });

            return serviceResponse(
                true,
                'Messages fetched successfully',
                messages,
                200
            );
        } catch (error) {
            return serviceResponse(
                false,
                'Error occurred while fetching messages',
                error,
                500
            );
        }
    }

    async create(
        senderId,
        receiverType,
        receiverId,
        message
    ) {
        try {
            let newMessage = await MessageModel.create({
                senderId: senderId,
                receiverType: receiverType,
                receiverId: receiverId,
                message: message
            });

            return serviceResponse(
                true,
                'Message created successfully',
                newMessage,
                200
            );
        } catch (error) {
            return serviceResponse(
                false,
                'Error occurred while creating message',
                error,
                500
            );
        }
    }
}

module.exports = new MessageService();
