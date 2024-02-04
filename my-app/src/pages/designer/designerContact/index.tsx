import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import DesignerHeader from "../../../components/designer/designerHeader";
import {
  assignmentIcon,
  contactBanner,
  contactMap,
  dollarIcon,
  homeBanner,
  mailDarkIcon,
  personIcon,
  playIcon,
  timeDarkIcon,
} from "../../../assets/images";
import DesignerFooter from "../../../components/designer/designerFooter";

const DesignerContact: React.FC = () => {
  return (
    <div className="wrapper">
      <div
        className="overlay"
        onClick={(e) => document.body.classList.toggle("sidebar-toggle")}
      ></div>
      <DesignerHeader bgColor="bg-transparent" />
      <section className="contact-home">
        <Box className="container">
          <Box className="contact-home-content">
            <Typography variant="h1" className="contact-home-heading">
              Contact Us
            </Typography>
          </Box>
          <Box className="contact-home-banner">
            <img src={contactBanner} alt="Banner" />
          </Box>
        </Box>
      </section>
      <section className="contact-section">
        <Box className="container">
          <Box className="contact-section-content">
            <Typography
              variant="h2"
              className="heading contact-section-heading"
            >
              Feel Free Don’t Hesitate To Contact With Us
            </Typography>

            <Box className="email-box">
              <div className="email-icon">
                <img src={mailDarkIcon} alt="mail" />
              </div>
              <div className="email-info">
                <Typography variant="body2" component="label">
                  Email
                </Typography>
                <Link href="mailto:help@ablelinkcare.com">
                  help@ablelinkcare.com
                </Link>
              </div>
            </Box>
          </Box>
          <Box className="contact-section-card">
            <Box className="contact-section-map">
              <img src={contactMap} alt="Map" />
            </Box>
            <Box className="contact-section-form">
              <TextField
                id="fullname"
                label="Full Name"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="emailId"
                label="Email ID"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="message"
                label="Message"
                multiline
                className="textarea"
                fullWidth
              />
              <Button
                variant="contained"
                color="secondary"
                className="btn-submit"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </section>
      <DesignerFooter />
    </div>
  );
};
export default DesignerContact;
