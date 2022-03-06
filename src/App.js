import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { connect } from "./redux/blockchain/blockchainActions";
// import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
// import React from 'react';
// import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
// import { ListGroup,Container,Navbar,Nav,NavItem,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

// const truncate = (input, len) =>
  // input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLargeLogo = styled.img`
  width: 300px;
  @media (min-width: 767px) {
    width: 450px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 0px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 10%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const ProfileImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 0px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 10%;
  width: 150px;
  @media (min-width: 900px) {
    width: 150;
  }
  @media (min-width: 1000px) {
    width: 150;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

function App() {
  // const dispatch = useDispatch();
  // const blockchain = useSelector((state) => state.blockchain);
  // const data = useSelector((state) => state.data);
  // const [claimingNft, setClaimingNft] = useState(false);
  // const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  // const [mintAmount, setMintAmount] = useState(1);
  // const [CONFIG, SET_CONFIG] = useState({
    const [CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  // const claimNFTs = () => {
  //   let cost = CONFIG.WEI_COST;
  //   let gasLimit = CONFIG.GAS_LIMIT;
  //   let totalCostWei = String(cost * mintAmount);
  //   let totalGasLimit = String(gasLimit * mintAmount);
  //   console.log("Cost: ", totalCostWei);
  //   console.log("Gas limit: ", totalGasLimit);
  //   setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
  //   setClaimingNft(true);
  //   blockchain.smartContract.methods
  //     .safeMint(blockchain.account, mintAmount)
  //     .send({
  //       gasLimit: String(totalGasLimit),
  //       to: CONFIG.CONTRACT_ADDRESS,
  //       from: blockchain.account,
  //       value: totalCostWei,
  //     })
  //     .once("error", (err) => {
  //       console.log(err);
  //       setFeedback("Sorry, something went wrong please try again later.");
  //       setClaimingNft(false);
  //     })
  //     .then((receipt) => {
  //       console.log(receipt);
  //       setFeedback(
  //         `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
  //       );
  //       setClaimingNft(false);
  //       dispatch(fetchData(blockchain.account));
  //     });
  // };

  // const decrementMintAmount = () => {
  //   let newMintAmount = mintAmount - 1;
  //   if (newMintAmount < 1) {
  //     newMintAmount = 1;
  //   }
  //   setMintAmount(newMintAmount);
  // };

  // const incrementMintAmount = () => {
  //   let newMintAmount = mintAmount + 1;
  //   if (newMintAmount > 50) {
  //     newMintAmount = 50;
  //   }
  //   setMintAmount(newMintAmount);
  // };

  // const getData = () => {
  //   if (blockchain.account !== "" && blockchain.smartContract !== null) {
  //     dispatch(fetchData(blockchain.account));
  //   }
  // };

  // const getConfig = async () => {
  //   const configResponse = await fetch("/config/config.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   });
  //   const config = await configResponse.json();
  //   SET_CONFIG(config);
  // };

  // useEffect(() => {
  //   getConfig();
  // }, []);

  // useEffect(() => {
  //   getData();
  // }, [blockchain.account]);

  // For countdown timer
  const Completionist = () => <span>Mint is preparing to go live!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>Mint in {days} days {hours}h {minutes}m {seconds}s</span>;
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
        <s.SpacerSmall />
        <Link to="/comingsoon"><img alt="logo" width="28" heigth="28" src="/config/images/etherscan-logo-white.png"></img></Link>
        <s.SpacerSmall />
        <Link to="/comingsoon"><img alt="logo" width="28" heigth="28" src="/config/images/opensea-logo-white.png"></img></Link>
        <s.SpacerSmall />
        <a href="https://github.com/ethllamasnft" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/github-logo-white.png"></img></a>
        <s.SpacerSmall />
        {/* <a href="https://discord.gg/4z7thT8RSd" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/discord-logo-white.png"></img></a>
        <s.SpacerSmall /> */}
        <a href="https://twitter.com/ethllamas" target="_blank" rel="noopener noreferrer"><img alt="logo" width="28" heigth="28" src="/config/images/twitter-logo-circle-white.png"></img></a>
      </s.ContainerNav>
      <s.SpacerLarge />
      <s.SpacerLarge />
           
      {/* Top Logo */}
      <s.Container
        ai={"center"}
      >
        <a href={CONFIG.MARKETPLACE_LINK}>
          <StyledLogo alt={"logo"} src={"/config/images/logo.png"} />
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
          EthLlamas is an ERC-721 NFT collection of 10,000 unique llamas living on the Ethereum blockchain.
        </s.TextDescription>
        <s.SpacerLarge />
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
        <s.SpacerLarge />
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
            EthLlamas NFTs are 0.04 ETH each to mint + optimized gas, with a 20 mint limit.
          </s.TextDescription>
      </s.ContainerThin>
      <s.SpacerLarge />
          <s.Container flex={0} jc={"center"} ai={"center"}>
            <StyledImg
              alt={"EthLlamas"}
              src={"/config/images/ethllamas.gif"}
              border="0"
            />
          </s.Container>
      <s.SpacerLarge />
      <s.SpacerLarge />
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
            In giving back to the Open Source community, all code for the project will be made available on Github.
            <s.SpacerSmall />
            We hope this helps other artists and developers launch their projects or allows others to contribute to EthLlamas.
          </s.TextDescription>
          <s.SpacerSmall />
          <a href="https://github.com/ethllamasnft" target="_blank" rel="noopener noreferrer"><img alt="logo" width="50" heigth="50" src="/config/images/github-logo-white.png"></img></a>
          <s.SpacerLarge />
          <s.SpacerLarge />
          
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
          <s.SpacerMedium />
          <s.Container flex={0} jc={"center"} ai={"center"}>
            <ProfileImg
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
            Eric is a Site Reliability Engineer, software developer, and creator of EthLlamas.
          </s.TextDescription>
          <s.SpacerSmall />
          <a href="https://twitter.com/empulse_nft" target="_blank" rel="noopener noreferrer"><img alt="logo" width="50" heigth="50" src="/config/images/twitter-logo-circle-white.png"></img></a>
          <s.SpacerSmall />
          
      </s.ContainerThin>
      <s.SpacerLarge />
      <s.SpacerLarge />
        
        {/* <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg alt={"example"} src={"/config/images/ethllamas.gif"} />
          </s.Container>
          <s.SpacerLarge />
          <s.Container
              flex={2}
              jc={"center"}
              ai={"center"}
              style={{
                backgroundColor: "var(--accent)",
                padding: 24,
                borderRadius: 24,
                border: "4px dashed var(--secondary)",
                boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
              }}
            >
              <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              COMING SOON!
              </s.TextTitle>
              <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  New NFT collection of 10,000 unique llamas living on the Ethereum blockchain.
              </s.TextDescription>
              <a href="https://twitter.com/EthLlamas" target="_blank" rel="noopener noreferrer"><img src="/config/images/twitter.png"></img></a>
            </s.Container>
            <s.SpacerLarge />
            <s.Container flex={1} jc={"center"} ai={"center"}>
              <StyledImg
                alt={"example"}
                src={"/config/images/ethllamas.gif"}
                style={{ transform: "scaleX(-1)" }}
              />
            </s.Container>
        </ResponsiveWrapper> */}
        {/* <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg alt={"example"} src={"/config/images/ethllamas.gif"} />
          </s.Container>
          <s.SpacerLarge />
          <s.Container
              flex={2}
              jc={"center"}
              ai={"center"}
              style={{
                backgroundColor: "var(--accent)",
                padding: 24,
                borderRadius: 24,
                border: "4px dashed var(--secondary)",
                boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
              }}
            >
              <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  Countdown to Mint
              </s.TextTitle>
              <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
                <Countdown date='2022-03-01T10:00:00-06:00'>
                    <Completionist />
                  </Countdown>
              </s.TextTitle>
            </s.Container>
            <s.SpacerLarge />
            <s.Container flex={1} jc={"center"} ai={"center"}>
              <StyledImg
                alt={"example"}
                src={"/config/images/ethllamas.gif"}
                style={{ transform: "scaleX(-1)" }}
              />
            </s.Container>
        </ResponsiveWrapper> */}
        {/* <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg alt={"example"} src={"/config/images/ethllamas.gif"} />
          </s.Container>
          <s.SpacerLarge />
          <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            style={{
              backgroundColor: "var(--accent)",
              padding: 24,
              borderRadius: 24,
              border: "4px dashed var(--secondary)",
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
            }}
          >
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              {data.totalSupply} / {CONFIG.MAX_SUPPLY}
            </s.TextTitle>
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--primary-text)",
              }}
            >
              <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
              </StyledLink>
            </s.TextDescription>
            <span
              style={{
                textAlign: "center",
              }}
            >
              <StyledButton
                onClick={(e) => {
                  window.open("/config/roadmap.pdf", "_blank");
                }}
                style={{
                  margin: "5px",
                }}
              >
                Roadmap
              </StyledButton>
              <StyledButton
                style={{
                  margin: "5px",
                }}
                onClick={(e) => {
                  window.open(CONFIG.MARKETPLACE_LINK, "_blank");
                }}
              >
                {CONFIG.MARKETPLACE}
              </StyledButton>
            </span>
            <s.SpacerSmall />
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  The sale has ended.
                </s.TextTitle>
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  You can still find {CONFIG.NFT_NAME} on
                </s.TextDescription>
                <s.SpacerSmall />
                <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </StyledLink>
              </>
            ) : (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                  {CONFIG.NETWORK.SYMBOL}.
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  Excluding gas fees.
                </s.TextDescription>
                <s.SpacerSmall />
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT
                    </StyledButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        >
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      {feedback}
                    </s.TextDescription>
                    <s.SpacerMedium />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledRoundButton
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </StyledRoundButton>
                      <s.SpacerMedium />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {mintAmount}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <StyledRoundButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </StyledRoundButton>
                    </s.Container>
                    <s.SpacerSmall />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        {claimingNft ? "BUSY" : "BUY"}
                      </StyledButton>
                    </s.Container>
                  </>
                )}
              </>
            )}
            <s.SpacerMedium />
          </s.Container>
          <s.SpacerLarge />
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg
              alt={"example"}
              src={"/config/images/ethllamas.gif"}
              style={{ transform: "scaleX(-1)" }}
            />
          </s.Container>
        </ResponsiveWrapper> */}
        <s.SpacerMedium />
        <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--primary-text)",
            }}
          >
            Copyright © 2022 ethllamas.com
          </s.TextDescription>
        </s.Container>
        {/* <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--primary-text)",
            }}
          >
            Please make sure you are connected to the right network (
            {CONFIG.NETWORK.NAME} Mainnet) and the correct address. Please note:
            Once you make the purchase, you cannot undo this action.
          </s.TextDescription>
          <s.SpacerSmall />
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--primary-text)",
            }}
          >
            We have set the gas limit to {CONFIG.GAS_LIMIT} for the contract to
            successfully mint your NFT. We recommend that you don't lower the
            gas limit.
          </s.TextDescription>
        </s.Container> */}
      </s.Container>
    </s.Screen>
  );
}

export default App;
