import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import Menu from "./Menu";

describe("Menu", () => {

  it("renders without props", () => {
    const tree = renderer.create(<Menu />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
