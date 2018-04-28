"use strict";
class Currency {
    constructor(id, price, name) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.price = price;
        this.name = name;
    }
}
class BTC extends Currency {
    constructor(id, price, name = "BTC") {
        super(id, price, name);
        this.id = id;
        this.price = price;
        this.name = name;
    }
}
class XTC extends Currency {
    constructor(id, price, name = "XTC") {
        super(id, price, name);
        this.id = id;
        this.price = price;
        this.name = name;
    }
}
class ETH extends Currency {
    constructor(id, price, name = "ETH") {
        super(id, price, name);
        this.id = id;
        this.price = price;
        this.name = name;
    }
}
class Wallet {
    constructor(id, currencies) {
        this.id = id;
        this.currencies = currencies;
        this.currencies = currencies;
    }
    add(c) {
        this.currencies.push(c);
    }
    addAll(c) {
        this.currencies = this.currencies.concat(c);
    }
    delete(c) {
        this.currencies = this.currencies.filter((e) => e.id != c.id);
    }
    find(c) {
        return this.currencies.find((e) => e.id == c.id);
    }
    update(c) {
        let idx = this.currencies.indexOf(c);
        if (idx > -1) {
            this.currencies = this.currencies.splice(idx, 1);
        }
    }
    print() {
        this.currencies.map((e) => {
            console.log(e);
        });
    }
}
let myBtc = new BTC(1, 6500);
let myXtc = new XTC(2, 3000);
let wallet = new Wallet(1, [myBtc, myXtc]);
wallet.print();
let myBtc2 = wallet.find(myBtc);
console.log(myBtc2);
wallet.add(new ETH(3, 200.32));
wallet.print();
wallet.delete(myXtc);
wallet.print();
myBtc.price = 0;
wallet.update(myBtc);
wallet.print();
console.log('---');
let wallet2 = new Wallet(1, []);
wallet2.addAll([myBtc, myXtc]);
wallet2.print();
