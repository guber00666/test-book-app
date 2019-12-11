import React from "react";
import ReactDOM from "react-dom";
import Adapter from "enzyme-adapter-react-16/build";
import FilterInput from "../../src/components/filter-input";
import reducer from '../../src/reducers/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { SearchPanelStyles } from "../../src/components/styled-components/components-styles";
import { configure, shallow } from "enzyme/build";


configure({ adapter: new Adapter() });

test("Render FilterInput without crashing", () => {
    const rootDiv = document.createElement("div");
    const store = createStore(reducer);
    ReactDOM.render( 
        <Provider store={store}>
            <FilterInput />
          </Provider>,
          rootDiv);
    ReactDOM.unmountComponentAtNode(rootDiv);
});

describe("FilterInput Component", () => {
    it("should be render on FilterInput", () => {
        const wrapper = shallow(
            <div className="search-panel">
                <div className="input-group mb-3" />
                <SearchPanelStyles>
                    <input className="form-control"
                           onChange={
                               event => setFilterValue(event.target.value)}
                           placeholder="type for search" />
                </SearchPanelStyles>
            </div>
        );
        expect(wrapper).toMatchSnapshot();
    })
});