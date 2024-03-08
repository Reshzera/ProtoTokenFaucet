import React, { useContext } from "react";
import { MetaMaskContext } from "../../contexts/MetaMask";
import { MetaMaskButton } from "./styles";

// import { Container } from './styles';
interface ButtonMetaMaskProps {
  styles?: React.CSSProperties;
}

const ButtonMetaMask: React.FC<ButtonMetaMaskProps> = ({ styles }) => {
  const { account, connect, accountShort } = useContext(MetaMaskContext);

  return (
    <MetaMaskButton
      style={styles}
      onClick={() => {
        if (!account) {
          connect();
        }
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
        alt="Google"
      />
      <span>
        {!accountShort ? "Connect MetaMask" : `Connected to: ${accountShort}`}
      </span>
    </MetaMaskButton>
  );
};

export default ButtonMetaMask;
