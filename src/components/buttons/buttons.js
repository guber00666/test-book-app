import React from 'react';
import {connect} from 'react-redux';
import {mapDispatchToListProps, mapStateToListProps,} from '../../actions/actions';
import {filterForElements} from "../utils/ListUtils";
import {countRowsOnPage} from "../../constants/constants";

const Buttons = (props) => {

    const {
        criteriaValue,
        filterValue,
        paginatorValue,
        setPaginatorValue,
        books} = props;

    const filter = filterForElements(books, filterValue, criteriaValue);
    const numberOfPages = (Math.ceil(filter.length / countRowsOnPage));
    const page = numberOfPages < paginatorValue ? numberOfPages : paginatorValue;
    const counterPage = [];
    for (let i = 0; i < numberOfPages; i++) {
        counterPage.push(i + 1);
    }
    return counterPage.map((el) => {

        let buttonClass = `btn btn-outline-dark`;

        if (page === el) {
            buttonClass = "btn btn-outline-dark active";
        }

        return (
            <button
                style={{
                    marginLeft: "5px",
                    borderRadius: "0.3em"
                }}
                key={el} type="button"
                className={buttonClass}
                value={el}
                onClick={
                    event => setPaginatorValue(Number(event.target.value))
                }>
                {el}
            </button>
        );
    });

};

export default connect(mapStateToListProps, mapDispatchToListProps)(Buttons)