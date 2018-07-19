import "jest-styled-components";

import React from "react";
import { MemoryRouter } from "react-router";
import renderer from "react-test-renderer";

import Landing from "./Landing";

describe("Landing", () => {

  it("renders without props", () => {
    const tree = renderer.create(<MemoryRouter><Landing /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
