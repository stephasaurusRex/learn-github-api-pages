import "./styles/global";

import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import ThemeMenu from "./components/ThemeMenu/ThemeMenu";
import registerServiceWorker from "./registerServiceWorker";
import Routes from "./routes";
import ThemeProvider from "./styles/ThemeProvider/ThemeProvider";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider>
      <Fragment>
        <ThemeMenu style={{ position: "fixed", bottom: 0, right: 0, textAlign: "right" }} />
        <Menu style={{ position: "fixed" }}>
          <Menu.Link exact to="/" >landing page</Menu.Link>
          <Menu.Link exact to="/todos">todos</Menu.Link>
          <Menu.Link exact to="/grid">grid</Menu.Link>
        </Menu>
        <Routes />
      </Fragment>
    </ThemeProvider>
  </BrowserRouter >
  , document.getElementById("root"));

registerServiceWorker();
