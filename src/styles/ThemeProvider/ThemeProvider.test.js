import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import ThemeProvider from "./ThemeProvider";

describe("ThemeProvider", () => {

  it("renders without props", () => {
    const tree = renderer.create(<ThemeProvider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
