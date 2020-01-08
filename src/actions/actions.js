import { booksFetchData } from '../middlewares/middlewares'

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
        fetchData: (url) => dispatch(booksFetchData(url)),
        setPaginatorValue: (newValue) => {
            dispatch({
                type: 'SET_PAGE',
                paginatorValue: newValue,
            });
        }
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
        books: books
    };
}


export const mapStateToListProps = (state) => {
    return {
        paginatorValue: state.paginatorValue,
        criteriaValue: state.criteriaValue,
        filterValue: state.filterValue,
        isLoading: state.isLoading,
        hasErrored: state.hasErrored,
        books: state.books

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



