import React from 'react';
// import { Link } from "react-router-dom";
import * as s from "./styles/globalStyles";

export default function Navbar() {
    return (
      <s.ContainerNav
      style={{
        padding: 0,
      }}
    >
      {/* <Link to="/"><s.StyledClickable>Home</s.StyledClickable></Link>
      <s.SpacerSmall /> */}
      {/* <Link to="/mint"><s.StyledClickable>Mint</s.StyledClickable></Link>
      <s.SpacerSmall /> */}
      <a href="https://twitter.com/vampirestownwtf" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/twitter-logo-circle-white.png"></img></a>
      <s.SpacerSmall />
      <a href="https://etherscan.io/address/0x1e3a7efad7db1dc0451d92a9433424d96445080a" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/etherscan-logo-white.png"></img></a>
      <s.SpacerSmall />
      <a href="https://opensea.io/collection/vampirestownwtf" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/opensea-logo-white.png"></img></a>
      </s.ContainerNav>
    )
  }
