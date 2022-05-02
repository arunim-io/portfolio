import '@fontsource/ubuntu';
import type { AppProps } from 'next/app';
import Layout from 'src/config/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
