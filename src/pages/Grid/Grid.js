import get from "lodash.get";
import React, { Component } from "react";
import styled from "styled-components";

import GridLayout from "../../components/GridLayout/GridLayout";
import { fadeColor } from "../../styles";

/* resizable grid layout demo */

class Grid extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <GridLayout />
      </div>);
  }
}

export default styled(Grid) `
  background: ${(props) => get(props, "theme.blends.grid.accent")};
  color: ${(props) => get(props, "theme.blends.grid.text")};
  min-height: 100%;
  justify-content: center;
  animation: ${(props) =>
    fadeColor(get(props, "theme.blends.grid.accent"), get(props, "theme.blends.grid.primary"))} 1s ease-out forwards;
`;
