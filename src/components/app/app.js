import React, { Component } from 'react';
import './app.css';
import CriteriaSelect from '../criteria-select';
import FilterInput from '../filter-input'; // FilterInput
import List from '../list';
import { books } from '../../services/books-service';
import reducer from '../reducers/reducer';
import { createStore } from 'redux';

const initialState = {
    criteriaValue: '',
    filterValue: ''
};

const store = createStore(reducer, initialState);


export default class App extends Component {

    /*state = {
        criteriaValue: '',
        filterValue: ''
    };*/

    //setCriteriaValue={this.setCriteriaValue}
    //setFilterValue={this.setFilterValue}
    //const { filterValue, criteriaValue } = this.state;

    setCriteriaValue = (newValue) => {
        this.setState({ criteriaValue: newValue });
    };

    setFilterValue = (newValue) => {
        this.setState({ filterValue: newValue });
    }

    filterForElements = (arr, value, key) => {
        return arr.filter((item) => item[key]
            .toLowerCase()
            .includes(value.toLowerCase())
        );
    };

    render() {
        const criteriaValue = store.getState().criteriaValue;

        const filterValue = store.getState().filterValue;

        let keyForFiter = 'name';

        switch (criteriaValue) {
            case ("1"):
                keyForFiter = 'genre'
                break
            case ("2"):
                keyForFiter = 'author'
                break
        };
        const filter = this.filterForElements(books, filterValue, keyForFiter);

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


