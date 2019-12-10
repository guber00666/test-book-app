import React from 'react';
import { connect } from 'react-redux';
import { SearchPanelStyles } from "../styled-components/components-styles";
import {
    mapStateToFilterProps,
    mapDispatchToFilterProps
} from '../../actions/index'

const FilterInput = (props) => {
    const setFilterValue = props.setFilterValue;
    return (
        <div className="search-panel">
            <div className="input-group mb-3" />
            <SearchPanelStyles>
            <input className="form-control"
                onChange={
                    event => setFilterValue(event.target.value)}
                placeholder="type for search" />
            </SearchPanelStyles>
        </div>
    );
};

export default connect(mapStateToFilterProps, mapDispatchToFilterProps)(FilterInput);