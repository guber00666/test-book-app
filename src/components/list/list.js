import React from 'react';
import { store } from '../../store/index';
import { countRowsOnPage } from '../../services/books-service';

const List = (props) => {

    const { data, setPaginatorValue } = props;
    const { paginatorValue } = store.getState();
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
                style={{
                    marginLeft: "5px",
                    borderRadius: "0.3em"
                }}
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
        <div className="list"
            style={{
                marginTop: "30px",
                border: "solid 1px",
                borderRadius: "0.3 em"
            }}>
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
};

export default List;

