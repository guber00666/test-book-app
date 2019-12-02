import React, { Component } from 'react';
import CriteriaSelect from '../criteria-select';
import FilterInput from '../filter-input';
import List from '../list';
import { books } from '../../services/books-service';
import { store } from '../../store/index';
import { getFilterAction,
         getCriteriaAction,
         getPaginatorAction  } from '../../actions/index';
import './app.css';


export default class App extends Component {

    setFilterValue = (newValue) => {
        store.dispatch(getFilterAction(newValue));
    };

    setCriteriaValue = (newValue) => {
        store.dispatch(getCriteriaAction(newValue));
    };

    setPaginatorValue = (newValue) => {
        store.dispatch(getPaginatorAction (newValue));
    };


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

        const filter = this.filterForElements(books, filterValue, criteriaValue); //filter.slice

        return (
            <div className="books-app">
                <div className="container">
                    <h1>Books</h1>
                    <CriteriaSelect setCriteriaValue={this.setCriteriaValue} />
                    <FilterInput setFilterValue={this.setFilterValue} />
                    <List data={filter} setPaginatorValue={this.setPaginatorValue} />

                </div>
            </div>
        );
    };
};




