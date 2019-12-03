import React from "react";
import ReactDOM from "react-dom";
import FilterInput from "../../src/components/filter-input";

test("Render FilterInput without crashing", () => {
    const rootDiv = document.createElement("div");
    ReactDOM.render(<FilterInput />, rootDiv);
    ReactDOM.unmountComponentAtNode(rootDiv);
});