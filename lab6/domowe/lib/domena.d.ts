declare class Currency {
    id: number;
    price: number;
    name: string;
    constructor(id: number, price: number, name: string);
}
declare class BTC extends Currency {
    id: number;
    price: number;
    name: string;
    constructor(id: number, price: number, name?: string);
}
declare class XTC extends Currency {
    id: number;
    price: number;
    name: string;
    constructor(id: number, price: number, name?: string);
}
declare class ETH extends Currency {
    id: number;
    price: number;
    name: string;
    constructor(id: number, price: number, name?: string);
}
interface IWallet {
    add(c: Currency): void;
    addAll(c: Currency[]): void;
    delete(c: Currency): void;
    find(c: Currency): void;
    update(c: Currency): void;
    print(): void;
}
declare class Wallet implements IWallet {
    id: number;
    currencies: Currency[];
    constructor(id: number, currencies: Currency[]);
    add(c: Currency): void;
    addAll(c: Currency[]): void;
    delete(c: Currency): void;
    find(c: Currency): Currency | undefined;
    update(c: Currency): void;
    print(): void;
}
declare let myBtc: BTC;
declare let myXtc: XTC;
declare let wallet: Wallet;
declare let myBtc2: Currency | undefined;
declare let wallet2: Wallet;
