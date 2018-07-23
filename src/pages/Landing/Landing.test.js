import "jest-styled-components";

import React from "react";
import TestRenderer from "react-test-renderer";

import Landing from "./Landing";

describe("Landing", () => {

  it("renders without props", () => {
    const testRenderer = TestRenderer.create(
      <Landing/>
    );
    expect(testRenderer).toMatchSnapshot();
    testRenderer.unmount();
  });

});
