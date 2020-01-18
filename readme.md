## Starting Bitcoin daemon
bitcoind -testnet -daemon -rpcbind=0.0.0.0:0 -rpcpassword=vivekanandan13  -rpcport=8332 -rpcuser=vivek -server -rpcport=8332 -externalip=35.230.185.50 -listen

## HELP
bitcoin-cli -testnet  -rpcuser=vivek  -rpcpassword=vivekanandan13  -rpcport=8332 help

## Check for block
https://www.blockchain.com/explorer

## Send coin to wallet in testnet
https://tbtc.bitaps.com/

## Blockchain Info
bitcoin-cli -testnet  -rpcuser=vivek  -rpcpassword=vivekanandan13  -rpcport=8332 getblockchaininfo

## Get Blockcount
bitcoin-cli -testnet getblockcount
bitcoin-cli -testnet getblockchaininfo

## Generating bitcoin wallet address
bitcoin-cli -testnet  -rpcuser=vivek  -rpcpassword=vivekanandan13  -rpcport=8332 getnewaddress 
> 2Mtog4q3fPhpXJdR3u5EQeMo4htdeWJ7nB5

## Get wallet info
bitcoin-cli -testnet -rpcuser=vivek  -rpcpassword=vivekanandan13 -rpcport=8332 getwalletinfo
bitcoin-cli -testnet getwalletinfo

## Starting lightning
lightningd --daemon --network=testnet  --rpc-file ~/.lightning/lightning-rpc  --bitcoin-rpcuser vivek --bitcoin-rpcpassword vivekanandan13 --bitcoin-rpcconnect 127.0.0.1 --bitcoin-rpcport 8332 --log-level=debug

## Get public key by starting lightning
> 03a1ea769414aa55afe151d6ff4602fd400462c2f46a2aef358c0f8933368ddcee

## Create a lightning wallet address
lightning-cli newaddr

## Lightning address
{
   "address": "tb1q22qpgr4ke949k7wx6vzdmaywj5dsc5jqs9w6pz",
   "bech32": "tb1q22qpgr4ke949k7wx6vzdmaywj5dsc5jqs9w6pz"
}

## Send coins from Bitcoin to Lightning wallet
bitcoin-cli -testnet sendtoaddress tb1q22qpgr4ke949k7wx6vzdmaywj5dsc5jqs9w6pz 0.005

## Transaction ID 
75dc2981f7cb5e6ddbaccb5998dd1ddabd6939ac791e1ee431fde0af56e03242

## Get Info of transaction
bitcoin-cli -testnet  gettransaction 75dc2981f7cb5e6ddbaccb5998dd1ddabd6939ac791e1ee431fde0af56e03242




