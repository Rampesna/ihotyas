const {
    WebSocketServer
} = require('ws');
const wsServer = new WebSocketServer({
    port: 8090,
    host: '192.168.1.37'
});
const PersonalAccessTokenService = require('../../services/mongodb/PersonalAccessTokenService');
// const MessageService = require('../../services/mongodb/MessageService');

exports.startWsServer = () => {
    wsServer.on('connection', (ws) => {
        ws.on('sendMessage', async (
            token,
            receiverId,
            message
        ) => {
            let user = await PersonalAccessTokenService.validateToken(token);
            console.log({
                user,
                receiverId,
                message
            });
        });
    });
}
