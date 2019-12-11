import React from "react";
import ReactDOM from "react-dom";
import Spinner from "../../src/components/spinner";
import Adapter from "enzyme-adapter-react-16/build";
import reducer from "../../src/reducers/reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import { configure, shallow } from "enzyme/build";
import {
    NthChild1,
    NthChild2,
    NthChild3,
    PulseElement,
    SpinnerPulse
} from "../../src/components/styled-components/spinner-styles";



configure({ adapter: new Adapter() });

test("Render Spinner without crashing", () => {
    const rootDiv = document.createElement("div");
    const store = createStore(reducer);
    ReactDOM.render(
        <Provider store={store}>
            <Spinner />
        </Provider>,
        rootDiv);
    ReactDOM.unmountComponentAtNode(rootDiv);
});

describe("Spinner Component", () => {
    it("should be render jn Spinner", () => {
        const wrapper = shallow(
            <div className="spinner-container">
                <SpinnerPulse>
                    <PulseElement>
                        <div className="spinner-pulse">
                            <div className="spinner-elements">
                                <NthChild1>
                                    <div />
                                </NthChild1>
                                <NthChild2>
                                    <div />
                                </NthChild2>
                                <NthChild3>
                                    <div />
                                </NthChild3>
                            </div>
                        </div>
                    </PulseElement>
                </SpinnerPulse>
            </div>
        );
        expect(wrapper).toMatchSnapshot()
    })
});