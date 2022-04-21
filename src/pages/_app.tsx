import '@fontsource/ubuntu';
import type { AppProps } from 'next/app';
import Theme from 'src/config/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
