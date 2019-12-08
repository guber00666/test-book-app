import React from 'react';
import { criteriaOptions } from '../../constants/constants';
import { connect } from 'react-redux';
import {
    mapStateToCriteriaProps,
    mapDispatchToCriteriaProps
} from '../../actions/index'

const CriteriaSelect = (props) => {

    const setCriteriaValue = props.setCriteriaValue;

    const rowsOptions = criteriaOptions.map((el, id) => {

        return (
            <option key={id} value={el.value}>{el.label}</option>
        );
    });

    return (
        <div className="criteria-select"
            style={{
                marginTop: "30px",
                fontWeight: "bold"
            }}>
            <div className="form-group">
                <label>Criteria select</label>
                <select className="form-control"
                    style={{
                        border: "solid 1px"
                    }}
                    onChange={
                        event => setCriteriaValue(event.target.value)
                    }>
                    {rowsOptions}
                </select>
            </div>
        </div>
    );
};

export default connect(mapStateToCriteriaProps, mapDispatchToCriteriaProps)(CriteriaSelect);
