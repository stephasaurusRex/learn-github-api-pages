import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import Grid from "./Grid";

describe("Grid", () => {

  it("renders without props", () => {
    const tree = renderer.create(<Grid />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
