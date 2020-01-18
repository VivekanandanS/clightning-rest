var socket = require('./socket');
exports.place = (user, items) => {
    var msatoshi = 0;

    try {
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            msatoshi = msatoshi + (await getPrice() * element['quantity'])
        }
        var random = parseInt(Math.random * 10000)
        var invoice = await socket.createInvoice(msatoshi, `LASTBITINVOCE${random}`, 'Order from user')
        await storeUserTransaction(user, invoice);
        return `LASTBITINVOCE${random}`;
    } catch (error) {
        throw error;
    }

}

async function getPrice() {
    return 1000;
}

async function storeUserTransaction(user, items) {

}