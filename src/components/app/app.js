import React from 'react';
import CriteriaSelect from '../criteria-select';
import FilterInput from '../filter-input';
import List from '../list';

const  App = () => {

    return (
            <div className="books-app"
                 style={{
                     marginTop: "30px"
                 }}>
                <div className="container">
                    <h1>Books</h1>
                    <CriteriaSelect />
                    <FilterInput />
                    <List />

                </div>
            </div>
        )
};

export default App;


