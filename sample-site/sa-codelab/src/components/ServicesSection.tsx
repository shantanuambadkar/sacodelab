import React from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import servicesData from "../data/services"; 

const ServicesSection: React.FC = () => {
  return (
    <Grid container spacing={4} sx={{ paddingY: 8 }}>
      {servicesData.map((service) => (
        <Grid item key={service.id} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ServicesSection;