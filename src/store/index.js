
import { createStore } from 'redux';
import reducer from '../reducers';
import { criteriaOptions } from '../services/books-service';

const initialState = {
    criteriaValue: criteriaOptions[0].value,
    filterValue: '',
    paginatorValue: '0',
};

export const store = createStore(reducer, initialState);
