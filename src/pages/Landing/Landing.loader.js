// split the bundle on a page level to limit the size of the initial load
// https://github.com/jamiebuilds/react-loadable

import React from "react";
import Loadable from "react-loadable";

/* component rendered while the landing page is loaded */

export default Loadable({
  loader: () => import("./Landing"),
  loading: () => <LoadingLanding />,
});
