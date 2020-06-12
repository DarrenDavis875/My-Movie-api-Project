const express = require('express');
const app = express();

let topMovies = [
    { title: 'Forest Gump',
      director: 'Robert Zemeckis',
      releaseDate:'July 6th, 1994'
    },
    { title: 'Jaws',
      director:'Steven Spielberg',
      releaseDate:'June 20th, 1975'
    },
    { title: 'The Godfather',
      director:'Francis Ford Coppola',
      releasDate:'March 24th 1972'
    },
    {title:'Star Wars',
     director:'George Lucas',
     releasDate: 'May 25th 1977'
    },
    { title: 'The Outlaw Josey Wales',
      director: 'Clint Eastwood',
      releaseDate: 'August 7th, 1976'
    },
    { title: 'The Terminator',
      director: 'James Cameron',
      releasDate: 'October 26th, 1984',
    },
    { title: 'Rocky',
      director:'John G. Avildsen',
      releasDate: 'November 21st, 1976',
    },
    { title:'The Big Lobowski',
      director: 'Ethan Cohen, Joel Cohen',
      releasDate: 'March 6th, 1998',
    },
    { title: 'Alien',
      director: 'Ridley Scott',
      releasDate: 'May 25th, 1979',
    },
    { title: 'Grease',
      director: 'Randal Kleiser',
      releasDate: 'June 13th, 1978',
    },

];

app.use(morgan('common'));
app.use(express.static('public'));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Oh No! Something broke!');
  });

  // GET requests
app.get('/movies', (req, res) => {
    res.json(topMovies);
  });

  app.get('/', (req, res) => {
    res.send('Welcome to My Movie Club!');
  });




  // listen for requests
app.listen(8080, () =>
console.log('Your app is listening on port 8080.');
);

