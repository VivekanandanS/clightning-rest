var net = require('net')
var config = require('../config/lightning')
var SOCKET_PATH = config.SOCKET_PATH;
/**
 * @template lightning-cli invoice 10000 vivekanandan002 vivekanandan002
 * @description 
 * https://github.com/ElementsProject/lightning/blob/master/doc/lightning-invoice.7.md
 */
exports.createInvoice = (msatoshi, label, description, expiry, fallbacks, preimage, exposeprivatechannels) => {
    var payload = {
        jsonrpc: "2.0",
        id: new Date().getTime(),
        method: 'invoice',
        params: [msatoshi, label, description, expiry, fallbacks, preimage, exposeprivatechannels]
    }
    var MAX_TIME_OUT = 4000;
    var MAX_RESPONSE = null;
    return new Promise((resolve, reject) => {
        
        var client = net.createConnection(SOCKET_PATH, () => {
            /**
             * Write to unix socket
             */
            client.write(JSON.stringify(payload));
            client.setTimeout(MAX_TIME_OUT);
            MAX_RESPONSE = setTimeout(() => {
                MAX_RESPONSE = null;
                return reject('LASTBIT:100');
            }, MAX_TIME_OUT);
        });

        client.on('data', (response) => {
            if (MAX_RESPONSE)
                clearTimeout(MAX_RESPONSE);
            /**
             * response = {
             *  expiry_time  :unix timestamp,
             *  bolt11:<hashed details of reciever>
             * }
             */
            return resolve(lightningd(response))
        })

        client.on('error', (data) => {
            return reject('LASTBIT:101');
        });

    });
}


function lightningd(response) {
    if (typeof response == 'string')
        response = JSON.parse(response);
    if (response['error'])
        throw response['error'];
    return response['result'];
}