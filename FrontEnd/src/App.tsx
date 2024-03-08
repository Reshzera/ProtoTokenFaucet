import { GlobalStyle } from "./Globalstyles";
import Home from "./Pages/Home";
import MetaMaskProvider from "./contexts/MetaMask";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <MetaMaskProvider>
      <GlobalStyle />
      <Home />
      <ToastContainer />
    </MetaMaskProvider>
  );
}

export default App;
