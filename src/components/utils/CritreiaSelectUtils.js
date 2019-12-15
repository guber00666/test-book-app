import React from 'react';
import {criteriaOptions} from "../../constants/constants";

export const rowsOptions = criteriaOptions.map((el, id) => {
    return (
        <option key={id} value={el.value}>{el.label}</option>
    );
});