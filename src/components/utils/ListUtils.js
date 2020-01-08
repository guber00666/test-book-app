import React from "react";
import Rows from "../rows";

export const filterForElements = (books, filterValue, criteriaValue) => {
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


export const errorMessage = <h1 style={{textAlign: "center"}}>Sorry can't get data from server.</h1>;

export const tableRows = (
    <table className="table">
        <thead>
        <tr >
            <th scope="col">Name</th>
            <th scope="col">Genre</th>
            <th scope="col">Authors</th>
        </tr>
        </thead>
        <tbody>
        <Rows />
        </tbody>
    </table>
);
