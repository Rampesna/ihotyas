const {
    Model,
    Sequelize,
    DataTypes,
} = require('sequelize');
const mongoose = require('mongoose');

const environments = require('dotenv').config().parsed;

const sequelizeConnection = new Sequelize(
    environments.DB_DATABASE,
    environments.DB_USERNAME,
    environments.DB_PASSWORD,
    {
        dialect: environments.DB_CONNECTION,
        host: environments.DB_HOST,
        port: environments.DB_PORT,
    }
);

function mongoDbConnection() {
    mongoose.connect(`mongodb://${environments.MONGO_DB_HOST}:${environments.MONGO_DB_PORT}/${environments.MONGO_DB_NAME}`);
}

module.exports = {
    sequelizeConnection,
    Sequelize,
    DataTypes,
    Model,
    mongoDbConnection
};
