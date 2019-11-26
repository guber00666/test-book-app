import React from 'react';
import ItemFilter from '../item-filter'
import './list-item.css';

const ListItem = () => {

    const arr = ["Book 1", 'Book Name', 'Book Genre', 'Book author']
  

    
    const [tittle, name, genre, author] = arr;

    return (
        <div className="list-item">
            
            <ul className="list-group">
                <li className="list-group-item first">{tittle}</li>
                <li className="list-group-item searching"><ItemFilter /></li>
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{genre}</li>
                <li className="list-group-item">{author}</li>
            </ul>
           
        </div>

    );
};

export default ListItem;