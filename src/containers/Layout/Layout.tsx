import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Layout.css";
import { CssBaseline } from "@mui/material";

export enum themePallete {
  background = "#f5f9fd",
}

const theme = createTheme({
  typography: {
    fontFamily: ['Comfortaa', 'sans-serif' ].join(","),
  },
  palette:{
    background:{
      default: themePallete.background
    }
  },
  components:{
    MuiButton:{
      defaultProps:{
        style:{
          textTransform: "none",
          borderRadius: "15px",
        }
      }
    },
    MuiInputBase:{
      defaultProps:{
        style:{
          borderRadius: "15px",
        }
      }
    },
    MuiCard:{
      defaultProps:{
        style:{
          borderRadius: "15px",
        }
      }
    }
  }
});
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="layout">{children}</div>
    </ThemeProvider>
  );
};

export default Layout;
