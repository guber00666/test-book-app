import { criteriaOptions } from '../services/books-service';

export const initialState = {
    criteriaValue: criteriaOptions[0].value,
    filterValue: '',
    paginatorValue: 1,
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

        default:
            return state;
    }


}
export const mapStateToProps = (state) => {
    return {
        criteriaValue: state.criteriaValue,
        filterValue: state.filterValue,
        paginatorValue: state.paginatorValue
    }
}






