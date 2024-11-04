import React from "react";
import ReactDOM from "react-dom";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { ConnectionProvider } from "@solana/web3.js";
import '../public/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <ConnectionProvider endpoint="https://api.devnet.solana.com">
      <WalletProvider>
        <App />
      </WalletProvider>
    </ConnectionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
