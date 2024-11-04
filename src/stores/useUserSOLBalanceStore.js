import { useState, useEffect } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const useUserSOLBalanceStore = (publicKey, connection) => {
  const [balance, setBalance] = useState(0);

  const getUserSOLBalance = async (publicKey) => {
    if (publicKey) {
      const balance = await connection.getBalance(publicKey);
      setBalance(balance / LAMPORTS_PER_SOL);
    }
  };

  useEffect(() => {
    if (publicKey) {
      getUserSOLBalance(publicKey);
    }
  }, [publicKey, connection]);

  return { balance, getUserSOLBalance };
};

export default useUserSOLBalanceStore;
