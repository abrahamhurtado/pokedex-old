import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import App from "./screens/App";
import PokemonDetail from "./screens/PokemonDetail";

render(
  <Router>
    <App path="/" />
    <PokemonDetail path="/pokemon/:id" />
  </Router>,
  document.querySelector("#root")
);

if (module.hot) {
  module.hot.accept();
}
