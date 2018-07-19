import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";

import Landing from "./Landing";

storiesOf("landing page", module)
  .add("basic usage", withInfo(`A landing page`)(() =>
    <MemoryRouter>
      <div style={{ height: "100vh" }}>
        <Landing />
      </div>
    </MemoryRouter>));
