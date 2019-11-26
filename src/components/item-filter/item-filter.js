import React from 'react';

import './item-filter.css';

const ItemFilter = () => {
    return (
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
            </div>
            <input type="text" class="form-control"
                 aria-label="Sizing example input" 
                 aria-describedby="inputGroup-sizing-default"></input>
            </div>
    );
};

export default ItemFilter;