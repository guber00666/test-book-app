import React from 'react';
import './list.css';


const List = (props) => {
    
    const {name, genre, author} = props;

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Book 1</th>
                    <th scope="col">Book 2</th>
                    <th scope="col">Book 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>Book Name</td>
                    <td>Book Name</td>
                </tr>
                <tr>
                    <td>{genre}</td>
                    <td>Book Genre</td>
                    <td>Book Genre</td>
                </tr>
                <tr>
                    <td>{author}</td>
                    <td>Book Author</td>
                    <td>Book Author</td>
                </tr>
            </tbody>
        </table>
    );
};


export default List;


