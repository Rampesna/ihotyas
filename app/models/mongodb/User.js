const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const {
    mongoDbConnection
} = require('../../../config/database');

mongoDbConnection();

let UserSchema = new Schema({
    name: {
        type: String, required: [
            true, 'Name is required'
        ]
    },
    email: {
        type: String, unique: true, required: [
            true, 'Email is required'
        ]
    },
    password: String,
    created_at: Date,
    updated_at: Date,
    group_ids: [Number]
});

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

let UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
