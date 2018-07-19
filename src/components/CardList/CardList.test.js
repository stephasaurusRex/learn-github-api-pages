import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import CardList from "./CardList";

describe("CardList", () => {

  it("renders without props", () => {
    const tree = renderer.create(<CardList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
