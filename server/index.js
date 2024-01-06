const express = require('express')

const server = express()

const PORT = 8888

server.get('/', (req, res) => {
  res.send('Welcome to greed!')
})

server.listen(PORT, () => console.log('Server Running.'))
