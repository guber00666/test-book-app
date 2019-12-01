import React from 'react';
import './list.css';
import { store } from '../../store/index'


const List = (props) => {

    const data = props.data;

    const { paginatorValue, buttonClass } = store.getState();


    const setPaginatorValue = props.setPaginatorValue;

    const rows = data.map((el, key) => {
        return (<tr key={key}>
            <td>{el.name}</td>
            <td>{el.genre}</td>
            <td>{el.author}</td>
        </tr>);
    });

    const numberOfPages = (Math.ceil(rows.length / 10));

    const counter = [];

    for (let i = 0; i < numberOfPages; i++) {
        counter.push(i);
    };

    const buttons = counter.map((el, key) => {
        return (
            <button
                key={key} type="button"
                className={buttonClass}
                value={key}
                onClick={
                    event => setPaginatorValue(event.target.value)
                }>
                {el + 1}
            </button>
        );
    });

    const Paginator = (rows, paginatorValue) => {
        if (paginatorValue === "0") {
            return rows.filter((item => item.key <= 9));
        }
        else {
            return rows.filter(item => item.key > 9 && item.key <= 19);
        };
    };

    const paginator = Paginator(rows, paginatorValue);

    return (
        <div className="list">
            <table className="table">
                <thead>
                    <tr >
                        <th scope="col">Name</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Authors</th>
                    </tr>
                </thead>
                <tbody>
                    {paginator}
                </tbody>
            </table>
            <div className="pagination-container">
                {buttons}
            </div>
        </div>
    );
};


export default List;

