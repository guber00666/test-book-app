import React from 'react';
import './list.css';
import { store } from '../../store/index'


const List = (props) => {

    const data = props.data;

    const { paginatorValue } = store.getState();


    const setPaginatorValue = props.setPaginatorValue;

    const rows = data.map((el, key) => {
        return (<tr key={key}>
            <td>{el.name}</td>
            <td>{el.genre}</td>
            <td>{el.author}</td>
        </tr>);
    });

    const numberOfPages = (Math.ceil(rows.length / 10));

    const counterPage = [];

    for (let i = 0; i < numberOfPages; i++) {
        counterPage.push(i);
    };

    const buttons = counterPage.map((el, key) => {

        let buttonClass = `btn btn-outline-dark`;

        if (paginatorValue === `${el + 1}`) {
            buttonClass = "btn btn-outline-dark active";
        }; 
        return (
            <button
                key={key} type="button"
                className={buttonClass}
                value={key + 1}
                onClick={
                    event => setPaginatorValue(event.target.value)
                }>
                {el + 1}
            </button>
        );
    });

    const Paginator = (rows, paginatorValue) => {
        if (paginatorValue == "1") {
            return rows.filter((item => item.key <= 9));
        }
        else {
            return rows.filter((item => {
               return item.key > 10 * paginatorValue - 10 && item.key < 10 * paginatorValue;
            }));        
        }
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
                    { paginator }
                </tbody>
            </table>
            <div className="pagination-container">
                { buttons }
            </div>
        </div>
    );
};


export default List;

/*switch(paginatorValue) {
    case("1"):
        return rows.filter(item => item.key > 9 && item.key <= 19);

    case("2"):
        return rows.filter(item => item.key > 19 && item.key <= 29);

    case("3"):
        return rows.filter(item => item.key > 29);

    default:
        return rows.filter((item => item.key <= 9));

}*/