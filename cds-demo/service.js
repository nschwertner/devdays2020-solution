const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const app = express()
const name = 'CDS Demo'
const base = '/cds-services'
const port = 3000

app.use(cors())
app.use(logger('dev'))

app.get(base, (req, res) => {
  res.json({
    services: [{
      id: 'greeter',
      title: 'Greeter Service',
      description: 'CDS service that greets the patient',
      hook: 'patient-view'
    }]
  })
})

app.post(base + '/greeter', (req, res) => {
  let cards = []

  cards.push({
    summary: 'Greeting',
    detail: 'Hello patient',
    indicator: 'info'
  })

  res.json({
    cards: cards
  })
})

app.listen(port, () => {
  console.log(`${name} listening at http://localhost:${port}`)
})