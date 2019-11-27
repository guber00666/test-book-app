import React, { Component } from 'react';
import './app.css';
import CriteriaSelect from '../criteria-select'; 
import FilterInput from '../filter-input'; // FilterInput
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
               <CriteriaSelect setCriteriaValue={this.setCriteriaValue} />
               <FilterInput />
               <List data ={books}/>

               </div>
            </div>
        );
    }
}
