import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Layout.css";
import { CssBaseline } from "@mui/material";

export enum themePallete {
  background = "#f5f9fd",
  primary = "#264a82",
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
    MuiContainer:{
      defaultProps:{
        style:{
          maxWidth: "100%",
        }
      }
    },
    MuiGrid:{
      defaultProps:{
        style:{
          margin:0,
          width: "100%",
        }
      }
    },
    MuiButton:{
      defaultProps:{
        style:{
          textTransform: "none",
          borderRadius: "15px",
          maxHeight: "40px",
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
