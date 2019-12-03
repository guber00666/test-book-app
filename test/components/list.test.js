import React from "react";
import ReactDOM from "react-dom";
import { books } from '../../src/services/books-service'
import List from "../../src/components/list";

test("Render List without crashing", () => {
    const rootDiv = document.createElement("div");
    ReactDOM.render(<List data={books}/>, rootDiv);
    ReactDOM.unmountComponentAtNode(rootDiv);
});