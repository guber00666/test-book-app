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
        <section className="search-panel">
            <div className="input-group mb-3" />
            <SearchPanelStyles>
            <input className="form-control"
                onChange={
                    event => setFilterValue(event.target.value)}
                placeholder="type for search" />
            </SearchPanelStyles>
        </section>
    );
};

export default connect(mapStateToFilterProps, mapDispatchToFilterProps)(FilterInput);