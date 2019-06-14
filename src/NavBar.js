import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const NavBar = () => (
  <header
    css={css`
      background-color: #333;
    `}
  >
    <Link to="/">Adopt Me!</Link>
  </header>
);
export default NavBar;
