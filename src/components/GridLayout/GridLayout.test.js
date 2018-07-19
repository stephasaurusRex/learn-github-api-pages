import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import GridLayout from "./GridLayout";

describe("GridLayout", () => {

  it("renders without props", () => {
    const tree = renderer.create(<GridLayout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
