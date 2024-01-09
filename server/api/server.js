const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const knex = require('knex')

const server = express()

server.use(cors())
server.use(helmet())
server.use(express.json())

const userExists = async (auth0UserId) => {
  const user = await knex('users').where(auth0Id, auth0Id).first();
  return !!user
}

server.post('/api/register', async (req, res) => { 
const {sub, email, nickname} = req.body)

const isUserRegistered = await userExists(sub)

if (isUserRegistered) {
  console.log('user is already registered')

  knex('users').insert({auth0UserId: sub, email, username: nickname}).then(()=> {
    res.status(201).json({success: true, message: 'User registered succesfully'})
  }).catch((error) => {
    console.error(error)
    res.status(500).json({success: false, message: 'Internal Server Error'})
  })
}
}

server.get('/', (req, res) => {
  res.send('Welcome to greed!')
})

server.get('/api/user/:userId')

server.put('/api/user/:userId/')

server.post('/api/user/:userId/bet')
server.post('/api/user/:userId/win')
server.post('/api/user/:userId/lose')
 1
server.get('/api/leaderboard')

module.exports = server
