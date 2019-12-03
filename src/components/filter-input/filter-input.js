import React from 'react';
//import './filter-input.css';

const FilterInput = (props) => {
    const setFilterValue = props.setFilterValue;
    return (
        <div className="search-panel">
            <div className="input-group mb-3"></div>
            <input className="form-control"
                style={{
                    border: "solid 1px"
                }}
                onChange={
                    event => setFilterValue(event.target.value)}
                placeholder="type for search" />
        </div>
    );
};

export default FilterInput;