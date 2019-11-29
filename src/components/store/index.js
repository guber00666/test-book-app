
import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
    criteriaValue: '',
    filterValue: ''
};

export const store = createStore(reducer, initialState);
