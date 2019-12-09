var express = require('express');
var app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/books', (request, response) => {
    response.send(books);
});

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});

const books = [
    {
      id: 1,
      name: 'Foundation',
      author: 'Asimov Isaac',
      genre: 'SciFi'
    },
  
    {
      id: 2,
      name: 'The Master and Margarita',
      author: 'Bulgakov Mikhail',
      genre: 'Fantasy'
    },
    {
      id: 3,
      name: 'War of the Classes',
      author: 'London Jack',
      genre: 'Adventure'
    },
    {
      id: 4,
      name: 'The Adventure of Sherlock Holmes',
      author: 'Doyle Arthur Conan',
      genre: 'Detectiv'
    },
    {
      id: 5,
      name: 'Doctor Marigold',
      author: 'Dickens Charles',
      genre: 'Classical Prose'
    },
  
    {
      id: 6,
      name: 'The Gambler',
      author: 'Dostoevsky Fyodor	',
      genre: 'Novel'
    },
    {
      id: 7,
      name: 'Options',
      author: 'Henry O',
      genre: 'Short Stories'
    },
    {
      id: 8,
      name: 'Idle Ideas in 1905',
      author: 'Jerome K Jerome',
      genre: 'Humorous Fiction Read'
    },
    {
      id: 9,
      name: 'Cymbeline',
      author: 'Shakespeare William',
      genre: 'Comedy'
    },
  
    {
      id: 10,
      name: 'Kidnapped',
      author: 'Stevenson Robert Louis',
      genre: 'Roman'
    },
    {
      id: 11,
      name: 'Dracula',
      author: 'Stoker Bram',
      genre: 'Horror'
    },
    {
      id: 12,
      name: 'It',
      author: 'Stephen King',
      genre: 'Mysticism'
    },
    {
      id: 13,
      name: 'Foundation and Empire',
      author: 'Asimov Isaac',
      genre: 'SciFi'
    },
  
    {
      id: 14,
      name: 'Bulgakov The Heart of a Dog',
      author: 'Bulgakov Mikhail',
      genre: 'Fantasy'
    },
    {
      id: 15,
      name: 'Batard',
      author: 'London Jack',
      genre: 'Adventure'
    },
    {
      id: 16,
      name: 'His Last Bow',
      author: 'Doyle Arthur Conan',
      genre: 'Detectiv'
    },
    {
      id: 17,
      name: 'Hard Times',
      author: 'Dickens Charles',
      genre: 'Classical Prose'
    },
  
    {
      id: 18,
      name: 'The Grand Inquisitor',
      author: 'Dostoevsky Fyodor	',
      genre: 'Novel'
    },
    {
      id: 19,
      name: 'The Gentle Grafter',
      author: 'Henry O',
      genre: 'Short Stories'
    },
    {
      id: 20,
      name: 'Three Men on the Bummel',
      author: 'Jerome K Jerome',
      genre: 'Humorous Fiction Read'
    },
    {
      id: 21,
      name: 'The Tragedy of Othello',
      author: 'Shakespeare William',
      genre: 'Drama'
    },
  
    {
      id: 22,
      name: 'Songs of Travel',
      author: 'Stevenson Robert Louis',
      genre: 'Roman'
    },
    {
      id: 23,
      name: 'Gullivers travels',
      author: 'Swift Jonathan',
      genre: 'Adventure'
    },
    {
      id: 24,
      name: 'Postman',
      author: 'Stephen King',
      genre: 'Mysticism'
    },
    {
      id: 25,
      name: 'The Two-Centimeter Demon',
      author: 'Asimov Isaac',
      genre: 'SciFi'
    },
  
    {
      id: 26,
      name: 'Somebodys Luggage',
      author: 'Dickens Charles',
      genre: 'Fantasy'
    },
    {
      id: 27,
      name: 'The Game',
      author: 'London Jack',
      genre: 'Adventure'
    },
    {
      id: 28,
      name: 'The Poison Belt',
      author: 'Doyle Arthur Conan',
      genre: 'Detectiv'
    },
    {
      id: 29,
      name: 'Oliver Twist',
      author: 'Dickens Charles',
      genre: 'Classical Prose'
    },
  
    {
      id: 30,
      name: 'Poor Folk',
      author: 'Dostoevsky Fyodor	',
      genre: 'Novel'
    },
    {
      id: 31,
      name: 'Sixes and Sevens',
      author: 'Henry O',
      genre: 'Short Stories'
    },
    {
      id: 32,
      name: 'Novel Notes',
      author: 'Jerome K Jerome',
      genre: 'Humorous Fiction Read'
    },
    {
      id: 33,
      name: 'The Comedy of Errors',
      author: 'Shakespeare William',
      genre: 'Comedy'
    },
  
    {
      id: 34,
      name: 'The Black Arrow',
      author: 'Stevenson Robert Louis',
      genre: 'Roman'
    },
    {
      id: 35,
      name: 'Tommy and Co',
      author: 'London Jack',
      genre: 'Horror'
    },
    {
      id: 36,
      name: 'Hopelessness',
      author: 'Stephen King',
      genre: 'Mysticism'
    },  
  ];