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
                paginatorValue: newValue,

            });
        }
    };
};

export const mapDispatchToBooksProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(booksFetchData(url))
    };
};


export function booksHasErrored(bool) {
    return {
        type: 'BOOKS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function booksIsLoading(bool) {
    return {
        type: 'BOOKS_IS_LOADING',
        isLoading: bool
    };
}

export function booksFetchDataSuccess(books) {
    return {
        type: 'BOOKS_FETCH_DATA_SUCCESS',
        books
    };
}

export function booksFetchData(url) {
    return (dispatch) => {
        dispatch(booksIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(booksIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(booksFetchDataSuccess(items)))
            .catch(() => dispatch(booksHasErrored(true)));
    };
}


export const mapStateToAppProps = (state) => {
    return {
        books: state.books,
        hasErrored: state.booksHasErrored,
        isLoading: state.booksIsLoading

    };
};

export const mapStateToListProps = (state) => {
    return {
        paginatorValue: state.paginatorValue,
        criteriaValue: state.criteriaValue,
        filterValue: state.filterValue,
        books: state.books,
        hasErrored: state.booksHasErrored,
        isLoading: state.booksIsLoading

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



