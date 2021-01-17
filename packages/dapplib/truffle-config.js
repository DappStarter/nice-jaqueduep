require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food plastic reward stereo prosper install clog army gaze'; 
let testAccounts = [
"0xc5718c10b3102ff9e0906d034f9ffa2b7e3ec3a4de5523d343bed843cde4a14b",
"0x776b6243a229737a6d81c972492e721cdfcdfa6655d20bb0f5572d62eab38930",
"0xf1b248ccaad8cf76dc5cb6de7ac260728f987d5daa04133f1583d50a39ec243e",
"0xe3ddcce40cc1a837b3b6660a906f11ac22fefb34fb6ea6fa78c2f2b10db08770",
"0x77d44ee0a619279240b61dc2afa092ab9153c73e94c2d532b991ed91cd6fec5e",
"0x667984f90ef590fbd354df76f75c8d4b04f2429367c47aa8d9a6b49059002e36",
"0xbefa75cfff13da550adcdee339733e44b9429286f0c7df81361dfd532bff99e1",
"0xc431b17652a396a0c3bc27eb1bf8c027ac9f8b12cf84156abff1f774b60ed697",
"0x5c8c495cf81be860cc517e231b853a1258caf1548d1e76c0ad0dbe6b36fbcc2e",
"0xae4df3ba8766aedadead79dfcf844e9f447f9dfb26c08d3fb1aab478a50d1426"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
