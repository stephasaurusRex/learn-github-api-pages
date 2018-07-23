import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import Landing from "./Landing";

storiesOf("landing page", module)
  .add("basic usage", withInfo(`The landing page`)(() =>
        <Landing />
  ));
