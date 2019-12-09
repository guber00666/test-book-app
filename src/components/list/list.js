import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../spinner';
import { countRowsOnPage } from '../../constants/constants';
import {
    mapStateToListProps,
    mapDispatchToListProps,
} from '../../actions/index';

class List extends Component {

    componentDidMount() {
        setTimeout(() =>{
            this.props.fetchData("http://localhost:3002/books")
        } , 5000);
    }

    filterForElements = (books, filterValue, criteriaValue) => {
        let keyForFiter;
        switch (criteriaValue) {
            case ("1"):
                keyForFiter = 'genre';
                break;
            case ("2"):
                keyForFiter = 'author';
                break;
            default:
                keyForFiter = 'name';
        }
        return books.filter((item) => item[keyForFiter]
            .toLowerCase()
            .includes(filterValue.toLowerCase())
        );
    };

    render() {

        const { criteriaValue,
                filterValue,
                paginatorValue,
                setPaginatorValue,
                hasErrored,
                isLoading,
                books} = this.props;

        const errorMessage = <h1 style={{textAlign: "center"}}>Sorry can't get data from server.</h1>;

        const filter = this.filterForElements(books, filterValue, criteriaValue);

        const numberOfPages = (Math.ceil(filter.length / countRowsOnPage));

        const page = numberOfPages < paginatorValue ? numberOfPages : paginatorValue;

        const paginatedData = filter.slice((page - 1) * countRowsOnPage, countRowsOnPage * page);

        const rows = paginatedData.map((el, key) => {
            return (<tr key={key}>
                <td>{el.name}</td>
                <td>{el.genre}</td>
                <td>{el.author}</td>
            </tr>);
        });

        const counterPage = [];
        for (let i = 0; i < numberOfPages; i++) {
            counterPage.push(i + 1);
        }

        const buttons = counterPage.map((el) => {

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
        const tableRows = (
            <table className="table">
                <thead>
                <tr >
                    <th scope="col">Name</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Authors</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        );

        const spinner = isLoading&&!hasErrored  ? <Spinner /> : null;

        const data = !isLoading ? tableRows : null;

        const error = hasErrored ? errorMessage : null;

        return (
            <div className="list"
                style={{
                    marginTop: "30px",
                    border: "solid 1px",
                    borderRadius: "0.3em"
                }}>
                {data}
                {spinner}
                {error}
                <div className="pagination-container"
                    style={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        float: "right"
                    }}>
                    {buttons}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToListProps, mapDispatchToListProps)(List);

