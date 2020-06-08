import React from "react";
import { render } from "@testing-library/react";
//As with any library, we need to import react-testing-library before we can use it,
import CheckoutForm from "./CheckoutForm";
import ReactDOM from "react-dom";
import App from "../App";

// Write up the two tests here and make sure they are testing what the title shows

//Automated testing minimizes the risk of bugs finding their way into production code. Testing should be apart of every workflow
// this particular test works on 3 methonds....arrange, act, & assert. run with " npm test -" in the console to execute test

test("form header renders", () => {});
const { getByText } = render(<CheckoutForm />);
const header = getByText(/checkout form/i);
expect(header).toBeInTheDocument();

test("form shows success message on submit with form details", () => {});

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
