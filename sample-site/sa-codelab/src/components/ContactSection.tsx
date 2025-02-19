import React, { useState } from "react";
import { Grid, TextField, Button, Typography, Alert } from "@mui/material";
import useForm from "../utils/useForm"; // (Implement this later)

const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const { values, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
    message: "",
  });

  return (
    <Grid container spacing={4} sx={{ paddingY: 8 }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          Get in Touch
        </Typography>
        {isSubmitted && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Your message has been sent!
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            name="message"
            value={values.message}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" fullWidth>
            Send Message
          </Button>
        </form>
      </Grid>
      {/* Add a Contact Info Section on the other side */}
    </Grid>
  );
};

export default ContactSection;