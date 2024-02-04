import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  aboutUsBanner,
  compassionIcon,
  missionIcon,
  partnerLargeIcon,
  visionIcon,
  whyUsBanner,
} from "../../../assets/images";
import ContactUs from "../../../components/developer/contact-us";
import ContactForm from "../../../components/developer/contact-form";
import { scrollToTop } from "../../../utility/helper";

const AboutUsPage: React.FC = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="wrapper">
      <div
        className="overlay"
        onClick={(e) => document.body.classList.toggle("sidebar-toggle")}
      ></div>
      <section className="about-us-home">
        <Box className="container">
          <Box className="about-us-home-content">
            <Typography variant="h1" className="about-us-home-heading">
              About Us
            </Typography>
          </Box>
          <Box className="about-us-home-banner">
            <img src={aboutUsBanner} alt="Banner" />
          </Box>
        </Box>
      </section>
      <section className="about-us-intro">
        <Box className="container">
          <Typography variant="h2" className="heading">
            Who We Are?
          </Typography>
          <Grid
            container
            spacing={{ xs: "16px", md: "20px", lg: "24px", xl: "32px" }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                component="p"
                className="about-us-intro-para"
              >
                Ablelink Care is a leading registered NDIS provider in
                Melbourne. We are a team of professional and dedicated
                registered nurses with 15 years of clinical experience in
                HealthCare. Our staff are passionate about providing
                person-centred care to you with the highest quality of care for
                your individual needs so you can maintain your independence and
                do things you want to do.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                component="p"
                className="about-us-intro-para"
              >
                At Ablelink Care, we are guided by our values of Compassion,
                Respect, Integrity, and Excellence. These values have
                enlightened us to view our participant not as someone with
                compromised abilities but rather as an individual with a unique
                set of skills who need an environment to nurture those skills
                and making the most of what they have.
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="h6"
            component="p"
            className="about-us-intro-para center"
          >
            Our experienced health professionals will support you to build that
            environment and aspire to reach your goals through excellence. Our
            aim is to understand your individual needs, create a goal and find
            the right support for you throughout your life journey.
          </Typography>

          <Grid
            container
            spacing={{ xs: "16px", md: "20px", lg: "30px", xl: "72px" }}
          >
            <Grid item xs={12} md={6}>
              <Card className="about-us-intro-card">
                <CardContent>
                  <div className="icon">
                    <img src={missionIcon} alt="Icon" />
                  </div>

                  <Typography variant="h2" className="title">
                    Our Mission
                  </Typography>
                  <Typography variant="h6" className="text">
                    Our Mission is to provide support and empower our
                    participant with a culture of safe, inclusive and quality
                    care to optimise their health and wellbeing so they live the
                    best life they can.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="about-us-intro-card">
                <CardContent>
                  <div className="icon">
                    <img src={visionIcon} alt="Icon" />
                  </div>

                  <Typography variant="h2" className="title">
                    Our Vision
                  </Typography>
                  <Typography variant="h6" className="text">
                    Our vision is to be a preferred provider of support services
                    in the community where everyone is treated with dignity and
                    respect.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className="core-value">
        <Box className="container">
          <Typography variant="h2" className="heading">
            Core Value
          </Typography>
          <Typography variant="h6" className="core-value-text sub-heading">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </Typography>
          <Grid
            container
            columnSpacing={{ xs: "16px", md: "30px", lg: "60px", xl: "105px" }}
            rowSpacing={{ xs: "24px", md: "30px" }}
          >
            <Grid item xs={12} md={6} lg={4}>
              <Box className="core-value-content">
                <div className="icon">
                  <img src={compassionIcon} alt="Icon" />
                </div>
                <Typography variant="h5" className="core-value-title">
                  Compassion
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  className="core-value-text"
                >
                  We are here to help you in your time of need with kindness,
                  passion and generosity.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Box className="core-value-content">
                <div className="icon">
                  <img src={partnerLargeIcon} alt="Icon" />
                </div>
                <Typography variant="h5" className="core-value-title">
                  Respect
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  className="core-value-text"
                >
                  We treat people in a way that we would like to be treated and
                  respect their decision without making any judgement.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Box className="core-value-content">
                <div className="icon">
                  <img src={compassionIcon} alt="Icon" />
                </div>
                <Typography variant="h5" className="core-value-title">
                  Integrity
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  className="core-value-text"
                >
                  We are honest, open, ethical, fair and always do the right
                  thing in a reliable way.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className="why-us">
        <Box className="container">
          <Box className="why-us-content">
            <Typography variant="h2" className="heading why-us-heading">
              Why Choose Us
            </Typography>
            <List disablePadding>
              <ListItem disablePadding disableGutters>
                <ListItemText
                  primary="Customer focused approach"
                  primaryTypographyProps={{ variant: "h6" }}
                />
              </ListItem>
              <ListItem disablePadding disableGutters>
                <ListItemText
                  primary="24/7 Clinical Expert Advise available"
                  primaryTypographyProps={{ variant: "h6" }}
                />
              </ListItem>
              <ListItem disablePadding disableGutters>
                <ListItemText
                  primary="Consistent Care & Strong Carer Relationship"
                  primaryTypographyProps={{ variant: "h6" }}
                />
              </ListItem>
              <ListItem disablePadding disableGutters>
                <ListItemText
                  primary="Rigorous Staff Recruitment"
                  primaryTypographyProps={{ variant: "h6" }}
                />
              </ListItem>
              <ListItem disablePadding disableGutters>
                <ListItemText
                  primary="Fair, Reasonable & Transparent with charges"
                  primaryTypographyProps={{ variant: "h6" }}
                />
              </ListItem>
              <ListItem disablePadding disableGutters>
                <ListItemText
                  primary="Owned and run by Health Professionals"
                  primaryTypographyProps={{ variant: "h6" }}
                />
              </ListItem>
            </List>
          </Box>

          <Box className="why-us-banner">
            <img src={whyUsBanner} alt="Banner" />
            <Box className="why-us-mockup"></Box>
          </Box>
        </Box>
      </section>
      <ContactUs />
    </div>
  );
};
export default AboutUsPage;
