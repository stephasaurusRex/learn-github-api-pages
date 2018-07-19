import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import Todos from "./Todos";

describe.skip("Todos", () => {

  it("renders without props", () => {
    const tree = renderer.create(<Todos />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
