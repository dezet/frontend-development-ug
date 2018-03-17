/*

    Moduł z interfejsem publicznym dla swojej dziedziny
    formatowanie: https://github.com/standard/standard
    formatowanie zgodne z linterem w pliku z koncowka _jsHinted
 */

var cryptocurrencies = {}

cryptocurrencies.module = (function () {
  var pairCollection = []
  var Pair           = function (name, price) {
    this.name  = name
    this.price = price
  }

  Pair.prototype.print = function () {
    console.log("info - (" + this.name + "(" + this.price + ")" + ")")
  }

  return {
    addPair (pair) {
      pairCollection.push(pair)
    },
    removePair (pair) {
      pairCollection.forEach(function (item, index) {
        if (item.name === pair)
          return pairCollection.splice(index, 1)
      })

    },
    printPairs () {
      pairCollection.map(function (elem) {
        elem.print()
      })
    },
    pairExist (pair) {
      return pairCollection.filter(function (elem) {
        return elem.name.toLowerCase() === pair.toLowerCase()
      }).length > 0
    },
    findByPrice (price) {
      return pairCollection.filter(function (elem) {
        return elem.price === price
      })
    },
    Pair
  }
})()

cryptocurrencies.module.addPair(
  new cryptocurrencies.module.Pair("USD/BTC", 10.0))
cryptocurrencies.module.addPair(
  new cryptocurrencies.module.Pair("USD/LTC", 20.0))
cryptocurrencies.module.addPair(
  new cryptocurrencies.module.Pair("USD/ETH", 30.0))

console.log("Does USD/BTC exist in stock?")
console.log(cryptocurrencies.module.pairExist("USD/BTC"))
console.log("Does usd/btc  exist in stock?")
console.log(cryptocurrencies.module.pairExist("usd/btc"))
console.log("Does USD/ETH  exist in stock?")
console.log(cryptocurrencies.module.pairExist("USD/ETH"))
console.log("Search stock by price")
console.log(cryptocurrencies.module.findByPrice(30.0))

console.log("Print currently observed pair")
cryptocurrencies.module.printPairs()
console.log("Removing pair USD/LTC ")
cryptocurrencies.module.removePair("USD/LTC")
console.log("Print currently observed pair")
cryptocurrencies.module.printPairs()
console.log("---")
console.log("Removing pair USD/BTC ")
cryptocurrencies.module.removePair("USD/BTC")
cryptocurrencies.module.printPairs()
console.log("---")
console.log("Removing pair USD/ETH")
cryptocurrencies.module.removePair("USD/ETH")
