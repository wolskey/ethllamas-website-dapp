import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Countdown from 'react-countdown';
import * as s from "./styles/globalStyles";

function App() {
  
  const [CONFIG] = useState({
    SHOW_BACKGROUND: false,
  });

  // For countdown timer
  const Completionist = () => <span>Mint is preparing to go live!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>Mint starts in {days} days {hours}h {minutes}m {seconds}s</span>;
    }
  };

  return (
    <s.Screen>
      <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 24, backgroundColor: "var(--primary)" }}
        image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
      >

        {/* NavBar */}          
        <s.ContainerNav
          style={{
            padding: 0,
          }}
        >
          <s.StyledClickable>
              Home
          </s.StyledClickable>
          {/* <s.SpacerSmall />
          <Link to="/mint"><s.StyledClickable>Mint</s.StyledClickable></Link> */}
          <s.SpacerSmall />
          <a href="https://discord.gg/4z7thT8RSd" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/discord-logo-white.png"></img></a>
          <s.SpacerSmall />
          <a href="https://twitter.com/EthLlamas_NFT" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/twitter-logo-circle-white.png"></img></a>
          <s.SpacerSmall />
          <a href="https://github.com/ethllamasnft" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/github-logo-white.png"></img></a>
          <s.SpacerSmall />
          <a href="https://etherscan.io/address/0x10e57Bd2F8627e2D95090Fb89F7D38714d110984" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/etherscan-logo-white.png"></img></a>
          <s.SpacerSmall />
          <a href="https://opensea.io/collection/ethllamas" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/opensea-logo-white.png"></img></a>
        </s.ContainerNav>
        <s.SpacerLarge />
        <s.SpacerLarge />
            
        {/* Top Logo */}
        <s.Container
          ai={"center"}
        >
          <a href={CONFIG.MARKETPLACE_LINK}>
            <s.StyledLogo alt={"logo"} src={"/config/images/logo.png"} />
          </a>
        </s.Container>
        <s.SpacerSmall />

        {/* Welcome */}
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
            Welcome to EthLlamas
          </s.TextTitle>
          <s.SpacerSmall />
          <s.TextDescription
            style={{ textAlign: "center", color: "var(--primary-text)" }}
          >
            EthLlamas is an ERC-721 NFT collection of 10,000 unique llamas on the Ethereum blockchain. Our mission is to provide a fun and low cost entry into NFTs.
          </s.TextDescription>
          <s.SpacerLarge />
          <s.ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
            <s.Container
              flex={2}
              jc={"center"}
              ai={"center"}
              style={{
                backgroundColor: "var(--accent)",
                padding: 24,
                borderRadius: 24,
                border: "0px solid var(--secondary)",
                boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
              }}
            >
              <s.TextTitle
                style={{
                  textAlign: "center",
                  fontSize: 40,
                  color: "var(--secondary-text)",
                }}
              >
                <Countdown
                  date='2022-03-26T11:00:00-06:00'
                  renderer={renderer}
                />
              </s.TextTitle>
            </s.Container>
          </s.ResponsiveWrapper>
        </s.ContainerThin>
        <s.SpacerLarge />
        <s.SpacerLarge />

        {/* How Much */}
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
              fontWeight: "bold",
              color: "var(--primary-text)",
            }}
          >
            Mint Price
            </s.TextTitle>
            <s.SpacerSmall />
            <s.TextDescription
              style={{ textAlign: "center", color: "var(--primary-text)" }}
            >
              EthLlamas are 0.02 ETH each to mint + optimized gas, with a 20 mint limit.
            </s.TextDescription>
        </s.ContainerThin>
        <s.SpacerLarge />
        <s.Container flex={0} jc={"center"} ai={"center"}>
          <s.StyledImg
            alt={"EthLlamas"}
            src={"/config/images/ethllamas.gif"}
            border="0"
            style={{
              backgroundColor: "var(--accent)",
              borderRadius: 24,
              border: "0px solid var(--secondary)",
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
            }}
          />
        </s.Container>
        <s.SpacerLarge />
        <s.SpacerLarge />

        {/* Roadmap */}
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
              fontWeight: "bold",
              color: "var(--primary-text)",
            }}
          >
            Roadmap
            </s.TextTitle>
            <s.SpacerSmall />
            <s.ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
              <s.Container
                  flex={2}
                  jc={"center"}
                  ai={"center"}
                  style={{
                    backgroundColor: "var(--accent)",
                    padding: 24,
                    borderRadius: 24,
                    border: "0px solid var(--secondary)",
                    boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
                  }}
                >
                  <s.TextTitle>
                  Phase 1
                  </s.TextTitle>
                  <s.TextDescription
                      style={{ textAlign: "center" }}
                    >
                      Smart contract audit by third party. Publish all code on Github. Promote on Twitter, Instagram, and Reddit.
                  </s.TextDescription>
                </s.Container>
            </s.ResponsiveWrapper>
            <s.SpacerMedium />
            <s.ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
              <s.Container
                  flex={2}
                  jc={"center"}
                  ai={"center"}
                  style={{
                    backgroundColor: "var(--accent)",
                    padding: 24,
                    borderRadius: 24,
                    border: "0px solid var(--secondary)",
                    boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
                  }}
                >
                  <s.TextTitle>
                  Phase 2
                  </s.TextTitle>
                  <s.TextDescription style={{ textAlign: "center" }} >
                      Mint starts 3/26/2022
                  </s.TextDescription>
                  <s.TextDescription style={{ textAlign: "center" }} >
                    150 EthLlamas set aside for giveaways and promotions.
                  </s.TextDescription>
                </s.Container>
            </s.ResponsiveWrapper>
            <s.SpacerMedium />
            <s.ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
              <s.Container
                  flex={2}
                  jc={"center"}
                  ai={"center"}
                  style={{
                    backgroundColor: "var(--accent)",
                    padding: 24,
                    borderRadius: 24,
                    border: "0px solid var(--secondary)",
                    boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
                  }}
                >
                  <s.TextTitle>
                    Phase 3
                  </s.TextTitle>
                  <s.TextDescription
                      style={{ textAlign: "center" }}
                    >
                      30 ETH donation to American Cancer Society at 50% minted.
                  </s.TextDescription>
                </s.Container>
            </s.ResponsiveWrapper>
            <s.SpacerMedium />
            <s.ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
              <s.Container
                  flex={2}
                  jc={"center"}
                  ai={"center"}
                  style={{
                    backgroundColor: "var(--accent)",
                    padding: 24,
                    borderRadius: 24,
                    border: "0px solid var(--secondary)",
                    boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
                  }}
                >
                  <s.TextTitle>
                  Phase 4
                  </s.TextTitle>
                  <s.TextDescription
                      style={{ textAlign: "center" }}
                    >
                      Another 30 ETH donation will be made to a charity of the community's choosing at 100% minted.
                  </s.TextDescription>
                </s.Container>
            </s.ResponsiveWrapper>
            
        </s.ContainerThin>
        <s.SpacerLarge />
        <s.SpacerLarge />

        {/* The Team */}
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
              fontWeight: "bold",
              color: "var(--primary-text)",
            }}
          >
            The Team
            </s.TextTitle>
            <s.SpacerSmall />
            <s.Container flex={0} jc={"center"} ai={"center"}>
              <s.ProfileImg
                alt={"Empulse Twitter"}
                src={"/config/images/punk15785.png"}
                border="0"
              />
            </s.Container>
            <s.SpacerSmall />
            <s.TextSubTitle
              style={{ textAlign: "center", color: "var(--primary-text)" }}
            >
              @Empulse_NFT
            </s.TextSubTitle>
            <s.TextDescription
              style={{ textAlign: "center", color: "var(--primary-text)" }}
            >
              Eric is a Site Reliability Engineer, Software Engineer, and creator of EthLlamas.
            </s.TextDescription>
            <s.SpacerXSmall />
            <s.Container
              style={{ justifyContent: "center", flexDirection: "row" }}
            >
              <a href="https://twitter.com/empulse_nft" target="_blank" rel="noopener noreferrer"><img alt="logo" width="50" heigth="50" src="/config/images/twitter-logo-circle-white.png"></img></a>
              <s.SpacerSmall />
              <a href="http://linkedin.com/in/rackeric" target="_blank" rel="noopener noreferrer"><img alt="logo" width="50" heigth="50" src="/config/images/linkedin-logo-white.png"></img></a>
            </s.Container>
            
        </s.ContainerThin>
        <s.SpacerLarge />
        <s.SpacerLarge />

        {/* Open Source */}
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
            fontWeight: "bold",
            color: "var(--primary-text)",
          }}
        >
          Open Source
          </s.TextTitle>
          <s.SpacerSmall />
          <s.TextDescription
            style={{ textAlign: "center", color: "var(--primary-text)" }}
          >
            In giving back to the Open Source community, all code for the project is made available on Github.
          </s.TextDescription>
          <s.SpacerSmall />
          <s.TextDescription
            style={{ textAlign: "center", color: "var(--primary-text)" }}
          >
            We hope this helps other artists and developers launch their projects or allows others to contribute to EthLlamas.
          </s.TextDescription>
          <s.SpacerSmall />
          <a href="https://github.com/ethllamasnft" target="_blank" rel="noopener noreferrer"><img alt="logo" width="50" heigth="50" src="/config/images/github-logo-white.png"></img></a>
          
        </s.ContainerThin>
        <s.SpacerLarge />
        <s.SpacerLarge />

        {/* Footer */}
        <s.SpacerMedium />
        <s.Container jc={"center"} ai={"center"} style={{ flexDirection: "row", width: "70%" }}>
          <s.TextFooter style={{ textAlign: "center", color: "var(--primary-text)"}}
          >
            EthLlamas 2022 - <a href="/license" style={{ color: "var(--primary-text)"}}>License</a> - <a href="ETHLLAMAS_Audit_Passed.pdf" style={{ color: "var(--primary-text)"}}>Audit</a>
          </s.TextFooter>
        </s.Container>

      </s.Container>
    </s.Screen>
  );
}

export default App;
