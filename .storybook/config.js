import { setOptions } from "@storybook/addon-options";
import { configure } from "@storybook/react";

setOptions({
  name: "fresh-start",
  url: "https://github.com/au-re/fresh-start",
  goFullScreen: false,
  showDownPanel: false,
  downPanelInRight: false,
});

const req = require.context("../src", true, /.+\.stories\.js/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
