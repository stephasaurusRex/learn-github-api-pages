import { storiesOf } from "@storybook/react";
import React from "react";
import { withDocs } from "storybook-readme";
import "../../styles/global";

import Card from "./Card";
import readme from "./README.md";

const repo = {
  name: 'Test Repo',
  svn_url: 'https://testthatcard.com',
  stargazers_count: 14,
  topContributor: {
    login: 'barry manilow',
    html_url: 'http://thisisnotreal.com',
    avartar_url: 'https://google.com',
  }
}

storiesOf("Card", module)
  .addDecorator(withDocs(readme))
  .add("basic usage", () =>
    <Card
      key={1}
      rank={1}
      repo={repo}>
    </Card>);
