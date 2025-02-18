'use client';

import { useState } from 'react';
import { useAccount, useWriteContract, useReadContract } from 'wagmi';
import { sepolia } from 'viem/chains';
import nftAbi from '../utils/nft_abi.json';

const mintContractAddress = '0x743f49311a82fe72eb474c44e78da2a6e0ae951c';

export default function MintNFT() {
    const { address } = useAccount();
    const [minting, setMinting] = useState(false);

    const tokenId = Math.floor(Math.random() * 1000);
    const metadataUrl = `https://nftmining-cytric.onrender.com/api/nft/get/${tokenId}`; // Using Render URL

    // Use useReadContract to check if the tokenId exists
    const { data: idExists } = useReadContract({
        address: mintContractAddress,
        abi: nftAbi,
        functionName: 'checkId',
        args: [tokenId],
    });

    // Use useWriteContract to mint the NFT
    const { writeContract, isPending } = useWriteContract();

    const mintNFT = async () => {
        console.log('Mint NFT button clicked');

        if (!address) {
            alert('Please connect your wallet!');
            return;
        }

        try {
            setMinting(true);

            if (idExists) {
                alert('This token ID already exists. Please try again!');
                setMinting(false);
                return;
            }

            // Mint NFT using smart contract (the contract call)
            await writeContract({
                address: mintContractAddress,
                abi: nftAbi,
                functionName: 'mint',
                args: [tokenId, metadataUrl],
            });

            // Call the backend to save NFT data
            await saveNFTData(nftName, description, imageUrl, tokenId, address); // Saving to backend

            alert('NFT minting transaction submitted!');
        } catch (error) {
            console.error('Error minting NFT:', error);
            alert('Error minting NFT. Check console for details.');
        } finally {
            setMinting(false);
        }
    };

    // The saveNFTData function now uses the Render URL for your backend API
    const saveNFTData = async (nftName, description, imageUrl, tokenId, userWalletAddress) => {
        try {
            const response = await fetch('https://nftmining-cytric.onrender.com/api/nft/store', {  // Use your backend's Render URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nftName,
                    description,
                    imageUrl,
                    tokenId,
                    userWalletAddress,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to save NFT data');
            }

            const data = await response.json();
            console.log('NFT data saved successfully:', data);
        } catch (error) {
            console.error('Error saving NFT data:', error);
        }
    };

    return (
        <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            minHeight: '100px'
        }}>
            <button
                onClick={mintNFT}
                style={{
                    cursor: 'pointer',
                    padding: '12px 24px',
                    backgroundColor: minting || isPending ? '#ccc' : '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    width: '150px',
                    height: '50px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 1000,
                }}
                onMouseOver={(e) => {
                    if (!minting && !isPending) {
                        e.currentTarget.style.backgroundColor = '#45a049';
                    }
                }}
                onMouseOut={(e) => {
                    if (!minting && !isPending) {
                        e.currentTarget.style.backgroundColor = '#4CAF50';
                    }
                }}
            >
                {minting || isPending ? 'Minting...' : 'Mint NFT'}
            </button>
        </div>
    );
}
