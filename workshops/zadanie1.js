/*
    Moduł z interfejsem publicznym dla swojej dziedziny
 */

var cryptocurrencies = {}

cryptocurrencies.module = (function () {
  var pairCollection = []

  var printer = function (what) {
    console.log('info - (' + what.name + '(' + what.price + ')' + ')')
  }
  return {
    addPair (pair) {
      pairCollection.push(pair)
    },
    removePair (pair) {
      var idx = pairCollection.indexOf(pair)
      console.log(idx)
      if (idx >= 0) {
        console.log(pairCollection.splice(idx, 1))
        pairCollection.splice(idx, 1)
      }
    },
    printPairs () {
      for (var i = 0; i < pairCollection.length; i++) {
        printer(pairCollection[i])
      }
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
    }
  }
})()

cryptocurrencies.module.addPair({
  name: 'USD/BTC',
  price: 10.0
})
cryptocurrencies.module.addPair({
  name: 'USD/LTC',
  price: 20.0
})
cryptocurrencies.module.addPair({
  name: 'USD/ETH',
  price: 30.0
})
console.log(cryptocurrencies.module.pairExist('USD/BTC'))
console.log(cryptocurrencies.module.pairExist('usd/btc'))
console.log(cryptocurrencies.module.pairExist('USD/ETH'))
console.log(cryptocurrencies.module.findByPrice(30.0))

cryptocurrencies.module.printPairs()
console.log('---')
cryptocurrencies.module.removePair('USD/LTC')
cryptocurrencies.module.printPairs()
console.log('---')
cryptocurrencies.module.removePair('USD/BTC')
cryptocurrencies.module.printPairs()
console.log('---')
cryptocurrencies.module.removePair('USD/ETH')
