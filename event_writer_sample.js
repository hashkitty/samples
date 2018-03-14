let Web3 = require("Web3");
let ckAbi = require("./ck_abi.json");

let rpcEndpointUrl ="https://mainnet.infura.io/XXXXXXXXXXXXXXXXXX"
let w3 = new Web3(new Web3.providers.HttpProvider(rpcEndpointUrl, 10000));
let ckAddress = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d";
let contract = new w3.eth.Contract(ckAbi, ckAddress)

contract.getPastEvents('Birth', {fromBlock: 5253729, toBlock: 'latest' }, function(error, events) {
    if(error) {
        console.error(error);
    }
    else {
        //success
        console.log(`${events.length} Birth events received`);
    }
});
