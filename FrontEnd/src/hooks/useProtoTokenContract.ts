import { useContext, useEffect, useState } from "react";
import { Contract } from "web3";
import protoTokenAbi from "../../ABI/ProtoTokenABI.json";
import { MetaMaskContext } from "../contexts/MetaMask";

type AbiType = typeof protoTokenAbi;

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

export const useProtoTokenContract = () => {
  const { account, web3 } = useContext(MetaMaskContext);
  const [contract, setContract] = useState<Contract<AbiType> | undefined>();

  useEffect(() => {
    if (account) {
      const protoTokenContract = new web3.eth.Contract(
        protoTokenAbi,
        contractAddress,
        {
          from: account,
        }
      );
      setContract(protoTokenContract);
    }
  }, [account, web3]);

  return contract;
};
