import get from "lodash.get";
import React from "react";
import styled from "styled-components";

import { themeWrapper } from "../../styles/ThemeProvider/ThemeProvider";
import Menu from "../Menu/Menu";

const Item = styled.div`
  min-width: 120px;
  color: ${(props) => (props.isSelected ? get(props, "theme.palette.primary") : "#333")};
  font-size: 1rem;
  cursor: pointer;

  :hover {
    color:
  }
`;

const ThemeMenu = ({ style, className, themes, setTheme, selectedTheme }) => (
  <Menu style={style} className={className}>
    {
      themes.map((theme, idx) =>
        <Item
          key={idx}
          onClick={() => setTheme(theme)}
          isSelected={selectedTheme.name === theme.name}>
          {theme.name}
        </Item>)
    }
  </Menu>);

ThemeMenu.defaultProps = {
  themes: [],
  setTheme: () => { },
  selectedTheme: {},
};

export default themeWrapper(ThemeMenu);
