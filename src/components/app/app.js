import React, { Component } from 'react';
import './app.css';
import CriteriaSelect from '../criteria-select'; 
import FilterInput from '../filter-input'; // FilterInput
import List from '../list';
import { books } from '../../services/books-service';


export default class App extends Component {

    state = {
        criteriaValue: '',
        filterValue: 'Foundation'
    };


    setCriteriaValue = (newValue) => {
        this.setState({ criteriaValue: newValue });
    };

    setFilterValue = (newValue) => {
        this.setState({ filterValue: newValue });
    }

    filterForElements = (arr) => {
        return arr.filter((item, value) =>{ 
            return item.toString()
                        .includes(value)
                                
                            });
    };

    render() {
        const {filterValue, criteriaValue} = this.state;

        const filter = this.filterForElements(books, filterValue);
        console.log(filter)
        return (
            <div className="books-app">
                <div className="container">
               <h1>Books</h1>
               <CriteriaSelect setCriteriaValue={this.setCriteriaValue} />
               <FilterInput  setFilterValue = {this.setFilterValue}/>
               <List data ={books}/>

               </div>
            </div>
        );
    }
}
