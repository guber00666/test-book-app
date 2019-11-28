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
    };

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
        const { filterValue, criteriaValue } = this.state;

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
                    <CriteriaSelect setCriteriaValue={this.setCriteriaValue} />
                    <FilterInput setFilterValue={this.setFilterValue} />
                    <List data={filter} />

                </div>
            </div>
        );
    };
};


