import { storiesOf } from "@storybook/react";
import React from "react";
import { withDocs } from "storybook-readme";

import Card from "./Card";
import readme from "./README.md";

storiesOf("Card", module)
  .addDecorator(withDocs(readme))
  .add("basic usage", () =>
    <Card
    >
    </Card>);
