import React from "react";
import List from "../../src/components/list";
import Adapter from "enzyme-adapter-react-16/build";
import { Provider } from 'react-redux';
import { filterForElements } from "../../src/components/utils/ListUtils";
import {
    mapStateToListProps,
    mapDispatchToListProps,
} from '../../src/actions/actions';
import {applyMiddleware, createStore} from "redux";
import reducer from "../../src/reducers";
import {crashReporter, logger} from "../../src/middlewares/middlewares";
import thunk from "redux-thunk";
import {initialState} from '../../src/reducers/reducer'
configure({ adapter: new Adapter() });



const store = createStore(reducer,
    applyMiddleware(logger, crashReporter, thunk));

describe("<List />", () => {

    const wrapperList = mount(
        <Provider store={store}>
            <List />
        </Provider>
    );

    it('should be render self and other import', () => {
        expect(wrapperList).toMatchSnapshot();
    });

    it('List should show previously rolled value', () => {
        expect(mapStateToListProps(initialState).criteriaValue).toEqual("0");
        expect(mapStateToListProps(initialState).filterValue).toEqual("");
        expect(mapStateToListProps(initialState).paginatorValue).toEqual(1);
        expect(mapStateToListProps(initialState).books).toEqual([]);
        expect(mapStateToListProps(initialState).isLoading).toEqual(true);
        expect(mapStateToListProps(initialState).hasErrored).toEqual(false);
    });

    it('List setPaginatorvalue should roll the dice again when onChange work out', () => {
    const dispatch = jest.fn();

    mapDispatchToListProps(dispatch).setPaginatorValue();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'SET_PAGE' });
    });

});

describe('filterForElements function', () => {
    it('should be filter by critieriaValue and filterValue', () => {
        const filter = filterForElements;
        const books = [
            {
                id: 1,
                name: 'Foundation',
                author: 'Asimov Isaac',
                genre: 'SciFi'
            },
            {
                id: 2,
                name: 'The Master and Margarita',
                author: 'Bulgakov Mikhail',
                genre: 'Fantasy'
            }
            ];
        const filterValue = 'SciFi';
        const criteriaValue = '1';
        const output = [{"author": "Asimov Isaac", "genre": "SciFi", "id": 1, "name": "Foundation"}];
        expect(filter
        (books, filterValue, criteriaValue)).toEqual(output);
    });
});

