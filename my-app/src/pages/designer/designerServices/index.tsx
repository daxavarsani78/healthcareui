import { Box, Breadcrumbs, Button, Card, CardActions, CardContent, Grid, Link, Typography } from "@mui/material";
import React from "react";
import DesignerHeader from "../../../components/designer/designerHeader";
import { arrowSecondaryIcon, breadcrumbSepGreenIcon, careIcon, careProviderBanner, handicappedIcon, headphoneIcon, homeBanner, homeIcon, livingRoomIcon, nursingIcon, oldIcon, partnerIcon, playIcon, puzzleIcon, servicesHomeBanner } from "../../../assets/images";
import DesignerContactUs from "../../../components/designer/designerContactUs";
import DesignerFooter from "../../../components/designer/designerFooter";
import DesignerContactForm from "../../../components/designer/designerContactForm";

function BreadCrumbSep() {
  return <img src={breadcrumbSepGreenIcon} />;
}

const DesignerServices: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="overlay" onClick={(e) => document.body.classList.toggle('sidebar-toggle')}></div>
      <DesignerHeader bgColor="bg-transparent" />
      <section className="services-home">
        <Box className="container">
          <Box className="services-home-content">
            <Typography variant="h1" className="services-home-heading heading">
              Compassionate Care for Life
            </Typography>
          </Box>
          <Box className="services-home-banner">
            <img src={servicesHomeBanner} alt="Banner" />
          </Box>
          <Breadcrumbs aria-label="breadcrumb" separator={<BreadCrumbSep />}>
            <Link underline="hover" href="/home" key="1">
              Home
            </Link>
            <Link
              underline="hover"
              href="/services"
              key="2"
              className="active"
            >
              Our Service
            </Link>
          </Breadcrumbs>
        </Box>
      </section>
      <section className="care services-care">
        <Box className="container">
          <Typography variant="h2" className="heading care-heading services-care-heading">What we do for you</Typography>
          <Grid container spacing={{ xs: "16px", md: "20px", lg: "24px", xl: "32px" }}>
            <Grid item xs={12} sm={6} lg={4}>
              <Card className="care-card">
                <CardContent>
                  <div className="care-icon">
                    <img src={oldIcon} alt="Old" />
                  </div>
                  <Typography variant="h5" className="card-title">Individual and Personal Care</Typography>
                  <Typography variant="body2" className="card-text">Always Care aims to support you to achieve your goals your way, to make your life easy. We can provide as much personal help as you need to start the day feeling fresh.</Typography>
                  <CardActions>
                    <Link href="#">Read More <img src={arrowSecondaryIcon} alt="Arrow" /></Link>
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
                  <Typography variant="h5" className="card-title">In-home Drop in Support</Typography>
                  <Typography variant="body2" className="card-text">Always Care is also there to support the Carer. Our short-term accommodation is designed to enable the Carer to take some time off.</Typography>
                  <CardActions>
                    <Link href="#">Read More <img src={arrowSecondaryIcon} alt="Arrow" /></Link>
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
                  <Typography variant="h5" className="card-title">Have Fun with our Group Activities</Typography>
                  <Typography variant="body2" className="card-text">We can help you get out of the house and back into the community, and our group activities are about supporting you to become more active within the community.</Typography>
                  <CardActions>
                    <Link href="#">Read More <img src={arrowSecondaryIcon} alt="Arrow" /></Link>
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
                  <Typography variant="h5" className="card-title">Assistance with Daily Living</Typography>
                  <Typography variant="body2" className="card-text">Need some extra help at home? We make it possible for you to remain living independently in your own home by supplying a wide range of services to keep your home running smoothly.</Typography>
                  <CardActions>
                    <Link href="#">Read More <img src={arrowSecondaryIcon} alt="Arrow" /></Link>
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
                  <Typography variant="h5" className="card-title">High Care and Complex Needs</Typography>
                  <Typography variant="body2" className="card-text">We offer a full range of support services for people living with all types of disability in the community. The level of support we offer varies, depending on those individual needs.</Typography>
                  <CardActions>
                    <Link href="#">Read More <img src={arrowSecondaryIcon} alt="Arrow" /></Link>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Card className="care-card">
                <CardContent>
                  <div className="care-icon">
                    <img src={nursingIcon} alt="Nursing" />
                  </div>
                  <Typography variant="h5" className="card-title">Community Nursing</Typography>
                  <Typography variant="body2" className="card-text">Always Care provides a range of community care nursing services to support individuals to care for themselves with the assistance of family and friends.</Typography>
                  <CardActions>
                    <Link href="#">Read More <img src={arrowSecondaryIcon} alt="Arrow" /></Link>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Card className="care-card">
                <CardContent>
                  <div className="care-icon">
                    <img src={handicappedIcon} alt="Handicapped" />
                  </div>
                  <Typography variant="h5" className="card-title">Community Access and Transport</Typography>
                  <Typography variant="body2" className="card-text">Our customised programs allow our participants to choose activities of their choice, depending on their unique circumstances.</Typography>
                  <CardActions>
                    <Link href="#">Read More <img src={arrowSecondaryIcon} alt="Arrow" /></Link>
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
                  <Typography variant="h5" className="card-title">Supported Independent Living &#40;SIL&#41; and SDA Housing</Typography>
                  <Typography variant="body2" className="card-text">Being able to live independently is an essential part of life and it allows you to exercise choice and control.</Typography>
                  <CardActions>
                    <Link href="#">Read More <img src={arrowSecondaryIcon} alt="Arrow" /></Link>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Card className="care-card">
                <CardContent>
                  <div className="care-icon">
                    <img src={headphoneIcon} alt="Headphone" />
                  </div>
                  <Typography variant="h5" className="card-title">Need help finding the right service?</Typography>
                  <Typography variant="body2" className="card-text">If you're not sure which services are right for you, get in touch with our friendly team today.</Typography>
                  <CardActions>
                    <Link href="#">Read More <img src={arrowSecondaryIcon} alt="Arrow" /></Link>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className="care-provider">
        <Box className="container">
          <Box className="care-provider-banner">
            <div className="care-provider-banner-img">
              <img src={careProviderBanner} alt="Banner" />
            </div>
          </Box>
          <Box className="care-provider-content">
            <Typography variant="h2" className="heading">Trusted & Experience Senior Care Provider</Typography>
            <Typography variant="h6" component="p" className="care-provider-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
          </Box>
        </Box>
      </section>
      <DesignerContactUs />
      <DesignerContactForm />
      <DesignerFooter />
    </div>
  );
};
export default DesignerServices;