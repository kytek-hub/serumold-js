"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MARKETS = exports.TOKEN_MINTS = void 0;
const token_instructions_1 = require("./token-instructions");
const web3_js_1 = require("@solana/web3.js");
exports.TOKEN_MINTS = [
    {
        address: new web3_js_1.PublicKey('9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E'),
        name: 'BTC',
    },
    {
        address: new web3_js_1.PublicKey('2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk'),
        name: 'ETH',
    },
    {
        address: new web3_js_1.PublicKey('AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3'),
        name: 'FTT',
    },
    {
        address: new web3_js_1.PublicKey('3JSf5tPeuscJGtaCp5giEiDhv51gQ4v3zWg8DGgyLfAB'),
        name: 'YFI',
    },
    {
        address: new web3_js_1.PublicKey('CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG'),
        name: 'LINK',
    },
    {
        address: new web3_js_1.PublicKey('Ga2AXHpfAF6mv2ekZwcsJFqu7wB4NV331qNH7fW9Nst8'),
        name: 'XRP',
    },
    {
        address: new web3_js_1.PublicKey('BQcdHdAQW1hczDbBi9hiegXAR7A98Q9jx3X3iBBBDiq4'),
        name: 'USDT',
    },
    {
        address: new web3_js_1.PublicKey('BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW'),
        name: 'USDC',
    },
    {
        address: token_instructions_1.MSRM_MINT,
        name: 'MSRM',
    },
    {
        address: token_instructions_1.SRM_MINT,
        name: 'SRM',
    },
    {
        address: new web3_js_1.PublicKey('AR1Mtgh7zAtxuxGd2XPovXPVjcSdY3i4rQYisNadjfKy'),
        name: 'SUSHI',
    },
    {
        address: new web3_js_1.PublicKey('SF3oTvfWzEP3DTwGSvUXRrGTvr75pdZNnBLAH9bzMuX'),
        name: 'SXP',
    },
    {
        address: new web3_js_1.PublicKey('CsZ5LZkDS7h9TDKjrbL7VAwQZ9nsRu8vJLhRYfmGaN8K'),
        name: 'ALEPH',
    },
    {
        address: new web3_js_1.PublicKey('BtZQfWqDGbk9Wf2rXEiWyQBdBY1etnUUn6zEphvVS7yN'),
        name: 'HGET',
    },
    { address: token_instructions_1.WRAPPED_SOL_MINT, name: 'SOL' },
];
exports.MARKETS = [
    {
        address: new web3_js_1.PublicKey('EmCzMQfXMgNHcnRoFwAdPe1i2SuiSzMj1mx6wu3KN2uA'),
        name: 'ALEPH/USDT',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('B37pZmwrwXHjpgvd9hHDAx1yeDsNevTnbbrN9W12BoGK'),
        name: 'ALEPH/USDC',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('8AcVjMG2LTbpkjNoyq8RwysokqZunkjy3d5JDzxC6BJa'),
        name: 'BTC/USDT',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('CAgAeMD7quTdnr6RPa7JySQpjf3irAmefYNdTb6anemq'),
        name: 'BTC/USDC',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('HfCZdJ1wfsWKfYP2qyWdXTT5PWAGWFctzFjLH48U1Hsd'),
        name: 'ETH/USDT',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('ASKiV944nKg1W9vsf7hf3fTsjawK6DwLwrnB2LH9n61c'),
        name: 'ETH/USDC',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('8mDuvJJSgoodovMRYArtVVYBbixWYdGzR47GPrRT65YJ'),
        name: 'SOL/USDT',
        deprecated: false,
        programId: new web3_js_1.PublicKey('BJ3jrUzddfuSrZHXSCxMUUQsjKEyLmuuyZebkcaFp2fg'),
    },
    {
        address: new web3_js_1.PublicKey('Cdp72gDcYMCLLk3aDkPxjeiirKoFqK38ECm8Ywvk94Wi'),
        name: 'SOL/USDC',
        deprecated: false,
        programId: new web3_js_1.PublicKey('BJ3jrUzddfuSrZHXSCxMUUQsjKEyLmuuyZebkcaFp2fg'),
    },
    {
        address: new web3_js_1.PublicKey('HARFLhSq8nECZk4DVFKvzqXMNMA9a3hjvridGMFizeLa'),
        name: 'SRM/USDT',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('68J6nkWToik6oM9rTatKSR5ibVSykAtzftBUEAvpRsys'),
        name: 'SRM/USDC',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('DzFjazak6EKHnaB2w6qSsArnj28CV1TKd2Smcj9fqtHW'),
        name: 'SUSHI/USDT',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('9wDmxsfwaDb2ysmZpBLzxKzoWrF1zHzBN7PV5EmJe19R'),
        name: 'SUSHI/USDC',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('GuvWMATdEV6DExWnXncPYEzn4ePWYkvGdC8pu8gsn7m7'),
        name: 'SXP/USDT',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('GbQSffne1NcJbS4jsewZEpRGYVR4RNnuVUN8Ht6vAGb6'),
        name: 'SXP/USDC',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('H4snTKK9adiU15gP22ErfZYtro3aqR9BTMXiH3AwiUTQ'),
        name: 'MSRM/USDT',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('7kgkDyW7dmyMeP8KFXzbcUZz1R2WHsovDZ7n3ihZuNDS'),
        name: 'MSRM/USDC',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('DHDdghmkBhEpReno3tbzBPtsxCt6P3KrMzZvxavTktJt'),
        name: 'FTT/USDT',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('FZqrBXz7ADGsmDf1TM9YgysPUfvtG8rJiNUrqDpHc9Au'),
        name: 'FTT/USDC',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('5zu5bTZZvqESAAgFsr12CUMxdQvMrvU9CgvC1GW8vJdf'),
        name: 'YFI/USDT',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('FJg9FUtbN3fg3YFbMCFiZKjGh5Bn4gtzxZmtxFzmz9kT'),
        name: 'YFI/USDC',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('F5xschQBMpu1gD2q1babYEAVJHR1buj1YazLiXyQNqSW'),
        name: 'LINK/USDT',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('7GZ59DMgJ7D6dfoJTpszPayTRyua9jwcaGJXaRMMF1my'),
        name: 'LINK/USDC',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('BAbc9baz4hV1hnYjWSJ6cZDRjfvziWbYGQu9UFkcdUmx'),
        name: 'HGET/USDT',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
    {
        address: new web3_js_1.PublicKey('uPNcBgFhrLW3FtvyYYbBUi53BBEQf9e4NPgwxaLu5Hn'),
        name: 'HGET/USDC',
        deprecated: false,
        programId: new web3_js_1.PublicKey('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
    },
];
//# sourceMappingURL=tokens_and_markets.js.map