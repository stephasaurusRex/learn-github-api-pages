// split the bundle on a page level to limit the size of the initial load
// https://github.com/jamiebuilds/react-loadable

import React from "react";
import Loadable from "react-loadable";
import styled from "styled-components";

/* component rendered while the landing page is loaded */
const LoadingLanding = styled.div`
  background: salmon;
  height: 100%;
  width: 100%;
`;

export default Loadable({
  loader: () => import("./Landing"),
  loading: () => <LoadingLanding />,
});
