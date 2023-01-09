const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {
    mongoDbConnection
} = require('../../../config/database');

mongoDbConnection();

let MessageSchema = new Schema({
    senderId: {
        type: Number,
        required: [
            true, 'senderId is required'
        ]
    },
    receiverType: {
        type: String,
        required: [
            true, 'receiverType is required'
        ]
    },
    receiverId: {
        type: Number,
        required: [
            true, 'receiverId is required'
        ]
    },
    message: {
        type: String,
        required: [
            true, 'message is required',
        ]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
    },
    deletedAt: {
        type: Date,
    }
});

let MessageModel = mongoose.model('messages', MessageSchema);

module.exports = MessageModel;
