const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(cors())
server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => {
  res.send('Welcome to greed!')
})

server.get('/api/user/:userId')

server.put('/api/user/:userId/')

server.post('/api/user/:userId/bet')
server.post('/api/user/:userId/win')
server.post('/api/user/:userId/lose')

server.get('/api/leaderboard')

module.exports = server
