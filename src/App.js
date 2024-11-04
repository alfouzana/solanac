import React from "react";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { ConnectionProvider } from "@solana/web3.js";
import { NetworkConfigurationProvider } from "./contexts/NetworkConfigurationProvider";
import SolanaCreateToken from "./components/SolanaCreateToken";

const App = () => {
  return (
    <ConnectionProvider endpoint="https://api.devnet.solana.com">
      <WalletProvider>
        <NetworkConfigurationProvider>
          <div className="app">
            <SolanaCreateToken />
          </div>
        </NetworkConfigurationProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
