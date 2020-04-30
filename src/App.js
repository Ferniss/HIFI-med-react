import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import NavBar from "./NavBar";

const App = () => {
  return (
    <React.StrictMode>
      <div>
    <NavBar />
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
    </React.StrictMode>
  );
};
render(<App />, document.querySelector("#root"));
