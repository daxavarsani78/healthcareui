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
import React from "react";
import DesignerHeader from "../../../components/designer/designerHeader";
import {
  arrowSecondaryIcon,
  assignmentIcon,
  careIcon,
  careSmallIcon,
  dollarIcon,
  historyIcon,
  homeBanner,
  homeIcon,
  homeMobileBanner,
  homeTabletBanner,
  livingRoomIcon,
  oldIcon,
  partnerIcon,
  personIcon,
  playIcon,
  puzzleIcon,
  safetyIcon,
  seniorCareBanner,
  timeDarkIcon,
} from "../../../assets/images";
import DesignerContactUs from "../../../components/designer/designerContactUs";
import DesignerFooter from "../../../components/designer/designerFooter";
import DesignerContactForm from "../../../components/designer/designerContactForm";
import DesignerTestimonial from "../../../components/designer/designerTestimonial";

const DesignerHome: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <div className="wrapper">
      <div
        className="overlay"
        onClick={(e) => document.body.classList.toggle("sidebar-toggle")}
      ></div>
      <DesignerHeader bgColor="bg-transparent" />
      <section className="home">
        <Box className="container">
          <Box className="home-content">
            <Typography variant="h1" className="home-heading">
              Live Independently With Quality Support
            </Typography>
            <Typography variant="h5" className="home-para">
              We provide support & services for people with disabilitiesto enjoy
              their best possible quality of life.
            </Typography>

            <Box className="home-btn-group">
              <Button
                variant="contained"
                color="secondary"
                className="btn-enquire"
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
            spacing={{ xs: "24px", md: "24px", lg: "26px", xl: "35px" }}
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
            <Grid item xs={12} sm={6} lg={4}>
              <Card className="care-card">
                <CardContent>
                  <div className="care-icon">
                    <img src={oldIcon} alt="Old" />
                  </div>
                  <Typography variant="h5" className="card-title">
                    Individual and Personal Care
                  </Typography>
                  <Typography variant="body2" className="card-text">
                    Always Care aims to support you to achieve your goals your
                    way, to make your life easy. We can provide as much personal
                    help as you need to start the day feeling fresh.
                  </Typography>
                  <CardActions>
                    <Link href="#">
                      Read More <img src={arrowSecondaryIcon} alt="Arrow" />
                    </Link>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Card className="care-card">
                <CardContent>
                  <div className="care-icon">
                    <img src={homeIcon} alt="Home" />
                  </div>
                  <Typography variant="h5" className="card-title">
                    In-home Drop in Support
                  </Typography>
                  <Typography variant="body2" className="card-text">
                    Always Care is also there to support the Carer. Our
                    short-term accommodation is designed to enable the Carer to
                    take some time off.
                  </Typography>
                  <CardActions>
                    <Link href="#">
                      Read More <img src={arrowSecondaryIcon} alt="Arrow" />
                    </Link>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Card className="care-card">
                <CardContent>
                  <div className="care-icon">
                    <img src={puzzleIcon} alt="Puzzle" />
                  </div>
                  <Typography variant="h5" className="card-title">
                    Have Fun with our Group Activities
                  </Typography>
                  <Typography variant="body2" className="card-text">
                    We can help you get out of the house and back into the
                    community, and our group activities are about supporting you
                    to become more active within the community.
                  </Typography>
                  <CardActions>
                    <Link href="#">
                      Read More <img src={arrowSecondaryIcon} alt="Arrow" />
                    </Link>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Card className="care-card">
                <CardContent>
                  <div className="care-icon">
                    <img src={partnerIcon} alt="Partner" />
                  </div>
                  <Typography variant="h5" className="card-title">
                    Assistance with Daily Living
                  </Typography>
                  <Typography variant="body2" className="card-text">
                    Need some extra help at home? We make it possible for you to
                    remain living independently in your own home by supplying a
                    wide range of services to keep your home running smoothly.
                  </Typography>
                  <CardActions>
                    <Link href="#">
                      Read More <img src={arrowSecondaryIcon} alt="Arrow" />
                    </Link>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Card className="care-card">
                <CardContent>
                  <div className="care-icon">
                    <img src={careIcon} alt="Care" />
                  </div>
                  <Typography variant="h5" className="card-title">
                    High Care and Complex Needs
                  </Typography>
                  <Typography variant="body2" className="card-text">
                    We offer a full range of support services for people living
                    with all types of disability in the community. The level of
                    support we offer varies, depending on those individual
                    needs.
                  </Typography>
                  <CardActions>
                    <Link href="#">
                      Read More <img src={arrowSecondaryIcon} alt="Arrow" />
                    </Link>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Card className="care-card">
                <CardContent>
                  <div className="care-icon">
                    <img src={livingRoomIcon} alt="Living Room" />
                  </div>
                  <Typography variant="h5" className="card-title">
                    Supported Independent Living &#40;SIL&#41; and SDA Housing
                  </Typography>
                  <Typography variant="body2" className="card-text">
                    Being able to live independently is an essential part of
                    life and it allows you to exercise choice and control.
                  </Typography>
                  <CardActions>
                    <Link href="#">
                      Read More <img src={arrowSecondaryIcon} alt="Arrow" />
                    </Link>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Button variant="outlined" className="btn-view" color="secondary">
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
                    Proin at urna maximus, imperdiet lacus eget, eleifend ipsum.
                    Duis egestas mollis nulla eget ullamcorper.
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
                    Proin at urna maximus, imperdiet lacus eget, eleifend ipsum.
                    Duis egestas mollis nulla eget ullamcorper.
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
                    Proin at urna maximus, imperdiet lacus eget, eleifend ipsum.
                    Duis egestas mollis nulla eget ullamcorper.
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
      <DesignerTestimonial bgColor="#FFFFFF" />
      <DesignerContactUs />
      <DesignerContactForm />
      <DesignerFooter />
    </div>
  );
};
export default DesignerHome;
