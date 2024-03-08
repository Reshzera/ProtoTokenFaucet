import React, { useCallback, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";
import ButtonMetaMask from "../../components/ButtonMetaMask";
import Header from "../../components/Header";
import { MetaMaskContext } from "../../contexts/MetaMask";
import {
  HomeContainer,
  InfoHomeSection,
  MintButton,
  ProtoTokenImage,
} from "./styles";

// import { Container } from './styles';

const Home: React.FC = () => {
  const { account, accountShort } = useContext(MetaMaskContext);
  const handleMint = useCallback(async () => {
    try {
      const res = await api.post(`/mint/${account}`);
      toast.success(
        "ProtoTokens minted successfully with tx: " + res.data.tractionHash
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      if (e.response) {
        toast.error(e.response.data.error);
        return;
      }
      toast.error("Error minting ProtoTokens");
    }
  }, [account]);

  // const protoTokenAddress = useProtoTokenContract();

  // const handleMint = useCallback(async () => {
  //   if (protoTokenAddress) {
  //     try {
  //       await protoTokenAddress.methods.mint().send();
  //       toast.success("ProtoTokens minted successfully");
  //     } catch (error) {
  //       toast.error("Error minting ProtoTokens");
  //       console.error(error);
  //     }
  //   }
  // }, [protoTokenAddress]);

  return (
    <HomeContainer>
      <Header />
      <ProtoTokenImage>
        <img
          src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029"
          alt="Google"
        />
      </ProtoTokenImage>
      {!account && (
        <InfoHomeSection>
          <p>
            Welcome to the Faucet dApp, where you can get some ProtoTokens for
            free!
          </p>
          <p>
            To get some ProtoTokens, you need to connect your MetaMask wallet
            and click on the button below.
          </p>
          <ButtonMetaMask
            styles={{
              marginTop: "32px",
            }}
          />
        </InfoHomeSection>
      )}

      {account && (
        <InfoHomeSection>
          <p>
            You are connected to MetaMask with the{" "}
            <b>account: {accountShort}</b>
          </p>
          <p>To get some ProtoTokens, you need to click on the button below.</p>
          <MintButton onClick={handleMint}>
            <span>Mint ProtoTokens</span>
          </MintButton>
        </InfoHomeSection>
      )}
    </HomeContainer>
  );
};

export default Home;
