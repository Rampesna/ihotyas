const socketIo = require('socket.io')();

exports.startSocketIoServer = () => {
    socketIo.listen(8098);

    socketIo.on('connection', client => {
        client.on('sendMessage', async (data) => {
            socketIo.emit('listenMessage', data);
        });

        client.on('disconnect', () => {
            console.log('client disconnected');
            console.log(client.id);
        });
    });

}
