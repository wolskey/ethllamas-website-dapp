import React from 'react';
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

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
        <Navbar />
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
        <s.SpacerLarge />
        <s.SpacerLarge />

        {/* Footer */}
        <s.SpacerMedium />
        <Footer />

        </s.Container>
      </s.Screen>
    );
  }