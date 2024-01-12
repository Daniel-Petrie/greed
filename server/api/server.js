  const express = require('express')
  const cors = require('cors')
  const helmet = require('helmet')
  const db = require('./dbConfig')

  const server = express()

  server.use(cors())
  server.use(helmet())
  server.use(express.json())

  const userExists = async (auth0Id) => {
    try {
     
      const user = await db('users').where( 'auth0Id', auth0Id ).first();
     
      return !user;
    } catch (error) {
   
      throw error;
    }
  };


  server.get('/', (req, res) => {
    res.send('Welcome to greed!!');
    
  });

  server.get('/api/hello', (req, res) => {
    
    res.send('Hello from the server!' );
  });

  server.post('/api/register', async (req, res) => {
    
    const { sub, email, nickname } = req.body; // Removed the extra parenthesis

    const isUserRegistered = await userExists(sub);

    if (isUserRegistered) {
      db('users').insert({ auth0Id: sub, email, displayName: nickname })
        .then(() => {
          res.status(201).json({ success: true, message: 'User registered successfully' });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ success: false, message: 'Internal Server Error' });
        })
    }else {
     
      res.status(200).json({ success: false, message: 'User already registered' });
  
  }});

  server.get('/api/user/:userId', (req, res) => {
    // Handle getting a specific user
  });

  // Add handlers for other routes (PUT, POST, GET) as needed

  module.exports = server;
