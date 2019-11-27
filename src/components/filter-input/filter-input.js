import React from 'react';
import './filter-input.css';

const FilterInput = () => {
    return (
        <div className="search-panel">
            <div className="input-group mb-3"></div>
            <input type="text" className="form-control" />
        </div>
    );
};

export default FilterInput;