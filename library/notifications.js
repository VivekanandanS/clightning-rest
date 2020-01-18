/**
 * @reference
 * https://lightning.readthedocs.io/PLUGINS.html#channel-opened
 */
var net = require('net')
var config = require('../config/lightning')
var SOCKET_PATH = config.SOCKET_PATH;
var websocket = require('./websocket')

var client = net.createConnection(SOCKET_PATH, () => {
    console.log('Connected to lightning ');
});


/**
* A notification for topic channel_opened is sent if a peer successfully funded a channel with us. It contains the 
* peer id, the funding amount (in millisatoshis), the funding transaction id, and a boolean indicating if the funding
* transaction has been included into a block.
*/
client.on('channel_opened', () => {

})


/**
 * A notification for topic connect is sent every time a new connection to a peer is established.
 */
client.on('connect', () => {

})

/**
 * A notification for topic disconnect is sent every time a connection to a peer was lost.
 */
client.on('disconnect', () => {

})


/**
 * A notification for topic invoice_payment is sent every time an invoie is paid.
 * @refer
 * https://lightning.readthedocs.io/PLUGINS.html#invoice-payment
 */
client.on('invoice_payment', (status) => {
    websocket.notifyInovice(status['label'], status);
})

/**
 * A notification for topic warning is sent every time a new BROKEN /UNUSUAL level(in plugins, we use error/warn) log 
 * generated, which means an unusual/borken thing happens, such as channel failed, message resolving failed…
 */
client.on('warning', () => {

})


/**
 * A notification for topic forward_event is sent every time the status of a forward payment is set.
 * The json format is same as the API listforwards.
 */
client.on('forward_event', () => {

})

/**
 * A notification for topic sendpay_success is sent every time a sendpay succeeds (with complete status). 
 * The json is the same as the return value of the commands sendpay/waitsendpay when these commands succeed.
 */
client.on('sendpay_success', () => {

})


/**
 * A notification for topic sendpay_failure is sent every time a sendpay completes with failed status.
 *  The JSON is same as the return value of the commands sendpay/waitsendpay when these commands fail.
 */
client.on('sendpay_failure', () => {

})