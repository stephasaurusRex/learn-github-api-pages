import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import ThemeProvider from "../../styles/ThemeProvider/ThemeProvider";
import ThemeMenu from "./ThemeMenu";

storiesOf("ThemeMenu", module)

  .add("basic usage", withInfo(`Dropdown for changing the theme`)(
    () =>
      <ThemeProvider>
        <ThemeMenu />
      </ThemeProvider>));
