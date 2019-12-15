import React from "react";
import List from "../../src/components/list";
import Adapter from "enzyme-adapter-react-16/build";
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux';
import { StyledList, StyledPaginator } from "../../src/components/styled-components/components-styles";
import configureStore from "redux-mock-store";
import 'jest-styled-components';
import { filterForElements } from "../../src/components/utils/ListUtils";
import {
    mapStateToListProps,
    mapDispatchToListProps,
} from '../../src/actions/index';

configure({ adapter: new Adapter() });

export const initialState = {
    criteriaValue: '0',
    filterValue: '',
    paginatorValue: 1,
    books: [],
    isLoading: true,
    hasErrored: false
};

const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);


describe("<List />", () => {

    const wrapperList = mount(
        <Provider store={store}>
            <List />
        </Provider>
    );

    it('should be render self and other import', () => {
        expect(wrapperList.find('div').at(1).hasClass('list')).toBe(true);
        expect(wrapperList.find('div').at(14).hasClass('pagination-container')).toBe(true);

        expect(wrapperList.find(StyledList)).toBeDefined();
        expect(wrapperList.find(StyledPaginator)).toBeDefined();

        expect(wrapperList).toMatchSnapshot();
    });

    it('List should have styles', () => {
        const listStyles = renderer.create(<StyledList />).toJSON();
        expect(listStyles).toHaveStyleRule('margin-top', '30px');
        expect(listStyles).toHaveStyleRule('border', 'solid 1px');
        expect(listStyles).toHaveStyleRule('border-radius', '0.3em');

        const paginatorStyles = renderer.create(<StyledPaginator />).toJSON();
        expect(paginatorStyles).toHaveStyleRule('margin-top', '30px');
        expect(paginatorStyles).toHaveStyleRule('margin-bottom', '30px');
        expect(paginatorStyles).toHaveStyleRule('float', 'right');

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

    it('List should roll the dice again when onChange work out', () => {
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
        expect(filter
        (books, filterValue, criteriaValue))
            .toEqual([{"author": "Asimov Isaac", "genre": "SciFi", "id": 1, "name": "Foundation"}]);
    });
});