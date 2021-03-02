require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift rate saddle erosion just knife fortune stool'; 
let testAccounts = [
"0x1044f553e080d2267df7d357ce0382112fc908eaf48301bba2df96d08be043ba",
"0x14426af4ea5f4681dec080f834c25701b8f9b14ed350d109e625ce05555e8acd",
"0xd63aa4eb1d2775b06ca794f6d91ffaee05782ea8a431803de8e9280678cadacf",
"0xd5bf2d933733c43de853bcba43b90c255435680e25145d4d31bfe89c2a2f6134",
"0x06c5ef08521d7e716f6df6cd7342800086930e330182342cc4f37ba5e008f7c4",
"0xa46eb102d25adea5b995bee0989eaee8be0274c666d51130323c40aa54a4e133",
"0x9742ec3a2d67b58c2a4e68211dbad5c2f83bc40aa8a45add3714659ba9867d68",
"0x5644cbbdc35344bb77b395364ef4f31725c45aed072746f0c2ae3736b4922ff4",
"0x197e1c250cc2a0b24a28707b8aa5fab9b267eb48955ef6212488ce687a484318",
"0x6a25f9ba2b4acf244c4760689dd1db91372faa0ac886536d6cb496e22e6e183a"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
