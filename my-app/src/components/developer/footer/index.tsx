/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import {
  facebookIcon,
  footerLogo,
  instagramIcon,
  linkedinIcon,
  twitterIcon,
} from "../../../assets/images";
import { AppRoutes, DeveloperAppRoutes } from "../../../utility/app-routes";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <Box className="container">
        <Box className="footer-content">
          <a
            onClick={() => navigate(DeveloperAppRoutes.homePage)}
            className="footer-logo"
            style={{ cursor: "pointer" }}
            title="AbleLink Care"
          >
            <img src={footerLogo} alt="AbleLink Care" className="desktop" />
          </a>
          <Typography variant="body1">
            Planning for retirement can be a complex and daunting process, but
            it doesn't have to be
          </Typography>
          <Grid
            container
            columnSpacing={{ xs: "16px", md: "20px", lg: "29px" }}
          >
            <Grid item xs={3}>
              <IconButton className="btn-icon">
                <img src={facebookIcon} alt="Icon" />
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <IconButton className="btn-icon">
                <img src={instagramIcon} alt="Icon" />
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <IconButton className="btn-icon">
                <img src={twitterIcon} alt="Icon" />
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <IconButton className="btn-icon">
                <img src={linkedinIcon} alt="Icon" />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
        <Box className="footer-link-group">
          <Grid container justifyContent="space-between">
            <Grid item xs={12} sm={6} md="auto">
              <Typography variant="h6" className="footer-title">
                Quick links
              </Typography>
              <List>
                <ListItem
                  onClick={() => navigate(DeveloperAppRoutes.aboutUs)}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText
                      primary="About us"
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  onClick={() => navigate(DeveloperAppRoutes.ourService)}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText
                      primary="Services"
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  onClick={() => navigate(DeveloperAppRoutes.ndis)}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText
                      primary="NDIS"
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItemButton>
                </ListItem>
                {/* <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary="Register Participants"
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItemButton>
                </ListItem> */}
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md="auto">
              <Typography variant="h6" className="footer-title">
                Policies
              </Typography>
              <List>
                <ListItem
                  onClick={() => navigate(DeveloperAppRoutes.PrivacyAndPolicy)}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText
                      primary="Privacy Policy"
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  onClick={() => navigate(DeveloperAppRoutes.TermsAndCondition)}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText
                      primary="Terms & Conditions"
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md="auto">
              <Typography variant="h6" className="footer-title">
                Contact
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemButton href="mailto:help@ablelinkcare.com">
                    <ListItemText
                      primary="help@ablelinkcare.com"
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton href="tel:+61 454 675 235">
                    <ListItemText
                      primary="+61 454 675 235"
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="457 Morningview lane, Australia"
                    primaryTypographyProps={{ variant: "body2" }}
                    className="address"
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className="copyright">
        <Typography variant="body2">
          Copyright © 2023 - AbleLink Care . All Rights Reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
