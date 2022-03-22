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

export default function License() {
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
        <Link to="/"><s.StyledClickable>Home</s.StyledClickable></Link>
        {/* <s.SpacerSmall />
        <Link to="/mint"><s.StyledClickable>Mint</s.StyledClickable></Link> */}
        <s.SpacerSmall />
        <a href="https://etherscan.io/address/0x10e57Bd2F8627e2D95090Fb89F7D38714d110984" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/etherscan-logo-white.png"></img></a>
        <s.SpacerSmall />
        <Link to="/comingsoon"><img alt="logo" width="28" heigth="28" src="/config/images/opensea-logo-white.png"></img></Link>
        <s.SpacerSmall />
        <a href="https://github.com/ethllamasnft" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/github-logo-white.png"></img></a>
        <s.SpacerSmall />
        {/* <a href="https://discord.gg/4z7thT8RSd" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/discord-logo-white.png"></img></a>
        <s.SpacerSmall /> */}
        <a href="https://twitter.com/EthLlamas_NFT" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/twitter-logo-circle-white.png"></img></a>
        </s.ContainerNav>
        <s.SpacerLarge />
        <s.SpacerLarge />

        <s.ContainerThin
          flex={0}
          jc={"center"}
          ai={"center"}
          style={{
            backgroundColor: "var(--primary)",
          }}
        >
          <s.TextTitle
            style={{
              textAlign: "center",
              fontSize: 50,
              color: "var(--primary-text)",
            }}
          >
            NFT License
          </s.TextTitle>
          
          <s.TextDescription
            style={{ color: "var(--primary-text)" }}
          >
            1. The Copyright Owner of the Works remains the copyright owner. The Grantee is not receiving ownership of the Works but is receiving certain limited rights in the Works as set forth herein.
          </s.TextDescription>
          <s.TextDescription
            style={{ color: "var(--primary-text)" }}
          >
            2. Upon confirming the NFT on the blockchain, Buyer becomes the Grantee and immediately receives a worldwide, non-exclusive, transferable license to the Works as set forth herein, for the period the Grantee owns the NFT. 
          </s.TextDescription>
          <s.TextDescription
            style={{ color: "var(--primary-text)" }}
          >
            3. Grantee is granted the right to use, copy and display the Works.
          </s.TextDescription>
          <s.TextDescription
            style={{ color: "var(--primary-text)" }}
          >
            4. Grantee may not modify the works, create derivative works, transform the works or perform the Works.
          </s.TextDescription>
          <s.TextDescription
            style={{ color: "var(--primary-text)" }}
          >
            5. Grantee MAY NOT make commercial use of the Works, except to resell or transfer some or all the rights granted herein.
          </s.TextDescription>
          <s.TextDescription
            style={{ color: "var(--primary-text)" }}
          >
            6. Grantee MAY NOT use the Works in any way which associates the Works with hatred, intolerance, violence, cruelty, or otherwise infringes upon the rights of others.
          </s.TextDescription>
          <s.TextDescription
            style={{ color: "var(--primary-text)" }}
          >
            7. Any exercise of right granted hereunder requires attribution to the Copyright Owner and the Creator if they are listed in the NFT sale, where reasonably possible.
          </s.TextDescription>
          <s.TextDescription
            style={{ color: "var(--primary-text)" }}
          >
            8. Grantee shall not challenge Licensor’s copyright ownership of the Works.
          </s.TextDescription>
          <s.TextDescription
            style={{ color: "var(--primary-text)" }}
          >
            9. The NFT Seller warrants they are authorized to license the Works and consistent with these terms.
          </s.TextDescription>
          <s.TextDescription
            style={{ color: "var(--primary-text)" }}
          >
            10. Grantee may contact the Grantor if Grantee wishes to obtain rights not otherwise included herein. Any further grant of rights shall be in writing and evidenced by a further NFT, or signed documents, agreed to by all parties.
          </s.TextDescription>
          <s.TextDescription
            style={{ color: "var(--primary-text)" }}
          >
            11. This License only addresses the rights to the Works attached to the NFT transaction, not the NFT itself. There may be additional terms on the NFT listing page. To the extent there is a direct conflict, the NFT sale/listing page shall control.
          </s.TextDescription>
          <s.TextDescription
            style={{ color: "var(--primary-text)" }}
          >
            12. To determine which version of this license applies to your transaction, compare the timestamp of the NFT to the version date and time of this page.
          </s.TextDescription>
        </s.ContainerThin>
        <s.SpacerLarge />
        <s.SpacerLarge />

        <s.SpacerMedium />
        {/* Footer */}
        <s.SpacerMedium />
        <s.Container jc={"center"} ai={"center"} style={{ flexDirection: "row", width: "70%" }}>
          <s.TextFooter style={{ textAlign: "center", color: "var(--primary-text)"}}
          >
            EthLlamas 2022 - <a href="/license" style={{ color: "var(--primary-text)"}}>License</a>
          </s.TextFooter>
        </s.Container>

        </s.Container>
      </s.Screen>
    );
  }