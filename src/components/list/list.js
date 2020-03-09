import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../spinner';
import Buttons from "../buttons/buttons";
import { StyledList, StyledPaginator } from "../styled-components/components-styles";
import { errorMessage, tableRows } from "../utils/ListUtils";
import {
    mapStateToListProps,
    mapDispatchToListProps,
} from '../../actions/actions';

class List extends Component {

    componentDidMount() {
        setTimeout(() =>{
            this.props.fetchData("http://localhost:3002/books")
        } , 5000);
    }

    render() {

        const { hasErrored, isLoading} = this.props;

        const spinner = isLoading && !hasErrored  ? <Spinner /> : null;

        const data = !isLoading ? tableRows : null;

        const error = hasErrored ? errorMessage : null;

        return (
            <StyledList>
                {data}
                {spinner}
                {error}
                <StyledPaginator>
                    <Buttons />
                </StyledPaginator>
            </StyledList>
        );
    }
}

export default connect(mapStateToListProps, mapDispatchToListProps)(List);

