import React from 'react';

import './item-filter.css';

const ItemFilter = () => {
    return (
        <div className="item-filter">
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label className="form-check-label">Book Name</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label className="form-check-label" >Book Genre</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                <label className="form-check-label">Book Author</label>
            </div>
        </div>
    );
};

export default ItemFilter;