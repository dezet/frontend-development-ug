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
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    })
  })
}

class Currency {
  constructor (name, price) {
    this.name  = name
    this.price = price
  }

  toString () {
    return `${this.name} (${this.price})`
  }

  log () {
    console.log(this.toString())
  }
}

class Wallet {
  constructor (currency, amount, address) {
    this.currency = currency
    this.amount   = amount
    this.address  = address
  }

  toString () {
    return `${this.currency.name} - amount: ${this.amount} - wallet address: ${this.address}`
  }

  log () {
    console.log(this.toString())
  }
}

class TransferExecutor {
  execute () {
    console.log(`Http request to the rest api completed.`)
  }
}

class Transfer {
  constructor (fromWallet, toWallet, currency, amount, transferExecutor) {
    this.fromWallet       = fromWallet
    this.toWallet         = toWallet
    this.currency         = currency
    this.amount           = amount
    this.transferExecutor = transferExecutor
  }

  execute () {
    if (this.fromWallet.amount >= this.amount) {
      console.log(
        `Transfering ${this.amount} of ${this.currency.name} from ${this.fromWallet.address} to ${this.toWallet.address}`)
      this.transferExecutor.execute()
      console.log(`Fee will cost: ${this.calculateFee()}`)
      this.fromWallet.amount = this.fromWallet.amount - this.amount
      this.toWallet.amount   = this.toWallet.amount + this.amount
    }
    else {
      console.log(`Not enough funds on wallet ${this.fromWallet.address}`)
    }
  }

  calculateFee () {
    const fee = 0.001
    return this.amount * fee
  }
}

class User {
  constructor (id, wallets = [], role = 'User') {
    this.id      = id
    this.wallets = wallets
    this.role    = role
  }

  addWallets (...wallet) {
    this.wallets = this.wallets.concat(wallet)
  }

  printWallets () {
    this.wallets.forEach(e => {
      e.log()
    })
  }

  getWallet (currency) {
    console.log(this.wallets)
    return this.wallets.find(w => w.currency.name = currency.name)
  }
}

class Admin extends User {
  constructor (id, wallets = []) {
    super(id, wallets, 'Admin')
  }
}

class Market {
  constructor (...users) {
    this.users = users
  }

  transaction (fromUser, toUser, currency, amount) {
    let fromUserWallet = fromUser.getWallet(currency)
    console.log(fromUserWallet)
    let toUserWallet = toUser.getWallet(currency)
    console.log(toUserWallet)
    let transfer = new Transfer(fromUserWallet, toUserWallet, currency,
      amount, new TransferExecutor())
    transfer.execute()
  }
}

let btc = new Currency('BTC', 6500.000)
let ltc = new Currency('LTC', 200.000)
let xtc = new Currency('XTC', 153.000)

let walletBtc1 = new Wallet(btc, 100, '#123456')
let walletLtc1 = new Wallet(ltc, 26, '#123457')
let walletXtc1 = new Wallet(xtc, 2000, '#123458')

let walletBtc2 = new Wallet(btc, 100, '#123222')
let walletLtc2 = new Wallet(ltc, 26, '#123333')
let walletXtc2 = new Wallet(xtc, 2000, '#123458')

let user1 = new User(1)
user1.addWallets(walletBtc1, walletLtc1)
user1.printWallets()
let user2 = new User(2)
user2.addWallets(walletBtc2, walletLtc2)
user2.printWallets()
let marketA = new Market(user1, user2)

marketA.transaction(user1, user2, btc, 10)

user1.printWallets()
user2.printWallets()