import React from 'react';
import './list.css';


const List = (props) => {
    
    const data = props.data;

    const rows = data.map(el => {
        return (
            <tr>
                <td>{el.name}</td>
                <td>{el.genre}</td>
                <td>{el.author}</td>
            </tr>
        );
    });

    return (
        <table className="table">
            <thead>
                <tr>
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
};


export default List;


