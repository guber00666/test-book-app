import React from 'react';
import CriteriaSelect from '../criteria-select';
import FilterInput from '../filter-input';
import List from '../list';
import { AppStyles } from "../styled-components/components-styles";

const  App = () => {

    return (
        <AppStyles>
            <div className="books-app">
                <div className="container">
                    <h1>Books</h1>
                    <CriteriaSelect />
                    <FilterInput />
                    <List />

                </div>
            </div>
        </AppStyles>
        )
};

export default App;


