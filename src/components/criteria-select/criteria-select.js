import React from 'react';
import { criteriaOptions } from '../../constants/constants';
import { connect } from 'react-redux';
import { CriteriaStyles, FormStyles } from "../styled-components/components-styles";
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
        <CriteriaStyles>
        <section className="criteria-select">
            <div className="form-group">
                <label>Criteria select</label>
                <FormStyles>
                <select
                    className="form-control"
                    onChange={
                        event => setCriteriaValue(event.target.value)
                    }>
                    {rowsOptions}
                </select>
                </FormStyles>
            </div>
        </section>
        </CriteriaStyles>
    );
};

export default connect(mapStateToCriteriaProps, mapDispatchToCriteriaProps)(CriteriaSelect);
