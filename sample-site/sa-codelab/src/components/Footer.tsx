import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.paper",
        padding: 2,
        marginTop: 4,
      }}
    >
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} SA CodeLab. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;