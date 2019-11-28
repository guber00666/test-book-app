import React from 'react';

import './criteria-select.css';
import { criteriaOptions } from '../../services/books-service'

const CriteriaSelect = (props) => {
    const setCriteriaValue = props.setCriteriaValue;

    const rowsOptions = criteriaOptions.map((el, id) => {
        return (
            <option key={id} value={el.value}>{el.label}</option>
        );
    });

    return (
        <div className="criteria-select">
            <div className="form-group">
                <label>Criteria select</label>
                <select className="form-control"
                    onChange={
                        event => setCriteriaValue(event.target.value)} >
                    {rowsOptions}
                </select>
            </div>
        </div>
    );
};

export default CriteriaSelect;
