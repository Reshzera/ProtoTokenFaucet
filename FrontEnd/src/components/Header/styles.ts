import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
  gap: 16px;
  flex-wrap: wrap;
  position: fixed;
  padding: 16px;
  top: 0;
  left: 0;
  right: 0;
`;

export const ProtoTokenLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 50%;
  background-color: #fff;

  img {
    max-width: 20px;
    max-height: 20px;
    object-fit: contain;
  }
`;

export const ProtoTokenLogoContainer = styled.div`
  display: flex;
  align-items: center;
  user-select: none;

  label {
    color: #fff;
    margin-left: 8px;
    font-size: 14px;
    font-weight: 300;
    font-family: "Inter", sans-serif;
  }
`;
