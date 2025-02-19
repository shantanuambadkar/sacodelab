import React from "react";
import { Typography, Button, Box } from "@mui/material";

const HeroSection: React.FC = () => {
  return (
    <Box textAlign="center" sx={{ paddingY: 8 }}>
      <Typography variant="h2" gutterBottom>
        SA CodeLab: Your Digital Solutions Partner
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        We build stunning websites, design compelling logos, and consult on UI/UX to elevate your brand.
      </Typography>
      <Button variant="contained" size="large">
        Learn More
      </Button>
    </Box>
  );
};

export default HeroSection;