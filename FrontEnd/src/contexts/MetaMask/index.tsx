import { createContext, useCallback, useMemo, useState } from "react";
import React from "react";
import Web3 from "web3";

type MetaMaskContextType = {
  account: string;
  accountShort: string;
  connect: () => void;
  web3: Web3;
};

type MetaMaskProviderProps = {
  children: React.ReactNode;
};

const initialState: MetaMaskContextType = {
  connect: () => {},
  account: "",
  accountShort: "",
  web3: new Web3(Web3.givenProvider),
};
export const MetaMaskContext = createContext(initialState);

const MetaMaskProvider: React.FC<MetaMaskProviderProps> = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState<string>("");

  const web3 = useMemo(() => {
    if (window.ethereum) {
      return new Web3(window.ethereum);
    }
    return new Web3(Web3.givenProvider);
  }, []);

  const connect = useCallback(async () => {
    if (window.ethereum) {
      await web3.eth.requestAccounts();

      const accounts = await web3.eth.getAccounts();

      setConnectedAccount(accounts[0]);
    }
  }, [web3]);
  const accountShort = useMemo(() => {
    if (connectedAccount) {
      return `${connectedAccount.substring(
        0,
        6
      )}...${connectedAccount.substring(
        connectedAccount.length - 4,
        connectedAccount.length
      )}`;
    }
    return "";
  }, [connectedAccount]);

  return (
    <MetaMaskContext.Provider
      value={{
        account: connectedAccount,
        connect,
        accountShort,
        web3,
      }}
    >
      {children}
    </MetaMaskContext.Provider>
  );
};

export default MetaMaskProvider;
