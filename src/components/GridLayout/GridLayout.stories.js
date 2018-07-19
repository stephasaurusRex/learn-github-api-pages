import { storiesOf } from "@storybook/react";
import React from "react";
import { withDocs } from "storybook-readme";

import GridLayout from "./GridLayout";
import readme from "./README.md";

storiesOf("GridLayout", module)
  .addDecorator(withDocs(readme))
  .add("basic usage", () => <GridLayout />);
