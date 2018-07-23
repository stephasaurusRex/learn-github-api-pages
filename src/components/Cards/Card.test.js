import "jest-styled-components";

import React from "react";
import TestRenderer from "react-test-renderer";

import Card from "./Card";

describe("Card", () => {

  it("renders without props", () => {
    const testRenderer = TestRenderer.create(
      <Card/>
    );
    expect(testRenderer).toMatchSnapshot();
    testRenderer.unmount();
  });

  it("renders with props", () => {
    const repo = {
      name: 'Test Repo',
      svn_url: 'https://testthatcard.com',
      stargazers_count: 14,
      topContributor: {
        login: 'barry manilow',
        html_url: 'http://thisisnotreal.com',
        avatar_url: 'https://google.com',
      }
    }

    const testRenderer = TestRenderer.create(
      <Card key="123" rank="456" repo={repo}/>
    );
    expect(testRenderer).toMatchSnapshot();
  });

  it("renders error with insufficient props", () => {
    const repo = {
      name: 'Test Repo',
      svn_url: 'https://testthatcard.com',
      stargazers_count: 14,
    }

    const testRenderer = TestRenderer.create(
      <Card key="123" rank="456" repo={repo}/>
    );
    expect(testRenderer).toMatchSnapshot();
  });
});
