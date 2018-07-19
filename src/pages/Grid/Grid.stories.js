import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React, { Fragment } from "react";

import Grid from "./Grid";

storiesOf("grid page", module)
  .add("basic usage", withInfo(`Grid without parameters`)(
    () =>
      <Fragment>
        <Grid></Grid>
      </Fragment>));
