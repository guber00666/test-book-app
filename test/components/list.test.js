import React from "react";
import ReactDOM from "react-dom";
import Books from '../../src/services/books-service'
import List from "../../src/components/list";

test("Render List without crashing", () => {
    const rootDiv = document.createElement("div");
    ReactDOM.render(<List data={mockExpenses}/>, rootDiv);
    ReactDOM.unmountComponentAtNode(rootDiv);
});