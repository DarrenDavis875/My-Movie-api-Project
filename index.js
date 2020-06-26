 

const express = require('express');
const app = express();
const morgan = require('morgan');
const uuid = require('uuid');

app.use(morgan('common'));

app.use(express.static('public'));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Oh No! Something broke!');
  });

  app.get('/', (req, res) => {
    res.send('Welcome to My Movie Club!');
  });

  // GET requests for all movies
app.get('/movies', (req, res) => {
    res.send('Successful  retrieval of movie list');
  });

  // GET request for specific movie by title
  app.get('/movies/:title', (req, res) => {
    res.send('Successful retrieval of a specific movie by title');
  
  });

  // GET request for data about Genre by name
  app.get('/movies/genre/:name', (req, res) => {
    res.send('Successful retrieval of data about genre');
  });


 // GET request for data about director by name
 app.get('/movies/director/:name', (req, res) => {
  res.send('Successful retrieval of data about director');
});

// POST request to add new user
app.post('/users', (req, res) =>
 { res.send('Sucessful route to add new user');
  
});
 // POST request to add movie to user's favorites list by id

  app.post('/users/favorites/:id', (req, res) => {
    res.send('successful route to add to favorites');
  });


  // Delete request to delete a movie from user's favorites list by title
  app.delete('/users/favorites/:id', (req ,res) => {
    res.send('sucessful route to delete user favorite');
  });

  // DELETE request to remove users from registry by  username

app.delete('/users/:id', (req, res) => {
    res.send('sucessful route to delete user');
  });

  // PUT request to change user info
  
  app.put('/users/:username/:email/:password/:DOB', (req, res) => {
     res.send('changing the info email,password,username,DOB');
     });
  


  // listen for requests
app.listen(8080, () =>
console.log('Your app is listening on port 8080.')
);

