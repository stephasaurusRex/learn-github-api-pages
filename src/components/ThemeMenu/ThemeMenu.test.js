import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import ThemeMenu from "./ThemeMenu";

describe("ThemeMenu", () => {

  it("renders without props", () => {
    const tree = renderer.create(<ThemeMenu />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
