import React, { Component } from 'react';
import CriteriaSelect from '../criteria-select';
import FilterInput from '../filter-input';
import List from '../list';
import { books } from '../../services/books-service';
import { store } from '../store/index';
import './app.css';

export default class App extends Component {
    // setCriteriaValue = (newValue) => {
    //     this.setState({ criteriaValue: newValue });
    // };

    // setFilterValue = (newValue) => {
    //     this.setState({ filterValue: newValue });
    // }

    filterForElements = (books, filterValue, criteriaValue) => {
        let keyForFiter;
        switch (criteriaValue) {
            case ("1"):
                keyForFiter = 'genre';
                break;
            case ("2"):
                keyForFiter = 'author';
                break;
            default:
                keyForFiter = 'name';
        };
        
        return books.filter((item) => item[keyForFiter]
            .toLowerCase()
            .includes(filterValue.toLowerCase())
        );
    };

    render() {
        const { criteriaValue, filterValue } = store.getState();

        const filter = this.filterForElements(books, filterValue, criteriaValue);

        return (
            <div className="books-app">
                <div className="container">
                    <h1>Books</h1>
                    <CriteriaSelect criteriaValue={store.getState().setCriteriaValue} /> 
                    <FilterInput  filterValue={store.getState().setFilterValue} />
                    <List data={filter} />

                </div>
            </div>
        );
    };
};


    /*state = {
        criteriaValue: '',
        filterValue: ''
    };*/

    //setCriteriaValue={this.setCriteriaValue}
    //setFilterValue={this.setFilterValue}
    //const { filterValue, criteriaValue } = this.state;

