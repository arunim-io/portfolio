import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/system";
import { ReactNode } from "react";

const theme = createTheme({
  typography: {
    fontFamily: ['"Ubuntu"', "sans-serif"],
  },
});

export default function Theme({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
