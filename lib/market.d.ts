/// <reference types="node" />
import { Slab } from './slab';
import BN from 'bn.js';
import { Account, AccountInfo, Connection, PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js';
export declare const MARKET_STATE_LAYOUT: any;
export declare class Market {
    private _decoded;
    private _baseSplTokenDecimals;
    private _quoteSplTokenDecimals;
    private _skipPreflight;
    private _confirmations;
    private _programId;
    private _openOrdersAccountsCache;
    constructor(decoded: any, baseMintDecimals: number, quoteMintDecimals: number, options: MarketOptions | undefined, programId: PublicKey);
    static get LAYOUT(): any;
    static load(connection: Connection, address: PublicKey, options: MarketOptions | undefined, programId: PublicKey): Promise<Market>;
    get address(): PublicKey;
    get publicKey(): PublicKey;
    get baseMintAddress(): PublicKey;
    get quoteMintAddress(): PublicKey;
    get bidsAddress(): PublicKey;
    get asksAddress(): PublicKey;
    loadBids(connection: Connection): Promise<Orderbook>;
    loadAsks(connection: Connection): Promise<Orderbook>;
    loadOrdersForOwner(connection: Connection, ownerAddress: PublicKey, cacheDurationMs?: number): Promise<Order[]>;
    filterForOpenOrders(bids: Orderbook, asks: Orderbook, openOrdersAccounts: OpenOrders[]): Order[];
    findBaseTokenAccountsForOwner(connection: Connection, ownerAddress: PublicKey, includeUnwrappedSol?: boolean): Promise<Array<{
        pubkey: PublicKey;
        account: AccountInfo<Buffer>;
    }>>;
    findQuoteTokenAccountsForOwner(connection: Connection, ownerAddress: PublicKey, includeUnwrappedSol?: boolean): Promise<{
        pubkey: PublicKey;
        account: AccountInfo<Buffer>;
    }[]>;
    findOpenOrdersAccountsForOwner(connection: Connection, ownerAddress: PublicKey, cacheDurationMs?: number): Promise<OpenOrders[]>;
    placeOrder(connection: Connection, { owner, payer, side, price, size, orderType, clientId, }: OrderParams): Promise<string>;
    makePlaceOrderTransaction<T extends PublicKey | Account>(connection: Connection, { owner, payer, side, price, size, orderType, clientId, }: OrderParams<T>, cacheDurationMs?: number): Promise<{
        transaction: Transaction;
        signers: (Account | T)[];
    }>;
    makePlaceOrderInstruction<T extends PublicKey | Account>(connection: Connection, { owner, payer, side, price, size, orderType, clientId, }: OrderParams<T>, openOrdersAddress: any): TransactionInstruction;
    private _sendTransaction;
    cancelOrderByClientId(connection: Connection, owner: Account, openOrders: PublicKey, clientId: BN): Promise<string>;
    makeCancelOrderByClientIdTransaction(connection: Connection, owner: PublicKey, openOrders: PublicKey, clientId: BN): Promise<Transaction>;
    cancelOrder(connection: Connection, owner: Account, order: Order): Promise<string>;
    makeCancelOrderTransaction(connection: Connection, owner: PublicKey, order: Order): Promise<Transaction>;
    makeCancelOrderInstruction(connection: Connection, owner: PublicKey, order: Order): TransactionInstruction;
    settleFunds(connection: Connection, owner: Account, openOrders: OpenOrders, baseWallet: PublicKey, quoteWallet: PublicKey): Promise<string>;
    makeSettleFundsTransaction(connection: Connection, openOrders: OpenOrders, baseWallet: PublicKey, quoteWallet: PublicKey): Promise<{
        transaction: Transaction;
        signers: [PublicKey | Account];
    }>;
    matchOrders(connection: Connection, feePayer: Account, limit: number): Promise<string>;
    makeMatchOrdersTransaction(limit: number): Transaction;
    loadRequestQueue(connection: Connection): Promise<any[]>;
    loadEventQueue(connection: Connection): Promise<import("./queue").Event[]>;
    loadFills(connection: Connection, limit?: number): Promise<any[]>;
    parseFillEvent(event: any): any;
    private get _baseSplTokenMultiplier();
    private get _quoteSplTokenMultiplier();
    priceLotsToNumber(price: BN): number;
    priceNumberToLots(price: number): BN;
    baseSplSizeToNumber(size: BN): number;
    quoteSplSizeToNumber(size: BN): number;
    baseSizeLotsToNumber(size: BN): number;
    baseSizeNumberToLots(size: number): BN;
    quoteSizeLotsToNumber(size: BN): number;
    quoteSizeNumberToLots(size: number): BN;
    get minOrderSize(): number;
    get tickSize(): number;
}
export interface MarketOptions {
    skipPreflight?: boolean;
    confirmations?: number;
}
export interface OrderParams<T = Account> {
    owner: T;
    payer: PublicKey;
    side: 'buy' | 'sell';
    price: number;
    size: number;
    orderType?: 'limit' | 'ioc' | 'postOnly';
    clientId?: BN;
}
export declare const OPEN_ORDERS_LAYOUT: any;
export declare class OpenOrders {
    private _programId;
    address: PublicKey;
    market: PublicKey;
    owner: PublicKey;
    baseTokenFree: BN;
    baseTokenTotal: BN;
    quoteTokenFree: BN;
    quoteTokenTotal: BN;
    orders: BN[];
    clientIds: BN[];
    constructor(address: PublicKey, decoded: any, programId: PublicKey);
    static get LAYOUT(): any;
    static findForOwner(connection: Connection, ownerAddress: PublicKey, programId: PublicKey): Promise<OpenOrders[]>;
    static findForMarketAndOwner(connection: Connection, marketAddress: PublicKey, ownerAddress: PublicKey, programId: PublicKey): Promise<OpenOrders[]>;
    static load(connection: Connection, address: PublicKey, programId: PublicKey): Promise<OpenOrders>;
    static fromAccountInfo(address: PublicKey, accountInfo: AccountInfo<Buffer>, programId: PublicKey): OpenOrders;
    static makeCreateAccountTransaction(connection: Connection, marketAddress: PublicKey, ownerAddress: PublicKey, newAccountAddress: PublicKey, programId: PublicKey): Promise<Transaction>;
    get publicKey(): PublicKey;
}
export declare const ORDERBOOK_LAYOUT: any;
export declare class Orderbook {
    market: Market;
    isBids: boolean;
    slab: Slab;
    constructor(market: Market, accountFlags: any, slab: Slab);
    static get LAYOUT(): any;
    static decode(market: Market, buffer: Buffer): Orderbook;
    getL2(depth: number): [number, number, BN, BN][];
    [Symbol.iterator](): Generator<Order>;
}
export interface Order {
    orderId: BN;
    openOrdersAddress: PublicKey;
    openOrdersSlot: number;
    price: number;
    priceLots: BN;
    size: number;
    feeTier: number;
    sizeLots: BN;
    side: 'buy' | 'sell';
    clientId?: BN;
}
export declare function getMintDecimals(connection: Connection, mint: PublicKey): Promise<number>;
//# sourceMappingURL=market.d.ts.map