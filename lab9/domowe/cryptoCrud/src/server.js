const express    = require('express')
const bodyParser = require('body-parser')
const app        = express()

let cryptocurrencies = [
  {
    id: 1,
    name: 'WTC',
    price: 1000.23,
    walletAddress: 'ABC-DEF-GHI-123',
    amount: 57.0
  },
  {
    id: 2,
    name: 'BTC',
    price: 1540.23,
    walletAddress: 'DEF-DEF-321-123',
    amount: 1000.0
  },
  {
    id: 3,
    name: 'XTC',
    price: 123.12,
    walletAddress: '111-000-333-123',
    amount: 10.0
  },
  {
    id: 4,
    name: 'LTC',
    price: 321.32,
    walletAddress: 'TDD-XCD-111-000',
    amount: 32.0
  },
  {
    id: 5,
    name: 'DOGE',
    price: 1000000.10,
    walletAddress: 'DEF-OOP-563-123',
    amount: 10.0
  },
  {
    id: 6,
    name: 'ETH',
    price: 7481.68,
    walletAddress: 'JHL-DEF-321-VDE',
    amount: 10.0
  },
  {
    id: 7,
    name: 'XMN',
    price: 7481.68,
    walletAddress: 'DEF-XXD-321-123',
    amount: 9999999.0
  }
]
app.use(bodyParser.json())
app.get('/currency', (req, res) => res.send(cryptocurrencies))

app.post('/currency', (req, res) => {
  cryptocurrencies.push(req.body)
  res.send(req.body)
})
app.route('/currency/:id').
    put((req, res) => {
      if (!isNaN(req.params.id)) {
        let idx               = cryptocurrencies.findIndex(
          c => c.id == req.params.id)
        cryptocurrencies[idx] = req.body
        res.send(req.body)
      }
      else res.sendStatus(403)
    }).
    delete((req, res) => {
      if (!isNaN(req.params.id)) {
        let idx = cryptocurrencies.findIndex(
          c => c.id == req.params.id)
        console.log(idx);
        console.log(cryptocurrencies);
        cryptocurrencies.splice(idx, 1)
        console.log(cryptocurrencies);
        res.send({status: 200})
      }
      else res.sendStatus(404)
    })

const port = 3452

app.listen(port, () => console.log(`Api listening on port ${port}!`))
