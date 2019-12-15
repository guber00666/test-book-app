import React from "react";

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

