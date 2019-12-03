import React from "react";
import ReactDOM from "react-dom";
import App from "../../src/components/app";

test("Render App without crashing", () => {
    const rootDiv = document.createElement("div");
    ReactDOM.render(<App />, rootDiv);
    ReactDOM.unmountComponentAtNode(rootDiv);
});