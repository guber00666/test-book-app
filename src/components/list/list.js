import React from 'react';
import './list.css';


const List = (props) => {

    const data = props.data;

    const rows = data.map((el, id) => {
        return (<tr key={id}>
            <td>{el.name}</td>
            <td>{el.genre}</td>
            <td>{el.author}</td>
        </tr>);
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
                    {rows}
                </tbody>
            </table>
        </div>
    );
};


export default List;


