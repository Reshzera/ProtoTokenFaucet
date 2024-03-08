# ProtoToken Faucet

The ProtoToken Faucet is a web application designed to allow users to receive test tokens for development or testing purposes on blockchain environments. This application is divided into two main components: a backend, developed using Express and TypeScript, and a frontend, developed using React and TypeScript.

## Project Structure

The project is organized into two main folders:

- **Backend**: Contains all the necessary code to interact with the ProtoToken smart contract, mint tokens, and transfer them to users without requiring them to pay transaction fees.
- **Frontend**: A user interface built with React and TypeScript that allows users to easily interact with the faucet by providing their wallet addresses to receive tokens.

### Backend (Express + TypeScript)

The backend of the faucet utilizes Express and TypeScript to create an API that handles requests from the frontend. It directly interacts with the ProtoToken smart contract to mint tokens and transfer them to the user-provided wallet address.

#### Setup

To set up and run the backend, follow these steps:

1. Navigate to the `backend` folder.
2. Install dependencies using `yarn`.
3. Create a `.env` file in the root of the `backend` folder with the following variables:
   - `PORT`: The port on which the backend server will run.
   - `PRIVATE_KEY`: The private key of the wallet that owns the contract.
   - `PUBLIC_KEY`: The public key of the wallet that owns the contract.
   - `CONTRACT_ADDRESS`: The address of the ProtoToken contract.
   - `NODE_URL`: Your Infura or other node URL to access the blockchain network.
   - `FRONT_URL`: The URL of the frontend application.
4. Run the server using `yarn start`.

### Frontend (React + TypeScript)

The frontend provides a user-friendly interface for users to request tokens. It collects the user's wallet address and communicates with the backend to transfer the tokens.

#### Setup

To set up and run the frontend, follow these steps:

1. Navigate to the `frontend` folder.
2. Install dependencies using `yarn`.
3. Run the application using `yarn dev`.
4. The application will be accessible through a browser at `http://localhost:5173`.

## Contract Address

The ProtoToken smart contract is deployed on the Sepolia network and can be accessed at the following address: `0x7B2ebb6f23c112A54025c52c29F378a65b1A6e86`

To view the contract and its transactions, you can use the following link to Sepolia Etherscan:

[View Contract on Sepolia Etherscan](https://sepolia.etherscan.io/address/0x7B2ebb6f23c112A54025c52c29F378a65b1A6e86)

## Contributions

Contributions to the project are always welcome. If you would like to contribute, please create a pull request or open an issue for discussion.

---

This README serves as a basic introduction and setup guide for the ProtoToken Faucet. Ensure you follow the detailed setup instructions for each part of the project to ensure everything operates correctly.
