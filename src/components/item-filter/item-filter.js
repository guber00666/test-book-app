import React from 'react';

import './item-filter.css';

const ItemFilter = () => {
    return (
        <div className="item-filter">
            <div className="form-group d-flex">
            <label for="exampleSelect1">Sort</label>
            <select className="form-control" id="exampleSelect1">
            <option>-not selected-</option>
            <option>Book name</option>
            <option>Book genre</option>
            <option>Book author</option>
            </select>
        </div>
        </div>
    );
};

export default ItemFilter;