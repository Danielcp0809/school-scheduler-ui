import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Layout.css";

const theme = createTheme({
  typography: {
    fontFamily: ['Comfortaa', 'sans-serif' ].join(","),
  },
});
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="layout">{children}</div>
    </ThemeProvider>
  );
};

export default Layout;
