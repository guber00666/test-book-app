import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
    return (
        <div className="search-panel">
            <div className="input-group mb-3"></div>
            <input type="text" className="form-control" />
        </div>
    );
};

export default SearchPanel;