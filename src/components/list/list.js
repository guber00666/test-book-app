import React from 'react';
import { store } from '../../store/index';
import { countRowsOnPage } from '../../services/books-service';
import './list.css';

const List = (props) => {
    const {data, setPaginatorValue} = props;
    const { paginatorValue } = store.getState(); 
    console.log('List', data.length);
    const numberOfPages = (Math.ceil(data.length / countRowsOnPage));

    const page = numberOfPages < paginatorValue ? numberOfPages : paginatorValue;

    const paginatedData = data.slice((page - 1) * countRowsOnPage, countRowsOnPage * page);

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
     };

    const buttons = counterPage.map((el) => {

        let buttonClass = `btn btn-outline-dark`;

        if (page === el) {
            buttonClass = "btn btn-outline-dark active";
        };

        return (
            <button
                key={el} type="button"
                className={buttonClass}
                value={el}
                onClick={
                    event => setPaginatorValue(Number(event.target.value))
                }
            >
                {el}
            </button>
        );
    });

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
                    { rows }
                </tbody>
            </table>
            <div className="pagination-container">
                { buttons }
            </div>
        </div>
    );
};

export default List;

