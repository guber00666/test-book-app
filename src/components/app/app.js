import React, { Component } from 'react';
import CriteriaSelect from '../criteria-select';
import FilterInput from '../filter-input';
import List from '../list';
import { connect } from "react-redux";
import {
    mapStateToAppProps,
    mapDispatchToBooksProps,
} from '../../actions/index';


class App extends Component {

    componentDidMount() {
        this.props.fetchData("http://localhost:3002/books");
    }

    render() {
        const { books } = this.props;


    return (

        <div className="books-app"
             style={{
                 marginTop: "30px"
             }}>
            <div className="container">
                <h1>Books</h1>
                <CriteriaSelect />
                <FilterInput />
                <List books={ books }/>

            </div>
        </div>
        );
    }

}

export default connect(mapStateToAppProps, mapDispatchToBooksProps)(App);


