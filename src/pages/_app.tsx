import { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider
      domain='node-rpc-docs.celestia.org'
      customDomain='https://plausible.celestia.org'
      scriptProps={{
        async: true,
        defer: true,
      }}
    >
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
