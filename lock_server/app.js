const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

let contents
let password

let state = {
  isLocked: false
}

app.get('/api/state', (req, res) => {
  res.json(state)
})

app.get('/api/open', (req, res) => {
  const body = req.body
  body.password === password ? res.json({ password: 'correct' }) : res.json({ password: 'incorrect' })
})

app.post('/api/lock', (req, res) => {
  console.log(req.body)
  const body = req.body

  contents = body.contents
  password = body.password
  state = {...state, isLocked : !state.isLocked}
  res.json(state)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
