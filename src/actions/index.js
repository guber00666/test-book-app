
export const mapDispatchToProps = (dispatch) => {
    return {
        setFilterValue: (newValue) => {
            dispatch({
                type: 'SET_FILTER',
                filterValue: newValue 
            })
        },
        setCriteriaValue: (newValue) => {
            dispatch({
                type: 'SET_CRITERIA',
                criteriaValue: newValue
            })
        },
        setPaginatorValue: (newValue) => {
            dispatch({
                type: 'SET_PAGE',
                paginatorValue: newValue 
            })
        }
    }
}