import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  breadcrumbSepLightIcon,
  serviceDetailBanner1,
  serviceDetailBanner2,
} from "../../../assets/images";
import Testimonial from "../../../components/developer/testimonial";
import { scrollToTop, servicesList } from "../../../utility/helper";
import ContactUs from "../../../components/developer/contact-us";

function BreadCrumbSep() {
  return <img src={breadcrumbSepLightIcon} />;
}
const ServiceDetails: React.FC = () => {
  // get state value
  const { state } = window.history;
  const serviceId = state?.usr?.serviceId ? state?.usr?.serviceId : 1; //TODO: in case of dynamic
  const service = servicesList.find((item) => item.id === serviceId);
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="wrapper">
      <div
        className="overlay"
        onClick={(e) => document.body.classList.toggle("sidebar-toggle")}
      ></div>
      <section className="service-detail-home">
        <Box className="container">
          <Box className="service-detail-home-content">
            <Typography variant="h2" className="service-detail-home-heading">
              {service?.title}
            </Typography>
          </Box>
          <Breadcrumbs aria-label="breadcrumb" separator={<BreadCrumbSep />}>
            <Link style={{ cursor: "pointer", textDecoration: "none" }} key="1">
              Services
            </Link>
            <Link
              key="3"
              style={{ cursor: "pointer", textDecoration: "none" }}
              className="active"
            >
              Service Details
            </Link>
          </Breadcrumbs>
        </Box>
      </section>
      <section className="service-detail-about">
        <Box className="container">
          <Box className="service-detail-about-first service-detail-about-content">
            <Box className="service-detail-about-banner">
              <img src={serviceDetailBanner1} alt="Banner" />
            </Box>
            <Box className="service-detail-about-para">
              <Typography variant="h6" component="p">
                {service?.description2}
              </Typography>
            </Box>
          </Box>
          <Box className="service-detail-about-second service-detail-about-content">
            <Box className="service-detail-about-para">
              <Typography variant="h6" component="p">
                {service?.description3}
              </Typography>
            </Box>
          </Box>
          <Box className="service-detail-about-third service-detail-about-content">
            <Box className="service-detail-about-para">
              <Typography variant="h6" component="p">
                {service?.description4}
              </Typography>
            </Box>
            <Box className="service-detail-about-banner">
              <img src={serviceDetailBanner2} alt="Banner" />
            </Box>
          </Box>
        </Box>
      </section>
      <Testimonial bgColor="#FFFFFF" />
      <ContactUs />
    </div>
  );
};
export default ServiceDetails;
