 

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
    res.json(movies);
  });

  // GET request for specific movie by title
  app.get('/movies/:title', (req, res) => {
    res.json(movies.find((movie) =>
      { return movie.title === req.params.name }));
  });

  // GET request for data about Genre by name
  app.get('/movies/genre/:name', (req, res) => {
    res.json(movies.find((genre) =>
      { return genre.name === req.params.name }));
  });


 // GET request for data about director by name
 app.get('/movies/director/:name', (req, res) => {
  res.json(movies.find((director) =>
    { return director.name === req.params.name }));
});

// POST request to add new user
app.post('/users', (req, res) => {
  let newUser = req.body;

  if (!newUser.name) {
    const message = 'Missing name in request body';
    res.status(400).send(message);
  } else {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).send(newUser);
  }
});
 // POST request to add movie to user's favorites list by username

  app.post('/users/favorites/:username', (req, res) => {
    res.json(users.find((user) =>
      { return user.username === req.params.username }));
  });
  // POST request to delete a movie from user's favorites list by username
  app.delete('/users/:username', (req, res) => {
    let user = users.find((user) => { return user.username=== req.params.username });
  
    if (user) {
      users= users.filter((obj) => { return obj.username !== req.params.username });
      res.status(201).send('Student ' + req.params.username + ' was deleted.');
    }
  });





  






  // listen for requests
app.listen(8080, () =>
console.log('Your app is listening on port 8080.')
);

