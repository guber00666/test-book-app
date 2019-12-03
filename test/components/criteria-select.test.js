import React from "react";
import ReactDOM from "react-dom";
import CriteriaSelect from '../../src/components/criteria-select';

test("Render CriteriaSelect without crashing", () => {
    const rootDiv = document.createElement("div");
    ReactDOM.render(<CriteriaSelect />, rootDiv);
    ReactDOM.unmountComponentAtNode(rootDiv);
});