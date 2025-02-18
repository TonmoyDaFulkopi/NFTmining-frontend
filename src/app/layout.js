'use client';

import { WagmiProvider, createConfig } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';
import { http } from 'viem';
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Configure wagmi with http transport for Sepolia
const config = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http({
      url: 'https://sepolia.infura.io/v3/1810e447c3b1448198e6f04ffd1cf714', // Replace with your Infura API key
    })  // Replace with your Alchemy or Infura API key
    // For testing, you can use: http() which will use a public provider, but it's not recommended for production
  },
});

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider theme={darkTheme()} chains={[sepolia]}>
              {children}
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}