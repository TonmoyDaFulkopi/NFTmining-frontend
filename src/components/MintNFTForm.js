
'use client';

// src/components/MintNFTForm.js
import { useState } from 'react';

export default function MintNFTForm({ mintNFT }) {
    const [nftName, setNftName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    return (
        <div style={{
            backgroundColor: '#1F1F2F',
            padding: '20px',
            borderRadius: '10px',
            width: '80%',
            maxWidth: '600px',
            margin: 'auto',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}>
            <h2 style={{ color: '#fff' }}>Mint Your NFT</h2>
            <input
                type="text"
                value={nftName}
                onChange={(e) => setNftName(e.target.value)}
                placeholder="Enter NFT name"
                style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px' }}
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your NFT"
                style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px' }}
            />
            <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Enter image URL"
                style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '8px' }}
            />
            <button
                onClick={() => mintNFT(nftName, description, imageUrl)}
                style={{
                    backgroundColor: '#9B59B6',
                    color: '#fff',
                    padding: '12px 24px',
                    fontSize: '16px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    width: '100%',
                }}
            >
                Mint NFT
            </button>
        </div>
    );
}
