const express    = require('express')
const bodyParser = require('body-parser')
const app        = express()

let persons = [
  {
    id: 1,
    name: 'Jan Niezbedny',
    job: 'JS Developer',
    age: 38,
  },
  {
    id: 2,
    name: 'Jan Zbedny',
    job: 'Java Developer',
    age: 37,
  },
  {
    id: 3,
    name: 'Karol Niezbedny',
    job: 'JS Developer',
    age: 36,
  },
  {
    id: 4,
    name: 'Dominik Niezbedny',
    job: 'JS Developer',
    age: 35,
  },
  {
    id: 5,
    name: 'Artur Niezbedny',
    job: 'JS Developer',
    age: 34,
  },
  {
    id: 6,
    name: 'Hieronim Niezbedny',
    job: 'JS Developer',
    age: 33,
  },
  {
    id: 7,
    name: 'Jaro Niezbedny',
    job: 'JS Developer',
    age: 32,
  }
]
app.use(bodyParser.json())
app.get('/person', (req, res) => res.send(persons))

app.post('/person', (req, res) => {
  persons.push(req.body)
  res.send(req.body)
})
app.route('/person/:id').
    put((req, res) => {
      if (!isNaN(req.params.id)) {
        let idx               = persons.findIndex(
          c => c.id == req.params.id)
        persons[idx] = req.body
        res.send(req.body)
      }
      else res.sendStatus(403)
    }).
    delete((req, res) => {
      if (!isNaN(req.params.id)) {
        let idx = persons.findIndex(
          c => c.id == req.params.id)
        console.log(idx);
        console.log(persons);
        persons.splice(idx, 1)
        console.log(persons);
        res.send({status: 200})
      }
      else res.sendStatus(404)
    })

const port = 3452

app.listen(port, () => console.log(`Api listening on port ${port}!`))
