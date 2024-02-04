import {
  Box,
  Breadcrumbs,
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
  breadcrumbSepGreenIcon,
  careProviderBanner,
  servicesHomeBanner,
} from "../../../assets/images";
import ContactUs from "../../../components/developer/contact-us";
import { scrollToTop, servicesList } from "../../../utility/helper";
import { DeveloperAppRoutes } from "../../../utility/app-routes";
import { useNavigate } from "react-router-dom";

function BreadCrumbSep() {
  return <img src={breadcrumbSepGreenIcon} />;
}

const OurServices: React.FC = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div
        className="overlay"
        onClick={(e) => document.body.classList.toggle("sidebar-toggle")}
      ></div>

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
            <Link style={{ cursor: "pointer", textDecoration: "none" }} key="1">
              Services
            </Link>
            <Link
              key="2"
              style={{ cursor: "pointer", textDecoration: "none" }}
              className="active"
            >
              Our Service
            </Link>
          </Breadcrumbs>
        </Box>
      </section>
      <section className="care services-care">
        <Box className="container">
          <Typography
            variant="h2"
            className="heading care-heading services-care-heading"
          >
            What we do for you
          </Typography>
          <Grid
            container
            spacing={{ xs: "16px", md: "20px", lg: "24px", xl: "32px" }}
          >
            {servicesList.map((item) => {
              return (
                <Grid key={item.id} item xs={12} sm={6} lg={4}>
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
                          Read More <img src={arrowSecondaryIcon} alt="Arrow" />
                        </Link>
                      </CardActions>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
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
            <Typography variant="h2" className="heading">
              Trusted & Experience Senior Care Provider
            </Typography>
            <Typography
              variant="h6"
              component="p"
              className="care-provider-para"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
          </Box>
        </Box>
      </section>
      <ContactUs />
    </div>
  );
};
export default OurServices;
