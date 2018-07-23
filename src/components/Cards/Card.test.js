import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import Card from "./Card";

describe("Card", () => {

  it("renders without props", () => {
    const tree = renderer.create(<Card/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
