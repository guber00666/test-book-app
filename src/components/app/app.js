import React from 'react';
import CriteriaSelect from '../criteria-select';
import FilterInput from '../filter-input';
import List from '../list';
import { StyledApp } from "../styled-components/components-styles";

const  App = () => {
    return (
        <StyledApp>
            <section className="books-app">
                <div className="container">
                    <h1>Books</h1>
                    <CriteriaSelect />
                    <FilterInput />
                    <List />
                </div>
            </section>
        </StyledApp>
    )
};
export default App;


