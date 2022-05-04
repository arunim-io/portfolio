import '@fontsource/ubuntu';
import Layout from 'layout';
import type { AppProps } from 'next/app';
import '../config/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
