import "@fontsource/ubuntu";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/system";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const theme = createTheme({
  typography: {
    fontFamily: ['"Ubuntu"', "sans-serif"],
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
