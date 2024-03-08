import React from "react";
import {
  HeaderContainer,
  ProtoTokenLogo,
  ProtoTokenLogoContainer,
} from "./styles";
import ButtonMetaMask from "../ButtonMetaMask";

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ProtoTokenLogoContainer>
        <ProtoTokenLogo>
          <img
            src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029"
            alt="Google"
          />
        </ProtoTokenLogo>
        <label>ProtoToken</label>
      </ProtoTokenLogoContainer>
      <ButtonMetaMask />
    </HeaderContainer>
  );
};

export default Header;
