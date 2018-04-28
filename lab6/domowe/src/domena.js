var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Currency = /** @class */ (function () {
    function Currency(id, price, name, walletable) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.price = price;
        this.name = name;
    }
    return Currency;
}());
var BTC = /** @class */ (function (_super) {
    __extends(BTC, _super);
    function BTC(id, price, name) {
        if (name === void 0) { name = "BTC"; }
        var _this = _super.call(this, id, price, name, true) || this;
        _this.id = id;
        _this.price = price;
        _this.name = name;
        return _this;
    }
    return BTC;
}(Currency));
var XTC = /** @class */ (function (_super) {
    __extends(XTC, _super);
    function XTC(id, price, name) {
        if (name === void 0) { name = "XTC"; }
        var _this = _super.call(this, id, price, name, false) || this;
        _this.id = id;
        _this.price = price;
        _this.name = name;
        return _this;
    }
    return XTC;
}(Currency));
var ETH = /** @class */ (function (_super) {
    __extends(ETH, _super);
    function ETH(id, price, name) {
        if (name === void 0) { name = "ETH"; }
        var _this = _super.call(this, id, price, name, false) || this;
        _this.id = id;
        _this.price = price;
        _this.name = name;
        return _this;
    }
    return ETH;
}(Currency));
var Wallet = /** @class */ (function () {
    function Wallet(id, currencies) {
        this.id = id;
        this.currencies = currencies;
        this.currencies = currencies;
    }
    Wallet.prototype.add = function (c) {
        this.currencies.push(c);
    };
    Wallet.prototype.delete = function (c) {
        this.currencies = this.currencies.filter(function (e) { return e.id != c.id; });
    };
    Wallet.prototype.find = function (c) {
        this.currencies = this.currencies.filter(function (e) { return e.id == c.id; });
    };
    Wallet.prototype.update = function (c) {
        var idx = this.currencies.indexOf(c);
        if (idx > -1) {
            this.currencies = this.currencies.splice(idx, 1);
        }
    };
    Wallet.prototype.print = function () {
        this.currencies.map(function (e) {
            console.log(e);
        });
    };
    return Wallet;
}());
var myBtc = new BTC(1, 6500);
var myXtc = new XTC(2, 3000);
var wallet = new Wallet(1, [myBtc, myXtc]);
wallet.print();
var myBtc2 = wallet.find(myBtc);
console.log(myBtc2);
wallet.add(new ETH(3, 200.32));
wallet.print();
wallet.delete(myXtc);
wallet.print();
myBtc.price = 0;
wallet.update(myBtc);
wallet.print();
