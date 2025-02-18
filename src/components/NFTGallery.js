// src/components/NFTGallery.js
import React from 'react';

export default function NFTGallery({ nfts }) {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            marginTop: '40px',
        }}>
            {nfts.map((nft, index) => (
                <div key={index} style={{
                    width: '200px',
                    margin: '10px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                }}>
                    <img src={nft.logo} alt={nft.name} style={{
                        width: '100%',
                        height: 'auto',
                    }} />
                    <div style={{
                        padding: '10px',
                        backgroundColor: '#333',
                        color: '#fff',
                    }}>
                        <h3>{nft.name}</h3>
                        <p>{nft.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
