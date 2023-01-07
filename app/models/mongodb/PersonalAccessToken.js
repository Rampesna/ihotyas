const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {
    mongoDbConnection
} = require('../../../config/database');

mongoDbConnection();

let PersonalAccessTokenSchema = new Schema({
    tokenableType: String,
    tokenableId: String,
    token: String,
    userAgent: String,
    lastUsedAt: String,
    createdAt: String,
    deletedAt: String,
});

let PersonalAccessTokenModel = mongoose.model('personal_access_tokens', PersonalAccessTokenSchema);

module.exports = PersonalAccessTokenModel;
