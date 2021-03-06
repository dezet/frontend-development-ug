/*
    Moduł z interfejsem publicznym dla swojej dziedziny
 */
var cryptocurrencies = {};

cryptocurrencies.module = (function () {
  "use strict";
  var pairCollection = [];
  var Pair           = function (name, price) {
    this.name  = name;
    this.price = price;
  };

  Pair.prototype.print = function () {
    console.log("info - (" + this.name + "(" + this.price + ")" + ")");
  };

  return {
    addPair: function (pair) {
      pairCollection.push(pair);
    },
    removePair: function (pair) {
      pairCollection.forEach(function (item, index) {
        if (item.name === pair) {
          return pairCollection.splice(index, 1);
        }
      });

    },
    printPairs: function () {
      pairCollection.map(function (elem) {
        elem.print();
      });
    },
    pairExist: function (pair) {
      return pairCollection.filter(function (elem) {
        return elem.name.toLowerCase() === pair.toLowerCase();
      }).length > 0;
    },
    findByPrice: function (price) {
      return pairCollection.filter(function (elem) {
        return elem.price === price;
      });
    },
    findByName: function (name) {
      return pairCollection.filter(function (elem) {
        return elem.name === name;
      });
    },
    Pair: Pair
  }
})();

cryptocurrencies.module.addPair(
  new cryptocurrencies.module.Pair("USD/BTC", 10.0));
cryptocurrencies.module.addPair(
  new cryptocurrencies.module.Pair("USD/LTC", 20.0));
cryptocurrencies.module.addPair(
  new cryptocurrencies.module.Pair("USD/ETH", 30.0));

console.log("Does USD/BTC exist in stock?");
console.log(cryptocurrencies.module.pairExist("USD/BTC"));
console.log("Does usd/btc  exist in stock?");
console.log(cryptocurrencies.module.pairExist("usd/btc"));
console.log("Does USD/ETH  exist in stock?");
console.log(cryptocurrencies.module.pairExist("USD/ETH"));
console.log("Search stock by price");
console.log("Found by price:" + cryptocurrencies.module.findByPrice(30.0));

console.log("Found by name: " + cryptocurrencies.module.findByName("USD/LTC"))


console.log("Print currently observed pair");
cryptocurrencies.module.printPairs();
console.log("Removing pair USD/LTC ");
cryptocurrencies.module.removePair("USD/LTC");
console.log("Print currently observed pair");
cryptocurrencies.module.printPairs();
console.log("---");
console.log("Removing pair USD/BTC ");
cryptocurrencies.module.removePair("USD/BTC");
cryptocurrencies.module.printPairs();
console.log("---");
console.log("Removing pair USD/ETH");
cryptocurrencies.module.removePair("USD/ETH");
