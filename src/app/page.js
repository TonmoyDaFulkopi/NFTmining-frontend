'use client';

// src/app/page.js
import Header from '../components/Header';
import MintNFTForm from '../components/MintNFTForm';
import NFTGallery from '../components/NFTGallery';
import { useState } from 'react';

export default function Home() {
  const [nfts, setNfts] = useState([]);

  const mintNFT = (name, description, imageUrl) => {
    // Mint the NFT (add logic for minting here)
    // Add the minted NFT to the gallery
    const newNFT = {
      name,
      description,
      logo: imageUrl,
    };
    setNfts([...nfts, newNFT]);
  };

  return (
    <div style={{ backgroundColor: '#0A0B1D', color: '#fff', minHeight: '100vh' }}>
      <Header />
      <MintNFTForm mintNFT={mintNFT} />
      <NFTGallery nfts={nfts} />
    </div>
  );
}
