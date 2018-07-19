import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";

import Menu from "./Menu";

storiesOf("Menu", module)

  .add("basic usage", withInfo(`MenuLink without parameters`)(
    () =>
      <MemoryRouter>
        <div style={{ background: "lightsalmon" }}>
          <Menu>
            <Menu.Link to="/">menu link one</Menu.Link>
            <Menu.Link to="/">menu link two</Menu.Link>
            <Menu.Link to="/">menu link three</Menu.Link>
          </Menu>
        </div>
      </MemoryRouter>));
