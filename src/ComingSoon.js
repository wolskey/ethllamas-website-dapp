import React from 'react';
import * as s from "./styles/globalStyles";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export default function ComingSoon() {
    return (
      <s.Screen>
        <s.Container
            flex={1}
            ai={"center"}
            style={{ padding: 24, backgroundColor: "var(--primary)" }}
            image="/config/images/bg.png"
        >

        {/* NavBar */}          
        <s.ContainerNav
            style={{
            padding: 0,
            }}
        >
        <s.StyledClickable>
            <Link to="/">Home</Link>
        </s.StyledClickable>
        <s.SpacerSmall />
        <Link to="/comingsoon"><img alt="logo" width="28" heigth="28" src="/config/images/etherscan-logo-white.png"></img></Link>
        <s.SpacerSmall />
        <Link to="/comingsoon"><img alt="logo" width="28" heigth="28" src="/config/images/opensea-logo-white.png"></img></Link>
        <s.SpacerSmall />
        <a href="https://github.com/ethllamasnft" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/github-logo-white.png"></img></a>
        <s.SpacerSmall />
        {/* <a href="https://discord.gg/4z7thT8RSd" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/discord-logo-white.png"></img></a>
        <s.SpacerSmall /> */}
        <a href="https://twitter.com/EthLlamasNFT" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/twitter-logo-circle-white.png"></img></a>
        </s.ContainerNav>
        <s.SpacerLarge />
        <s.SpacerLarge />

        <s.Container
            ai={"center"}
        >
        <StyledLogo alt={"logo"} src={"/config/images/logo.png"} />
        </s.Container>
        <s.SpacerSmall />

        <s.TextTitle
          style={{
            textAlign: "center",
            fontSize: 50,
            color: "var(--primary-text)",
          }}
        >
          Coming Soon!
        </s.TextTitle>

        </s.Container>
      </s.Screen>
    );
  }