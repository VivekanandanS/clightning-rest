var websocket = null;
exports.init = (io) => {
    websocket = io;
    if (!websocket)
        return;
    websocket.on('connection', client => {

        client.on('join', data => {
            //Fetch n transaction involved by user from DB , 
            var transactions = [];
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                /**
                 * So the user has been add to room , where he involved in
                 * transaction 
                 * We can now emit all events related to a praticular transactiion
                 */
                client.join(`${invoice}`);
            }


        });


        /**
         * When ever new invoce is created, unique invoice/bolt11 
         * will be generated , which would be sent to client.
         * Later he would emit to the server, we make use this to send
         * all notification the client
         */
        client.on('new-transaction', (invoice) => {
            client.join(invoice);
        });


        client.on('disconnect', () => {
            // do something when client goes offline
        });
    });
}


exports.notifyInovice = (invoice, status) => {
    io.to(invoice).emit('transaction', status)
}