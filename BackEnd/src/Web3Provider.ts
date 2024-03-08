import Web3 from "web3";
import dotenv from "dotenv";
import ABI from "./../ABI/ProtoTokenABI.json";
dotenv.config();
const blockchainNode = process.env.NODE_URL;
const ownerPrivateKey = process.env.PRIVATE_KEY;
const contractAddress = process.env.CONTRACT_ADDRESS;

const web3 = new Web3(blockchainNode);
web3.eth.handleRevert = true;

const ownerAccount = web3.eth.accounts.privateKeyToAccount(
  `0x${ownerPrivateKey}`,
);
web3.eth.accounts.wallet.add(ownerAccount);

export async function mintAndTransfer(wallet: string): Promise<string> {
  const contract = new web3.eth.Contract(ABI, contractAddress, {
    from: ownerAccount.address,
  });

  const tx = await contract.methods.mint(wallet).send();

  return tx.transactionHash;
}
