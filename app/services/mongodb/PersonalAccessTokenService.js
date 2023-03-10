const {serviceResponse} = require('../../core/ServiceResponse');
const IPersonalAccessTokenService = require('../../interfaces/IPersonalAccessTokenService');
const PersonalAccessTokenModel = require('../../models/mongodb/PersonalAccessToken');
const jwt = require('jsonwebtoken');
const environments = require('dotenv').config().parsed;
const helpers = require('../../utils/helpers');

class PersonalAccessTokenService extends IPersonalAccessTokenService {
    constructor() {
        super();
    }

    async generateToken(
        user,
        userAgent,
    ) {
        let token = jwt.sign({
            id: user.id,
            email: user.email,
            name: user.name,
        }, environments.JWT_SECRET_KEY);

        await PersonalAccessTokenModel.create({
            tokenableType: 'User',
            tokenableId: user.id,
            token: token,
            userAgent: userAgent,
            lastUsedAt: null,
            createdAt: helpers.reformatDatetimeTo_YYYY_MM_DD_HH_MM_SS(Date.now()),
            deletedAt: null,
        });

        return serviceResponse(
            true,
            'Token is generated',
            token,
            200,
        );
    }

    async validateToken(token) {
        let personalAccessToken = await PersonalAccessTokenModel.findOne({
            token: token,
        });
        if (!personalAccessToken) {
            return serviceResponse(
                false,
                'Token is not valid',
                null,
                401,
            );
        } else {
            return jwt.verify(personalAccessToken.token, environments.JWT_SECRET_KEY, (err, decoded) => {
                if (err) {
                    return serviceResponse(
                        false,
                        'Token is not valid',
                        null,
                        401,
                    );
                }

                personalAccessToken.lastUsedAt = helpers.reformatDatetimeTo_YYYY_MM_DD_HH_MM_SS(Date.now());
                personalAccessToken.save();

                return serviceResponse(
                    true,
                    'Token is valid',
                    decoded,
                    200,
                );
            });
        }
    }
}

module.exports = new PersonalAccessTokenService;
