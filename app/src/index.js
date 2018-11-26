import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Colors from "./styles/settings/Colors";
import Size from "./styles/generic/Size";
import Reset from "./styles/generic/Reset";
import Base from "./styles/Base";

ReactDOM.render(
  <Fragment>
    <Colors />
    <Size />
    <Reset />
    <Base />
    <App />
  </Fragment>,
  document.getElementById("root")
);
