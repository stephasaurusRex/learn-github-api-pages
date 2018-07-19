import get from "lodash.get";
import React, { Component } from "react";
import styled from "styled-components";

import config from "../../config";
import { fadeColor, fadeIn } from "../../styles";

const LandingTitle = styled.h1`
  color: ${(props) => get(props, "theme.blends.landing.text")};
  font-weight: bold;
  font-size: 1.5rem;
  align-self: center;
  text-align: center;
  text-transform: uppercase;
  opacity: 0;
  animation: ${fadeIn()} 0.5s ease-out forwards;
  animation-delay: 0.5s;
`;

const LandingFooter = styled.div`
  position: absolute;
  padding: 1rem;
  bottom: 0;
  left: 0;
`;

/* the landing page */

class Landing extends Component {

  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <LandingTitle>I'm just a Boilerplate</LandingTitle>
        <LandingFooter>{config.copyrightNotice}<strong>{config.company}</strong></LandingFooter>
      </div>);
  }
}

export default styled(Landing) `
  background: ${(props) => get(props, "theme.blends.landing.accent")};
  color: ${(props) => get(props, "theme.blends.landing.text")};
  height: 100%;
  display: flex;
  justify-content: center;
  animation: ${(props) =>
    fadeColor(get(props, "theme.blends.landing.accent"), get(props, "theme.blends.landing.primary"))} 1s ease-out forwards;
`;
