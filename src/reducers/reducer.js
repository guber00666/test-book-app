import { criteriaOptions } from '../constants/constants';

export const initialState = {
    criteriaValue: criteriaOptions[0].value,
    filterValue: '',
    paginatorValue: 1,
    books: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_CRITERIA":
            return {
                ...state,
                criteriaValue: action.criteriaValue
            };

        case "SET_FILTER":
            return {
                ...state,
                filterValue: action.filterValue
            };

        case "SET_PAGE":
            return {
                ...state,
                paginatorValue: action.paginatorValue,
            };

        case 'BOOKS_FETCH_DATA_SUCCESS':
            return {
                ...state,
                books: action.books
            };


        default:
            return state;
    }
};







