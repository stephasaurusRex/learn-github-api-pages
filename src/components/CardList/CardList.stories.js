import { storiesOf } from "@storybook/react";
import React from "react";
import { withDocs } from "storybook-readme";

import CardList from "./CardList";
import readme from "./README.md";

storiesOf("CardList", module)
  .addDecorator(withDocs(readme))
  .add("basic usage", () =>
    <CardList>
      <CardList.Card title="hello world">card 1</CardList.Card>
      <CardList.Card title="hello world">card 2</CardList.Card>
      <CardList.Card title="hello world">card 3</CardList.Card>
    </CardList>);
