import styled from "styled-components";

export const MetaMaskButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  border-radius: 8px;
  background-color: #fff;

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
