import React, { Component } from 'react';
import './app.css';
import ItemFilter from '../item-filter'; // CriteriaSelect
import SearchPanel from '../search-panel'; // FilterInput
import List from '../list';
import { books } from '../../services/books-service';


export default class App extends Component {

    state = {
        criteriaValue: '',
        filterValue: ''
    }

    setCriteriaValue = (newValue) => {
        this.setState({ criteriaValue: newValue });
    };

    render() {
        return (
            <div className="books-app">
                <div className="container">
               <h1>Books</h1>
               <ItemFilter setCriteriaValue={this.setCriteriaValue} />
               <SearchPanel />
               <List data ={books}/>

               </div>
            </div>
        );
    }
}
