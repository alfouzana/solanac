import React, { createContext, useContext } from "react";

const NetworkConfigurationContext = createContext();

export const NetworkConfigurationProvider = ({ children }) => {
  const networkConfiguration = "https://api.devnet.solana.com"; // Change to mainnet for production

  return (
    <NetworkConfigurationContext.Provider value={{ networkConfiguration }}>
      {children}
    </NetworkConfigurationContext.Provider>
  );
};

export const useNetworkConfiguration = () => useContext(NetworkConfigurationContext);
