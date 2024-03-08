import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InfoHomeSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  p {
    color: #fff;
    font-size: 20px;
    font-weight: 500;

    b {
      color: grey;
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

export const ProtoTokenImage = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-radius: 50%;
  margin-bottom: 32px;

  img {
    max-width: 100px;
    max-height: 100px;
    object-fit: contain;
  }
`;

export const MintButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  border-radius: 8px;
  background-color: #fff;

  margin-top: 32px;
  cursor: pointer;
  border: none;
  user-select: none;
  min-width: max-content;

  color: #000;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;

  img {
    max-width: 20px;
    max-height: 20px;
    object-fit: contain;
    margin-right: 8px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
