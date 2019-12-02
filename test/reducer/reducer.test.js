import reducer, { initialState } from '../../src/reducers';

test("Reducer test", () => {
    let newState = reducer(initialState, {});
    console.log("init", initialState);
    expect(newState).toMatchObject(initialState);

    newState = reducer(initialState, {type: "SET_CRITERIA", criteriaValue: 1});
    expect(newState).toMatchObject({ ...initialState, criteriaValue: 1 });

});