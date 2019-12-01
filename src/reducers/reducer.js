
export default function reducer(state, action) {
    console.log(action)
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
                buttonClass: action.buttonClass
            };

        default:
            return state;
    }


}





