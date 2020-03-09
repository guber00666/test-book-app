import React from 'react';
import { connect } from 'react-redux';
import { StyledSearchPanel } from "../styled-components/components-styles";
import {
    mapStateToFilterProps,
    mapDispatchToFilterProps
} from '../../actions/actions'

const FilterInput = (props) => {
    const { setFilterValue, filterValue} = props;

    return (
        <div>
            <div className="input-group mb-3" />
            <StyledSearchPanel>
            <input
                value={filterValue}
                className="form-control"
                onChange={
                    event => setFilterValue(event.target.value)}
                placeholder="type for search" />
            </StyledSearchPanel>
        </div>
    );
};

export default connect(mapStateToFilterProps, mapDispatchToFilterProps)(FilterInput);