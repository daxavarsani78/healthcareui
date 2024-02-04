import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { contactUsBanner } from "../../../assets/images";

const DesignerContactUs: React.FC = () => {
  return (
    <section className="contact-us">
      <Box className="container">
        <Box className="contact-us-content">
          <Typography variant="h4" className="heading-small">
            Need Help Finding the Right Services?Our Friendly Staff will Help -
            Get in Touch Today!
          </Typography>
          <Button variant="contained" className="btn-light">
            Contact Us
          </Button>
        </Box>
        <Box className="contact-us-banner">
          <img src={contactUsBanner} alt="Banner" />
        </Box>
      </Box>
    </section>
  );
};

export default DesignerContactUs;
