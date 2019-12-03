export const getCriteriaAction = (newValue) => {
    return {
        type: 'SET_CRITERIA',
        criteriaValue: newValue
    };
};

export const getFilterAction = (newValue) => {
    return {
            type: 'SET_FILTER',
            filterValue: newValue 
    };
};

export const getPaginatorAction = (newValue) => {
    return {
        type: 'SET_PAGE',
        paginatorValue: newValue,
    };
};