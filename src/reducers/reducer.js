import { criteriaOptions } from '../constants/constants';

export const initialState = {
    criteriaValue: criteriaOptions[0].value,
    filterValue: '',
    paginatorValue: 1,
    books: [],
    isLoading: true,
    hasErrored: false
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

        case 'BOOKS_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            };

        case 'BOOKS_HAS_ERRORED':
            return {
                ...state,
                hasErrored: action.hasErrored
            };



        default:
            return state;
    }
};







