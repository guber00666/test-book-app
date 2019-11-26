import React from 'react';

import './item-filter.css';

const ItemFilter = () => {
    return (
        <div className="item-filter">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
                </div>
                <input type="text" className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default">
                    </input>
                </div>
            </div>
            );
        };
        
export default ItemFilter;