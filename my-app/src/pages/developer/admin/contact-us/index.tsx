import React, { useEffect } from "react";
import ContactForm from "../../../../components/developer/contact-form";
import { scrollToTop } from "../../../../utility/helper";

const ContactUsPage: React.FC = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="wrapper">
      <div
        className="overlay"
        onClick={(e) => document.body.classList.toggle("sidebar-toggle")}
      ></div>
      <ContactForm />
    </div>
  );
};
export default ContactUsPage;
