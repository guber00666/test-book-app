import reducer, { initialState } from '../../src/reducers';

describe('reducer', () => {
    it("Reducer test set criteria", () => {
        let newState = reducer(initialState, {});
        expect(newState).toMatchObject(initialState);

        newState = reducer(initialState, {type: "SET_CRITERIA", criteriaValue: 1});
        expect(newState).toMatchObject({ ...initialState, criteriaValue: 1 });
    });

    it("Reducer test set filter", () => {
        let newState = reducer(initialState, {});
        expect(newState).toMatchObject(initialState);

        newState = reducer(initialState, {type: "SET_FILTER", filterValue: ''});
        expect(newState).toMatchObject({ ...initialState, filterValue: '' });
    });

    it("Reducer test set page", () => {
        let newState = reducer(initialState, {});
        expect(newState).toMatchObject(initialState);

        newState = reducer(initialState, {type: "SET_PAGE", paginatorValue: 1});
        expect(newState).toMatchObject({ ...initialState, paginatorValue: 1});
    });

    it("Reducer test BOOKS_FETCH_DATA_SUCCESS", () => {
        let newState = reducer(initialState, {});
        expect(newState).toMatchObject(initialState);

        newState = reducer(initialState, {type: "BOOKS_FETCH_DATA_SUCCESS", books: []});
        expect(newState).toMatchObject({ ...initialState, books: []});
    });

    it("Reducer test BOOKS_IS_LOADING", () => {
        let newState = reducer(initialState, {});
        expect(newState).toMatchObject(initialState);

        newState = reducer(initialState, {type: "BOOKS_IS_LOADING", isLoading: true});
        expect(newState).toMatchObject({ ...initialState, isLoading: true});
    });

    it("Reducer test BOOKS_HAS_ERRORED", () => {
        let newState = reducer(initialState, {});
        expect(newState).toMatchObject(initialState);

        newState = reducer(initialState, {type: "BOOKS_HAS_ERRORED", hasErrored: false});
        expect(newState).toMatchObject({ ...initialState, hasErrored: false});
    });
});

