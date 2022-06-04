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
      {//<a href="https://discord.gg/4z7thT8RSd" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/discord-logo-white.png"></img></a>
      <s.SpacerSmall />}
      <a href="https://twitter.com/vampirestownwtf" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/twitter-logo-circle-white.png"></img></a>
      <s.SpacerSmall />
      {//<a href="https://github.com/ethllamasnft" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/github-logo-white.png"></img></a>
      //<s.SpacerSmall />}
      <a href="https://etherscan.io/address/0xae154ac27ed97e32f8ae1276a22f465cde3c3c45" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/etherscan-logo-white.png"></img></a>
      <s.SpacerSmall />
      <a href="https://opensea.io/collection/vampirestownwtf" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/opensea-logo-white.png"></img></a>
      </s.ContainerNav>
    )
  }
