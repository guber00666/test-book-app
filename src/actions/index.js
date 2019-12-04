export const mapDispatchToFilterProps = (dispatch) => {
    return {
        setFilterValue: (newValue) => {
            dispatch({
                type: 'SET_FILTER',
                filterValue: newValue
            });
        }
    };
};

export const mapDispatchToCriteriaProps = (dispatch) => {
    return {
        setCriteriaValue: (newValue) => {
            dispatch({
                type: 'SET_CRITERIA',
                criteriaValue: newValue
            });
        }
    };
};

export const mapDispatchToListProps = (dispatch) => {
    return {
        setPaginatorValue: (newValue) => {
            dispatch({
                type: 'SET_PAGE',
                paginatorValue: newValue
            });
        }
    };
};

export const mapStateToListProps = (state) => {
    return {
        paginatorValue: state.paginatorValue,
        criteriaValue: state.criteriaValue,
        filterValue: state.filterValue

    };
};

export const mapStateToCriteriaProps = (state) => {
    return {
        criteriaValue: state.criteriaValue
    };
};

export const mapStateToFilterProps = (state) => {
    return {
        filterValue: state.filterValue
    };
};
