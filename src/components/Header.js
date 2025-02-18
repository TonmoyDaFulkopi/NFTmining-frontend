// src/components/Header.js
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px 40px',
            backgroundColor: '#0A0B1D', // Dark background color
            alignItems: 'center',
        }}>
            <h1 style={{ color: '#fff', fontSize: '30px', fontWeight: 'bold' }}>Discover & Collect Extraordinary NFTs</h1>
            {/* RainbowKit ConnectButton for wallet connection */}
            <ConnectButton
                accountStatus="full"  // Shows the wallet address
                chainStatus="icon"    // Displays the current network
                label="Connect Wallet"
                showBalance={false}  // You can customize the display as needed
            />
        </header>
    );
}
