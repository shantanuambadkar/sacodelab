import React, { ReactNode } from "react";
import { AppBar, Toolbar, Container, Box } from "@mui/material";
import LogoImage from "./LogoImage";

// Define the props interface
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box> {/* A simple wrapper component */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <LogoImage/>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ paddingY: 4 }}>
        {children} 
      </Container>
    </Box>
  );
};

export default Layout;
