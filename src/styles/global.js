import { injectGlobal } from "styled-components";

import { media } from "./mixins";

/*
  use the component based API for global styling when it is done
  https://github.com/styled-components/styled-components/issues/1333
 */

injectGlobal`
  html,
  body,
  #root {
    @import url('https://fonts.googleapis.com/css?family=Nunito|Lato');
    margin: 0;
    height: 100vh;
    width: 100%;
    font-family: sans-serif;
    font-size: 20px;
    line-height: 1.5rem;

    ${media.xxl`
      font-size: 18px;
    `}

    ${media.xl`
      font-size: 16px;
      height: 100vh;
    `}

    ${media.xs`
      font-size: 14px;
    `}
  }
  .grid-container {
    display: grid;
    grid-auto-flow: row dense;
    grid-row-gap: 4px;
    grid-template-columns: 1fr 1fr;
    background-color: #001D4A;
    padding: 10px;
  }
  
  .grid-item {
    background-color: #27476E;
    color: #EAF8BF;
    border: 1px solid #006992;
    padding: 5px;
    font-size: 14px;
    text-align: justify;
    margin: 0px 4px 0px 0px;
  }
  
  a {
    color: #FF7F11;
    font-size: 18px;
  }
  
  .repo-title {
    display: inline;
  }
  
  .repo-stars {
    display: inline;
    float: right;
  }
  
  .right-margin {
    margin-right: 5px;
  }
  
  .first-half {
    grid-column-start: 1;
  }
  
  .second-half {
    grid-column-start: 2;
  }
  
  .repo-rank {
    display: inline;
    margin-right: 5px;
    padding: 0px 2px 0px 2px;
    font-weight: bolder;
  }
  
  .avatar-img {
    border-radius: 4px;
    border: 1px solid white;
    margin-top: 5px;
    margin-bottom: -4px;
  }
  
  .yellow-link {
    color: #EAF8BF;
    font-size: 14px;
    margin-left: 5px;
  }
`;
