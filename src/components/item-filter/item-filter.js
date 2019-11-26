import React from 'react';

import './item-filter.css';

const ItemFilter = () => {
    return (
        <div className="item-filter">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
                </div>
                <input type="text" class="form-control" placeholder="" 
                    aria-label="Example text with button addon" 
                    aria-describedby="button-addon1"></input>
            </div>
        </div>
                );
            };
            
export default ItemFilter;