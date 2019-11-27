import React from 'react';

import './criteria-select.css';

const CriteriaSelect = (props) => {
    const setCriteriaValue = props.setCriteriaValue;

    return (
        <div className="criteria-select">
            <div className="form-group">
                <label>Criteria select</label>
                <select className="form-control"
                    onChange={
                        event => setCriteriaValue(event.target.value)
                        } >
                    <option>-select filter-</option>
                    <option>Book Name</option>
                    <option>Book Genre</option>
                    <option>Book Author</option>
                </select>
            </div>
        </div>
    );
};

export default CriteriaSelect;