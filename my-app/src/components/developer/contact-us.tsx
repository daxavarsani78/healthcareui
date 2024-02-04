import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { contactUsBanner } from "../../assets/images";
import { DeveloperAppRoutes } from "../../utility/app-routes";
import { useNavigate } from "react-router-dom";

const ContactUs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="contact-us">
      <Box className="container">
        <Box className="contact-us-content">
          <Typography variant="h4" className="heading-small">
            Need Help Finding the Right Services?Our Friendly Staff will Help -
            Get in Touch Today!
          </Typography>
          <Button
            onClick={() => {
              document.body.classList.toggle("sidebar-toggle");
              navigate(DeveloperAppRoutes.contactUs);
            }}
            variant="contained"
            className="btn-light"
          >
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

export default ContactUs;
