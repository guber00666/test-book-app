import React, { Component } from 'react';
import './app.css';
import ItemFilter from '../item-filter';
import SearchPanel from '../search-panel';
import List from '../list';
import  {books } from '../../services/books-service';


export default class App extends Component {

    state = {
        filter: '',
        search: ''
    }

    render() {
        return (
            <div className="books-app">
                <div className="container">
               <h1>Books</h1>
               <ItemFilter />
               <SearchPanel />
               <List data ={books}/>

               </div>
            </div>
        );
    }
}
