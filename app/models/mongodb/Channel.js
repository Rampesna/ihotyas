const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {
    mongoDbConnection
} = require('../../../config/database');

mongoDbConnection();

let ChannelSchema = new Schema({
    senderId: {
        type: String,
        required: [
            true, 'senderId is required'
        ]
    },
    receiverId: {
        type: String,
        required: [
            true, 'receiverId is required'
        ]
    }
});

let ChannelModel = mongoose.model('channels', ChannelSchema);

module.exports = ChannelModel;
