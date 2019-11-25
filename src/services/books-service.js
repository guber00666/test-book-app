export default class TestBookService {

    _books = [
      {
        id: 1,
        name: 'Book name',
        author: 'Book author',
        genre: 'Book genre'
      },
  
      {
        id: 2,
        name: 'Book name 1',
        author: 'Book author 2',
        genre: 'Book genre 2'
      },
      {
        id: 3,
        name: 'Book name 2',
        author: 'Book author 2',
        genre: 'Book genre 2'
      },
      {
        id: 4,
        name: 'Book name 4',
        author: 'Book author 4',
        genre: 'Book genre 4'
      },
    ];
    
  
    getAllBooks = async () => {
      return this._books;
    };
  
    getBook = async () => {
      return this._books[0];
    };
  
  }
  