import { ThemeProvider as MaterialThemeProvider, useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/system';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ReactNode, useMemo } from 'react';

export default function Theme({ children }: { children: ReactNode }) {
  const isDark = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: ['"Ubuntu"', 'sans-serif'],
        },
        palette: {
          mode: isDark ? 'dark' : 'light',
          primary: {
            main: '#2e7d32',
          },
          secondary: {
            main: '#689f38',
          },
          error: {
            main: '#b71c1c',
          },
        },
      }),
    [isDark],
  );

  return (
    <NextThemeProvider>
      <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
    </NextThemeProvider>
  );
}
