import React from "react";
import ReactDOM from "react-dom";
import List from "../../src/components/list";
import Spinner from "../../src/components/spinner";
import Adapter from "enzyme-adapter-react-16/build";
import reducer from '../../src/reducers/reducer';
import {books, countRowsOnPage} from '../../src/constants/constants'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ListStyles, PaginatorStyles } from "../../src/components/styled-components/components-styles";
import {configure, shallow} from "enzyme/build";


configure({ adapter: new Adapter() });

test("Render List without crashing", () => {
    const rootDiv = document.createElement("div");
    const store = createStore(reducer);
    ReactDOM.render( 
        <Provider store={store}>
            <List data={books} />
          </Provider>,
          rootDiv);
    ReactDOM.unmountComponentAtNode(rootDiv);
});

describe("List Component", () => {
    it("should be render on List", () => {

       const filterForElements = (books, filterValue, criteriaValue) => {
            let keyForFiter;
            switch (criteriaValue) {
                case ("1"):
                    keyForFiter = 'genre';
                    break;
                case ("2"):
                    keyForFiter = 'author';
                    break;
                default:
                    keyForFiter = 'name';
            }
            return books.filter((item) => item[keyForFiter]
                .toLowerCase()
                .includes(filterValue.toLowerCase())
            );
        };

        const isLoading = true;

        const hasErrored = false;

        const filterValue = '';

        const criteriaValue = "0";

        const paginatorValue = 1;

        const errorMessage = <h1 style={{textAlign: "center"}}>Sorry can't get data from server.</h1>;

        const filter = filterForElements(books, filterValue, criteriaValue);

        const numberOfPages = (Math.ceil(filter.length / countRowsOnPage));

        const page = numberOfPages < paginatorValue ? numberOfPages : paginatorValue;

        const paginatedData = filter.slice((page - 1) * countRowsOnPage, countRowsOnPage * page);

        const counterPage = [];
        for (let i = 0; i < numberOfPages; i++) {
            counterPage.push(i + 1);
        }

        const buttons = counterPage.map((el) => {

            let buttonClass = `btn btn-outline-dark`;

            if (page === el) {
                buttonClass = "btn btn-outline-dark active";
            }

            return (
                <button
                    style={{
                        marginLeft: "5px",
                        borderRadius: "0.3em"
                    }}
                    key={el} type="button"
                    className={buttonClass}
                    value={el}
                    onClick={
                        event => setPaginatorValue(Number(event.target.value))
                    }>
                    {el}
                </button>
            );
        });

        const spinner = isLoading&&!hasErrored  ? <Spinner /> : null;

        const data = !isLoading ? tableRows : null;

        const error = hasErrored ? errorMessage : null;

        const wrapper = shallow(
            <ListStyles>
                <div className="list">
                    {data}
                    {spinner}
                    {error}
                    <PaginatorStyles>
                        <div className="pagination-container">
                            {buttons}
                        </div>
                    </PaginatorStyles>
                </div>
            </ListStyles>
        );
        expect(wrapper).toMatchSnapshot();
    })
});