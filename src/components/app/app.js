import React, { Component } from 'react';
import CriteriaSelect from '../criteria-select';
import FilterInput from '../filter-input';
import List from '../list';
import { connect } from 'react-redux';
import { books } from '../../services/books-service';
import { mapStateToProps } from '../../reducers/reducer'
import { mapDispatchToProps } from '../../actions/index'

 class App extends Component {

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
        const { criteriaValue, filterValue } = this.props;

        const filter = this.filterForElements(books, filterValue, criteriaValue);

        return (
            <div className="books-app"
            style={{
                marginTop: "30px"
            }}>
                <div className="container">
                    <h1>Books</h1>
                    <CriteriaSelect setCriteriaValue={this.props.setCriteriaValue} />
                    <FilterInput setFilterValue={this.props.setFilterValue} />
                    <List data={filter} setPaginatorValue={this.props.setPaginatorValue} />

                </div>
            </div>
        );
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


