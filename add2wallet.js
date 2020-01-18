var rp = require('request-promise');
var coins = require('./config/coins')
const { exec } = require("child_process");

exports.add = async () => {
    var options = {
        method: 'POST',
        uri: 'https://api.bitaps.com/btc/testnet/v1/faucet/send/payment',
        body: coins,
        json: true
    };
    try {
        var response = await rp(options);
        console.log(response)
    } catch (error) {
        console.log(error)
        throw error;
    }

}


exports.transfer = async () => {
    // bitcoin-cli -testnet sendtoaddress  
    var max_amount = coins['max_amount'];
    var lightningd = coins['lightningd'];

    try {
        exec(`bitcoin-cli -testnet sendtoaddress ${lightningd} ${max_amount}`,(error,out,err)=>{
            console.log(error,out,err)
        })
    } catch (error) {
        throw error;
    }
    
}

async function cron() {
    try {
        await exports.add();
        await exports.transfer();
    } catch (error) {
        console.log(error);
    }
}


setInterval(() => {
    console.log('Adding')
    cron();
}, 1 * 1000 * 60 * 5);