import { Box, Typography } from "@mui/material";
import React from "react";
import DesignerHeader from "../../../components/designer/designerHeader";
import { privacyHomeBanner } from "../../../assets/images";
import DesignerFooter from "../../../components/designer/designerFooter";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const DesignerPrivacy: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="overlay" onClick={(e) => document.body.classList.toggle('sidebar-toggle')}></div>
      <DesignerHeader bgColor="bg-transparent" />
      <section className="privacy-home">
        <Box className="container">
          <Box className="privacy-home-content">
            <Typography variant="h1" className="privacy-home-heading">
              Privacy Policy
            </Typography>
          </Box>
          <Box className="privacy-home-banner">
            <img src={privacyHomeBanner} alt="Banner" />
          </Box>
        </Box>
      </section>
      <section className="privacy-list-section">
        <Box className="container">
          <Typography variant="h6" component="p" className="privacy-text title">
            This Privacy Policy applies to all personal information collected by CareCircuit Home and Disability Services Pty Ltd via the website located at www.ablelinkcare.com
          </Typography>

          <Box className="privacy-list-content">
            <Box className="privacy-list-box">
              <ul className="nav-items">
                <li className="nav-item">
                  <Link activeClass="active" to="section1" spy={true} smooth={true} offset={-62} duration={500}>
                    What is “personal information”?
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section2" spy={true} smooth={true} offset={0} duration={500}>
                    What information do we collect?
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section3" spy={true} smooth={true} offset={-62} duration={500}>
                    How we collect your personal information
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section4" spy={true} smooth={true} offset={-62} duration={500}>
                    Purpose of collection
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section5" spy={true} smooth={true} offset={-62} duration={500}>
                    Access and correction
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section6" spy={true} smooth={true} offset={-62} duration={500}>
                    Complaint procedure
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section7" spy={true} smooth={true} offset={-62} duration={500}>
                    Overseas transfer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section8" spy={true} smooth={true} offset={-62} duration={500}>
                    How to contact us about privacy
                  </Link>
                </li>
              </ul>
            </Box>
            <Box className="privacy-list-items">
              <Element name="section1" className="element">
                <Typography variant="h3" className="title">1.	What is “personal information”?</Typography>
                <Typography variant="h6" className="privacy-text">
                  &#40;a&#41; The Privacy Act 1988 &#40;Cth&#41; currently defines “personal information” as meaning information or an opinion about an identified individual or an individual who is reasonably identifiable: <br /> <br />
                  &#40;i&#41; whether the information or opinion is true or not; and <br /> <br />
                  &#40;ii&#41; whether the information or opinion is recorded in a material form or not. <br /> <br />
                  &#40;b&#41; If the information does not disclose your identity or enable your identity to be ascertained, it will in most cases not be classified as “personal information” and will not be subject to this privacy policy.
                </Typography>
              </Element>
              <Element name="section2" className="element">
                <Typography variant="h3" className="title">2. What information do we collect?</Typography>
                <Typography variant="h6" className="privacy-text">
                  The kind of personal information that we collect from you will depend on how you use the website. The personal information which we collect and hold about you may include: name, address and contact details &#40;e.g. phone, email and fax&#41;.
                </Typography>
              </Element>
              <Element name="section3" className="element">
                <Typography variant="h3" className="title">3. How we collect your personal information</Typography>
                <Typography variant="h6" className="privacy-text">
                  &#40;a&#41; We may collect personal information from you whenever you input such information into the website. <br /> <br />
                  &#40;b&#41; We also collect cookies from your computer which enable us to tell when you use the website and also to help customise your website experience. As a general rule, however, it is not possible to identify you personally from our use of cookies.
                </Typography>
              </Element>
              <Element name="section4" className="element">
                <Typography variant="h3" className="title">4. Purpose of collection</Typography>
                <Typography variant="h6" className="privacy-text">
                  &#40;a&#41; The purpose for which we collect personal information is to provide you with the best service experience possible on the website. <br /> <br />
                  &#40;b&#41; We customarily disclose personal information only to our service providers who assist us in operating the website. Your personal information may also be exposed from time to time to maintenance and support personnel acting in the normal course of their duties. <br /> <br />
                  &#40;c&#41; By using our website, you consent to the receipt of direct marketing material. We will only use your personal information for this purpose if we have collected such information direct from you, and if it is material of a type which you would reasonably expect to receive from use. We do not use sensitive personal information in direct marketing activity. Our direct marketing material will include a simple means by which you can request not to receive further communications of this nature.
                </Typography>
              </Element>
              <Element name="section5" className="element">
                <Typography variant="h3" className="title">5. Access and correction</Typography>
                <Typography variant="h6" className="privacy-text">
                  Australian Privacy Principle 12 permits you to obtain access to the personal information we hold about you in certain circumstances, and Australian Privacy Principle 13 allows you to correct inaccurate personal information subject to certain exceptions. If you would like to obtain such access, please contact us as set out below.
                </Typography>
              </Element>
              <Element name="section6" className="element">
                <Typography variant="h3" className="title">6. Complaint procedure</Typography>
                <Typography variant="h6" className="privacy-text">
                  If you have a complaint concerning the manner in which we maintain the privacy of your personal information, please contact us as set out below. All complaints will be considered by Chintan Patel and we may seek further information from you to clarify your concerns. If we agree that your complaint is well founded, we will, in consultation with you, take appropriate steps to rectify the problem. If you remain dissatisfied with the outcome, you may refer the matter to the Office of the Australian Information Commissioner.
                </Typography>
              </Element>
              <Element name="section7" className="element">
                <Typography variant="h3" className="title">7.	Overseas transfer</Typography>
                <Typography variant="h6" className="privacy-text">
                  Your personal information will not be disclosed to recipients outside Australia unless you expressly request us to do so. If you request us to transfer your personal information to an overseas recipient, the overseas recipient will not be required to comply with the Australian Privacy Principles and we will not be liable for any mishandling of your information in such circumstances.
                </Typography>
              </Element>
              <Element name="section8" className="element">
                <Typography variant="h3" className="title">8.	How to contact us about privacy</Typography>
                <Typography variant="h6" className="privacy-text">
                  If you have any queries, or if you seek access to your personal information, or if you have a complaint about our privacy practices, you can contact us through: help@ablelink.com
                </Typography>
              </Element>
            </Box>
          </Box>
        </Box>
      </section>
      <DesignerFooter />
    </div>
  );
};
export default DesignerPrivacy;