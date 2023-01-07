const {
    WebSocketServer
} = require('ws');
const wsServer = new WebSocketServer({
    port: 8080,
    host: 'localhost'
});

exports.startWsServer = () => {
    wsServer.on('connection', (ws) => {
        ws.on('message', (message) => {
            console.log('received: %s', message);
        });

        ws.send('something');
    });
}
