import '@/styles/globals.css';
import '@/styles/logs-react.css';
import '@/styles/splitpane.css';

import { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider
      domain='node-rpc-docs.celestia.org'
      customDomain='https://plausible.celestia.org'
      selfHosted={true}
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
