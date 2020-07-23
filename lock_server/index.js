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

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
