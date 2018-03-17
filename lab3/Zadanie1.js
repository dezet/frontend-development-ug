function sleep (ms) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, ms)
  })
}

function Pair (name, price) {
  this.name  = name
  this.price = price
}

Pair.prototype.print       = function () {
  console.log(this.name + ' (' + this.price + ') ')
}
Pair.prototype.toPrintable = function () {
  return this.name + '(' + this.price + ')'
}

function MarketablePair (name, price, marketFrom, marketTo) {
  Pair.call(this, name, price)
  this.marketFrom = marketFrom
  this.marketTo   = marketTo
}

MarketablePair.prototype = Object.create(Pair.prototype)

MarketablePair.prototype.transferBeetwenMarkets = function () {
  console.log('Transfering ' + this.toPrintable() + ' between ' +
    this.marketFrom +
    ' -> ' + this.marketTo)
  sleep(1000).then(function () {
    console.log('Succesfully transferred')
  })
}

function TradeablePair (name, price) {
  Pair.call(this, name, price)

}

TradeablePair.prototype = Object.create(Pair.prototype)

TradeablePair.prototype.sell = function () {
  console.log('Preparing sell disposition')
  sleep(1000).then(function () {
    console.log('Sell disposition sent')
  })
}

TradeablePair.prototype.buy = function () {
  console.log('Preparing buy disposition')
  sleep(1000).then(function () {
    console.log('Buy disposition sent')
  })
}

var aPair = new Pair('ETC/USD', 30)
aPair.print()

var aMarketablePair = new MarketablePair('LTC/USD', 20, 'BitBay', 'Bitfinex')

aMarketablePair.transferBeetwenMarkets()

var aTradeablePair = new TradeablePair('USD/BTC', 100000000000000000000)

aTradeablePair.buy()
aTradeablePair.sell()