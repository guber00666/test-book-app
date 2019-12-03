import reducer, { initialState } from '../../src/reducers';

test("Reducer test", () => {
    let newState = reducer(initialState, {});
    expect(newState).toMatchObject(initialState);

    newState = reducer(initialState, {type: "SET_CRITERIA", criteriaValue: 1});
    expect(newState).toMatchObject({ ...initialState, criteriaValue: 1 });

});

test("Reducer test", () => {
    let newState = reducer(initialState, {});
    expect(newState).toMatchObject(initialState);

    newState = reducer(initialState, {type: "SET_FILTER", filterValue: ''});
    expect(newState).toMatchObject({ ...initialState, filterValue: '' });

});

test("Reducer test", () => {
    let newState = reducer(initialState, {});
    expect(newState).toMatchObject(initialState);

    newState = reducer(initialState, {type: "SET_PAGE", paginatorValue: 1});
    expect(newState).toMatchObject({ ...initialState, paginatorValue: 1});

});