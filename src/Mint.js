import React, { useEffect, useState } from "react";
import * as s from "./styles/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/data/dataActions";
import { connect } from "./redux/blockchain/blockchainActions";
import Footer from "./Footer";
import Navbar from "./Navbar";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

function Mint() {

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

    // set wei cost
    let payableAmount = data.totalSupply < 3000 ? 0 : 5000000000000000;
    // let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(payableAmount * mintAmount);
    let totalGasLimit = String(gasLimit);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
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

  let payableAmountText = data.totalSupply > 3000 ? 0 : 0.005;

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
        {/* Mint */}
        <s.ContainerThin
            flex={0}
            jc={"center"}
            ai={"center"}
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
                alt={"Vampirestown.wtf"}
                src={"/config/images/example.gif"}
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
                    1 {CONFIG.SYMBOL} costs {payableAmountText}{" "}
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
        {/* Footer */}
        <Footer />
      </s.Container>
    </s.Screen>
  );
}

export default Mint;
