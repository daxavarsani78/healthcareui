import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import DesignerHeader from "../../../components/designer/designerHeader";
import { breadcrumbSepLightIcon, serviceDetailBanner1, serviceDetailBanner2 } from "../../../assets/images";
import DesignerFooter from "../../../components/designer/designerFooter";
import DesignerContactForm from "../../../components/designer/designerContactForm";
import DesignerTestimonial from "../../../components/designer/designerTestimonial";

function BreadCrumbSep() {
  return <img src={breadcrumbSepLightIcon} />;
}

const DesignerServiceDetails: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="overlay" onClick={(e) => document.body.classList.toggle('sidebar-toggle')}></div>
      <DesignerHeader bgColor="bg-white" />
      <section className="service-detail-home">
        <Box className="container">
          <Box className="service-detail-home-content">
            <Typography variant="h2" className="service-detail-home-heading">
              Individual and Personal Care
            </Typography>
          </Box>
          <Breadcrumbs aria-label="breadcrumb" separator={<BreadCrumbSep />}>
            <Link underline="hover" href="/home" key="1">
              Home
            </Link>
            <Link
              underline="hover"
              href="/services"
              key="2"
            >
              Our Service
            </Link>
            <Link
              underline="hover"
              href="/service-details"
              key="3"
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              </Typography>
            </Box>
          </Box>
          <Box className="service-detail-about-second service-detail-about-content">
            <Box className="service-detail-about-para">
              <Typography variant="h6" component="p">
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur i
              </Typography>
            </Box>
          </Box>
          <Box className="service-detail-about-third service-detail-about-content">
            <Box className="service-detail-about-para">
              <Typography variant="h6" component="p">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              </Typography>
            </Box>
            <Box className="service-detail-about-banner">
              <img src={serviceDetailBanner2} alt="Banner" />
            </Box>
          </Box>
        </Box>
      </section>

      <DesignerTestimonial bgColor="bg-light-skin" />
      <DesignerContactForm />
      <DesignerFooter />
    </div>
  );
};
export default DesignerServiceDetails;