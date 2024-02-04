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
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  arrowSecondaryIcon,
  assignmentIcon,
  careSmallIcon,
  dollarIcon,
  historyIcon,
  homeBanner,
  homeMobileBanner,
  homeTabletBanner,
  personIcon,
  playIcon,
  safetyIcon,
  seniorCareBanner,
  timeDarkIcon,
} from "../../../assets/images";
import Testimonial from "../../../components/developer/testimonial";
import ContactUs from "../../../components/developer/contact-us";
import ContactForm from "../../../components/developer/contact-form";
import { scrollToTop, servicesList } from "../../../utility/helper";
import { useNavigate } from "react-router-dom";
import { DeveloperAppRoutes } from "../../../utility/app-routes";

const HomePage: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  useEffect(() => {
    scrollToTop();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div className="wrapper">
        <div
          className="overlay"
          onClick={(e) => document.body.classList.toggle("sidebar-toggle")}
        />
        <section className="home">
          <Box className="container">
            <Box className="home-content">
              <Typography variant="h1" className="home-heading">
                Live Independently With Quality Support
              </Typography>
              <Typography variant="h5" className="home-para">
                We provide support & services for people with disabilitiesto
                enjoy their best possible quality of life.
              </Typography>
              <Box className="home-btn-group">
                <Button
                  variant="contained"
                  color="secondary"
                  className="btn-enquire"
                  onClick={() => {
                    var element = document.getElementById("get-in-touch-dev");
                    element?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "start",
                    });
                  }}
                >
                  Enquire Now
                </Button>
                <Button variant="text" color="secondary" className="btn-watch">
                  <img src={playIcon} alt="Play" />
                  Watch Video
                </Button>
              </Box>
            </Box>
            <Box className="home-banner">
              <img src={homeBanner} alt="Banner" className="desktop" />
              <img src={homeMobileBanner} alt="Banner" className="mobile" />
              <img src={homeTabletBanner} alt="Banner" className="tablet" />
            </Box>
          </Box>
          <Box className="benefits">
            <Grid
              container
              spacing={{ xs: "16px", md: "20px", lg: "26px", xl: "35px" }}
            >
              <Grid item xs={12} sm={6} lg={3}>
                <div className="benefits-content">
                  <div className="benefits-icon">
                    <img src={timeDarkIcon} alt="Time" />
                  </div>
                  <div>
                    <Typography variant="h6" className="benefits-title">
                      24/7 Service
                    </Typography>
                    <Typography variant="body2" className="benefits-para">
                      Lorem Ipsum is simply dummy text of the printing
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <div className="benefits-content">
                  <div className="benefits-icon">
                    <img src={personIcon} alt="Person" />
                  </div>
                  <div>
                    <Typography variant="h6" className="benefits-title">
                      Professional
                    </Typography>
                    <Typography variant="body2" className="benefits-para">
                      Lorem Ipsum is simply dummy text of the printing
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <div className="benefits-content">
                  <div className="benefits-icon">
                    <img src={dollarIcon} alt="Dollar" />
                  </div>
                  <div>
                    <Typography variant="h6" className="benefits-title">
                      Affordable
                    </Typography>
                    <Typography variant="body2" className="benefits-para">
                      Lorem Ipsum is simply dummy text of the printing
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <div className="benefits-content">
                  <div className="benefits-icon">
                    <img src={assignmentIcon} alt="Assigned" />
                  </div>
                  <div>
                    <Typography variant="h6" className="benefits-title">
                      Guaranteed
                    </Typography>
                    <Typography variant="body2" className="benefits-para">
                      Lorem Ipsum is simply dummy text of the printing
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </section>
        <section className="care">
          <Box className="container">
            <Typography variant="h2" className="heading care-heading">
              Compassionate Care for Life
            </Typography>
            <Grid
              container
              spacing={{ xs: "16px", md: "20px", lg: "24px", xl: "32px" }}
            >
              {servicesList.slice(0, 6).map((item) => {
                return (
                  <Grid item xs={12} sm={6} lg={4}>
                    <Card className="care-card">
                      <CardContent>
                        <div className="care-icon">
                          <img src={item.icon} alt="Old" />
                        </div>
                        <Typography variant="h5" className="card-title">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" className="card-text">
                          {item.description1}
                        </Typography>
                        <CardActions>
                          <Link
                            onClick={() =>
                              navigate(DeveloperAppRoutes.serviceDetails, {
                                state: {
                                  serviceId: item.id,
                                },
                              })
                            }
                          >
                            Read More{" "}
                            <img src={arrowSecondaryIcon} alt="Arrow" />
                          </Link>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
            <Button
              variant="outlined"
              onClick={() => navigate(DeveloperAppRoutes.ourService)}
              className="btn-view"
              color="secondary"
            >
              View all Services
            </Button>
          </Box>
        </section>
        <section className="senior-care">
          <Box className="container">
            <Box className="senior-care-content">
              <Typography variant="h2" className="heading senior-care-heading">
                Senior Care is Not Our Job It’s Pride
              </Typography>
              <Box className="accodion-container">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <img src={careSmallIcon} alt="Resort Style Living" />
                    <Typography variant="h6">Resort Style Living</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      Proin at urna maximus, imperdiet lacus eget, eleifend
                      ipsum. Duis egestas mollis nulla eget ullamcorper.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <img src={safetyIcon} alt="Safety & Security Guaranty" />
                    <Typography variant="h6">
                      Safety & Security Guaranty
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      Proin at urna maximus, imperdiet lacus eget, eleifend
                      ipsum. Duis egestas mollis nulla eget ullamcorper.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <img src={historyIcon} alt="Years of Experience" />
                    <Typography variant="h6">Years of Experience</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      Proin at urna maximus, imperdiet lacus eget, eleifend
                      ipsum. Duis egestas mollis nulla eget ullamcorper.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>

            <Box className="senior-care-banner">
              <img src={seniorCareBanner} alt="Banner" />
              <Box className="senior-care-mockup"></Box>
            </Box>
          </Box>
        </section>
        <Testimonial bgColor="#FFFFFF" />
        <ContactUs />
        <ContactForm />
      </div>
    </>
  );
};
export default HomePage;
