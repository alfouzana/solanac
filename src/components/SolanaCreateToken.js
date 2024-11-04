import React, { useState, useEffect, useCallback } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { Keypair, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID, createInitializeMintInstruction, getMinimumBalanceForRentExemptMint, getAssociatedTokenAddress, createMintToInstruction, createAssociatedTokenAccountInstruction } from "@solana/spl-token";
import { createCreateMetadataAccountV3Instruction, PROGRAM_ID } from "@metaplex-foundation/mpl-token-metadata";
import { uploadImageToPinata } from "../api/pinata";
import toast from "react-hot-toast";
import Input from "./Input";

const SolanaCreateToken = ({ setLoader }) => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [token, setToken] = useState({ name: "", symbol: "", supply: "", decimals: "", image: "" });
  const [tokenMintAddress, setTokenMintAddress] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const imgUrl = await uploadImageToPinata(file);
    setToken({ ...token, image: imgUrl });
  };

  const createToken = useCallback(async () => {
    // Implement token creation logic here using provided Solana and wallet data
  }, [wallet, connection]);

  return (
    <div className="token-creator">
      {/* Token creation form UI */}
      <Input placeholder="Name" handleChange={(e) => setToken({ ...token, name: e.target.value })} />
      <Input placeholder="Symbol" handleChange={(e) => setToken({ ...token, symbol: e.target.value })} />
      <Input placeholder="Supply" handleChange={(e) => setToken({ ...token, supply: e.target.value })} />
      <Input placeholder="Decimals" handleChange={(e) => setToken({ ...token, decimals: e.target.value })} />
      <input type="file" onChange={handleImageUpload} />
      <button onClick={createToken}>Create Token</button>
    </div>
  );
};

export default SolanaCreateToken;
