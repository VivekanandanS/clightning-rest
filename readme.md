## Starting Bitcoin daemon
bitcoind -testnet -daemon -rpcbind=0.0.0.0:0 -rpcpassword=vivekanandan13  -rpcport=8332 -rpcuser=vivek -server -rpcport=8332 -externalip=34.70.161.121 -listen

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
> 2N4itjJPynyKo4JQ8mmvocSaGETCDzGbLYG

## Get wallet info
bitcoin-cli -testnet -rpcuser=vivek  -rpcpassword=vivekanandan13 -rpcport=8332 getwalletinfo
bitcoin-cli -testnet getwalletinfo

## Starting lightning
lightningd --daemon --network=testnet  --rpc-file ~/.lightning/lightning-rpc  --bitcoin-rpcuser vivek --bitcoin-rpcpassword vivekanandan13 --bitcoin-rpcconnect 127.0.0.1 --bitcoin-rpcport 8332 --log-level=debug

## Get public key by starting lightning
> 02deed2acc25ebc5951002b75a2278600aef95684d9f7c34afe824bfc2a6c7be99

## Get Info
lightning-cli getinfo

## Create a lightning wallet address
lightning-cli newaddr

## Lightning address
```json
{
   "address": "tb1qyg36u95sltvjtkuqpqm52j276e3kuueeuvrlal",
   "bech32": "tb1qyg36u95sltvjtkuqpqm52j276e3kuueeuvrlal"
}
```

# Basics of transaction
> https://medium.com/@Jayvdb/setting-up-and-transacting-on-the-bitcoin-lightning-network-a9ada42ec305


## Send coins from Bitcoin to Lightning wallet
bitcoin-cli -testnet sendtoaddress tb1q22qpgr4ke949k7wx6vzdmaywj5dsc5jqs9w6pz 0.005

## Transaction ID 
75dc2981f7cb5e6ddbaccb5998dd1ddabd6939ac791e1ee431fde0af56e03242

## Get Info of transaction
bitcoin-cli -testnet  gettransaction 75dc2981f7cb5e6ddbaccb5998dd1ddabd6939ac791e1ee431fde0af56e03242

## Connect to a node
lightning-cli connect 0331f80652fb840239df8dc99205792bba2e559a05469915804c08420230e23c7c 34.200.181.109 9735
>0331f80652fb840239df8dc99205792bba2e559a05469915804c08420230e23c7c


lightning-cli fundchannel 0331f80652fb840239df8dc99205792bba2e559a05469915804c08420230e23c7c 500000


lightning-cli getroute 0331f80652fb840239df8dc99205792bba2e559a05469915804c08420230e23c7c 500000 




