/**
 użyć:
 - lambda
 - classes (1/2 poziomy dziedziczenia)
 - template strings
 - default + rest + spread
 - let! / const
 - iterators + for ... of
 **/
function sleep (ms) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, ms)
  })
}

class Currency {
  constructor (name, price) {
    this.name  = name
    this.price = price
  }

  toPrintable () {
    return `${this.name} (${this.price})`
  }

  print () {
    console.log(this.toPrintable())
  }
}

class Pair {
  constructor (currency1, currency2) {
    this.currencies = [currency1, currency2]
  }

  print () {
    this.currencies.forEach(curr => {
      if (curr instanceof Currency)
        curr.print()
    })
  }

  getFirstCurrency () {
    return this.currencies[0]
  }

  getSecondCurrency () {
    return this.currencies[1]
  }
}

class ArbitragablePair extends Pair {

  constructor (currency1, currency2) {
    super(currency1, currency2)
  }

  arbitrage (fromMarket, toMarket) {
    const fee = 0.2

  }

}

class TradablePair extends Pair {

  constructor (soldCurrency, incomingCurrency) {
    super(soldCurrency, incomingCurrency)
  }

  calculateAmount (amount = null) {
    if (amount === null) {
      let secondCurrency = this.getSecondCurrency()
      let firstCurrency  = this.getFirstCurrency()
      return secondCurrency.price / firstCurrency.price
    }
    else return amount
  }

  sell (amount) {
    console.log(
      `Started preparing sell disposition of ${amount} 
      ${this.getFirstCurrency().print()} into 
      ${this.calculateAmount()} ${this.getSecondCurrency().print()}}`)
    sleep(1000).then(() => {
      console.log(`Disposition sent`)
    })
  }

  buy (amount) {
    console.log(
      `Started preparing buy disposition of ${amount} 
      ${this.getFirstCurrency().print()} for 
      ${this.calculateAmount()} ${this.getSecondCurrency().print()}}`)
    sleep(1000).then(() => {
      console.log(`Disposition sent`)
    })
  }
}

