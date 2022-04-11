import React, { useEffect, useState } from "react";
import * as s from "./styles/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/data/dataActions";
import { connect } from "./redux/blockchain/blockchainActions";
import Footer from "./Footer";
import Navbar from "./Navbar";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

function App() {

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
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

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .safeMint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `Congratulations, the ${CONFIG.NFT_NAME} is yours! Go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 50) {
      newMintAmount = 50;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockchain.account]);

  return (
    <s.Screen>
      <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 24, backgroundColor: "var(--primary)" }}
        image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
      >

        {/* NavBar */}          
        <Navbar />
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
        </s.ContainerThin>
        <s.SpacerLarge />
        <s.SpacerLarge />

        {/* Mint */}
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
            Mint
            </s.TextTitle>
        </s.ContainerThin>
        

        {/* Mint Section */}
        <s.Container>
          <s.ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
            <s.SpacerLarge />
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
                <s.StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                  {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                </s.StyledLink>
              </s.TextDescription>
              
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
                  <s.StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                    {CONFIG.MARKETPLACE}
                  </s.StyledLink>
                </>
              ) : (
                <>
                  <s.TextTitle
                    style={{ textAlign: "center", color: "var(--accent-text)" }}
                  >
                    1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                    {CONFIG.NETWORK.SYMBOL}
                  </s.TextTitle>
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
                      <s.StyledButton
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(connect());
                          getData();
                        }}
                      >
                        CONNECT
                      </s.StyledButton>
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
                        <s.StyledRoundButton
                          style={{ lineHeight: 0.4 }}
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            decrementMintAmount();
                          }}
                        >
                          -
                        </s.StyledRoundButton>
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
                        <s.StyledRoundButton
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            incrementMintAmount();
                          }}
                        >
                          +
                        </s.StyledRoundButton>
                      </s.Container>
                      <s.SpacerSmall />
                      <s.Container ai={"center"} jc={"center"} fd={"row"}>
                        <s.StyledButton
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            claimNFTs();
                            getData();
                          }}
                        >
                          {claimingNft ? "BUSY" : "BUY"}
                        </s.StyledButton>
                      </s.Container>
                    </>
                  )}
                </>
              )}
              <s.SpacerMedium />
              
              {/* Mint Tips */}
              <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
                <s.TextDescription
                  style={{
                    textAlign: "center",
                    color: "var(--primary-text)",
                    fontSize: 13,
                  }}
                >
                  Metamask is the recommended crypto wallet. Other wallets can use internal web browsers on their mobile app.
                </s.TextDescription>
              </s.Container>


            </s.Container>

            <s.SpacerLarge />
            <s.SpacerLarge />
            
          </s.ResponsiveWrapper>
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
                      Smart contract audit by third party. Publish code on Github. Promote on social media.
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
                    Phase 3 - Updated
                  </s.TextTitle>
                  <s.TextDescription
                      style={{ textAlign: "center" }}
                    >
                      Free mint for first 5k EthLlamas.
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
                  Phase 4 - Updated
                  </s.TextTitle>
                  <s.TextDescription
                      style={{ textAlign: "center" }}
                    >
                      50% of all mint earnings will be donated to the American Cancer Society.
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
            All code for the project is made available on Github.
          </s.TextDescription>
          <s.SpacerSmall />
          <s.TextDescription
            style={{ textAlign: "center", color: "var(--primary-text)" }}
          >
            We hope this helps other creators launch their projects.
          </s.TextDescription>
          <s.SpacerSmall />
          <a href="https://github.com/ethllamasnft" target="_blank" rel="noopener noreferrer"><img alt="logo" width="50" heigth="50" src="/config/images/github-logo-white.png"></img></a>
          
        </s.ContainerThin>
        <s.SpacerLarge />
        <s.SpacerLarge />

      </s.Container>
      
      <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 0, backgroundColor: "var(--primary)" }}
      >
        {/* Footer */}
        <Footer />
      </s.Container>
    </s.Screen>
  );
}

export default App;
