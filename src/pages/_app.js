// src/pages/_app.js
import { WagmiConfig, configureChains, createClient } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';
import '@rainbow-me/rainbowkit/styles.css';

// Configure the chains (we're using Sepolia here)
const { chains, provider, webSocketProvider } = configureChains([sepolia], [
    // You can add other providers like Infura or Alchemy here
]);

// Create the client
const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
});

function MyApp({ Component, pageProps }) {
    return (
        <WagmiConfig client={client}>
            <RainbowKitProvider theme={darkTheme()} chains={chains}>
                <Component {...pageProps} />
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default MyApp;
