  const express = require('express')
  const cors = require('cors')
  const helmet = require('helmet')
  const knex = require('knex')

  const server = express()

  server.use(cors())
  server.use(helmet())
  server.use(express.json())

  const userExists = async (auth0Id) => {
    try {
      console.log('checking user existence')
      const user = await knex('users').where({ auth0Id }).first();
      return !!user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


  server.get('/', (req, res) => {
    res.send('Welcome to greed!!');
    console.log('POST /', req);
  });

  server.get('/api/hello', (req, res) => {
    console.log('POST /api/hello', req);
    res.send('Hello from the server!' );
  });

  server.post('/api/register', async (req, res) => {
    console.log('POST /api/register', req);
    const { sub, email, nickname } = req.body; // Removed the extra parenthesis

    const isUserRegistered = await userExists(sub);

    if (isUserRegistered) {
      console.log('User is already registered');

      knex('users').insert({ auth0Id: sub, email, username: nickname })
        .then(() => {
          res.status(201).json({ success: true, message: 'User registered successfully' });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ success: false, message: 'Internal Server Error' });
        });
    }
  });

  server.get('/api/user/:userId', (req, res) => {
    // Handle getting a specific user
  });

  // Add handlers for other routes (PUT, POST, GET) as needed

  module.exports = server;
