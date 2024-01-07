const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

const PORT = 8888

server.use(cors())
server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => {
  res.send('Welcome to greed!')
})

server.listen(PORT, () => console.log('Server Running.'))
