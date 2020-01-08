import React from 'react';
import { connect } from 'react-redux';
import { StyledCriteria, StyledForm } from "../styled-components/components-styles";
import { rowsOptions } from "../utils/CritreiaSelectUtils";
import {
    mapStateToCriteriaProps,
    mapDispatchToCriteriaProps
} from '../../actions/actions';

const CriteriaSelect = (props) => {

    const setCriteriaValue = props.setCriteriaValue;

    return (
        <StyledCriteria>
        <section className="criteria-select">
            <div className="form-group">
                <label>Criteria select</label>
                <StyledForm>
                <select
                    className="form-control"
                    onChange={
                        event => setCriteriaValue(event.target.value)
                    }>
                    {rowsOptions}
                </select>
                </StyledForm>
            </div>
        </section>
        </StyledCriteria>
    );
};

export default connect(mapStateToCriteriaProps, mapDispatchToCriteriaProps)(CriteriaSelect);
