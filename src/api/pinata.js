import axios from 'axios';
import { PINATA_API_KEY, PINATA_SECRET_KEY } from '../config';

export const uploadImageToPinata = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post(
    'https://api.pinata.cloud/pinning/pinFileToIPFS',
    formData,
    {
      headers: {
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_KEY,
      },
    }
  );

  return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
};
