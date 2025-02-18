'use client';

import { WagmiProvider } from 'wagmi'; // Using WagmiProvider instead of WagmiConfig
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public'; // Use publicProvider for network connection
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create wagmi client configuration
const client = createClient({
  autoConnect: true,
  connectors: [
    new InjectedConnector({
      chains: [sepolia],
    }), // Injected connector for RainbowKit
  ],
  provider: publicProvider(), // Public provider for blockchain data
});

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WagmiProvider client={client}> {/* Use WagmiProvider to pass client */}
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
