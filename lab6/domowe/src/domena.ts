class Currency {
    constructor(public id: number, public price: number, public name: string, walletable?: boolean) {
        this.price = price;
        this.name = name;
    }
}

class BTC extends Currency {
    constructor(public id: number, public price: number, public name: string = "BTC") {
        super(id, price, name, true)
    }
}

class XTC extends Currency {
    constructor(public id: number, public price: number, public name: string = "XTC") {
        super(id, price, name, false)
    }
}

class ETH extends Currency {
    constructor(public id: number, public price: number, public name: string = "ETH") {
        super(id, price, name, false)
    }
}


interface IWallet {
    add(c: Currency): void

    delete(c: Currency): void

    find(c: Currency): void

    update(c: Currency): void

    print(): void
}

class Wallet implements IWallet {
    constructor(public id: number, public currencies: Currency[]) {
        this.currencies = currencies
    }

    add(c: Currency): void {
        this.currencies.push(c);
    }

    delete(c: Currency): void {
        this.currencies = this.currencies.filter((e: Currency) => e.id != c.id)
    }

    find(c: Currency): Currency | undefined {
        return this.currencies.find((e: Currency) => e.id == c.id)
    }

    update(c: Currency): void {

        let idx = this.currencies.indexOf(c);
        if (idx > -1) {
            this.currencies = this.currencies.splice(idx, 1);
        }
    }

    print(): void {
        this.currencies.map((e) => {
            console.log(e)
        })
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

