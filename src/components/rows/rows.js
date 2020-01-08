import React from 'react';
import {connect} from 'react-redux';
import {mapDispatchToListProps, mapStateToListProps,} from '../../actions/actions';
import {countRowsOnPage} from "../../constants/constants";
import {filterForElements} from "../utils/ListUtils";

export const Rows = (props) => {

    const { criteriaValue,
            filterValue,
            paginatorValue,
            books} = props;

    const filter = filterForElements(books, filterValue, criteriaValue);
    const numberOfPages = (Math.ceil(filter.length / countRowsOnPage));
    const page = numberOfPages < paginatorValue ? numberOfPages : paginatorValue;
    const paginatedData = filter.slice((page - 1) * countRowsOnPage, countRowsOnPage * page);

    return paginatedData.map((el, key) => {
        return (<tr key={key}>
            <td>{el.name}</td>
            <td>{el.genre}</td>
            <td>{el.author}</td>
        </tr>);
    });
};

export default connect(mapStateToListProps, mapDispatchToListProps)(Rows);