import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { mailDarkIcon } from "../../assets/images";
import { object, string } from "yup";
import { addEnquiry } from "../../services";
import { HttpStatusCodes } from "../../utility/enums";
import { toast } from "react-toastify";
import { hideLoader, showLoader } from "../../utility/helper";

const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const enquirySchema = object({
    fullName: string().required("Full name is required"),
    emailId: string().email("Email is not valid").required("Email is required"),
    phoneNumber: string()
      .required("Phone number is required")
      .min(10, "Please enter valid phone number")
      .max(10, "Please enter valid phone number"),
    message: string().required("Message name is required"),
  });
  // Yup resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(enquirySchema),
  });
  const clearContactForm = () => {
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };
  const onEnquirySubmit = async () => {
    try {
      showLoader();
      const { data } = await addEnquiry({
        email,
        message,
        phoneNumber,
        name: fullName,
      });
      if (data && data.status === HttpStatusCodes.Ok) {
        clearContactForm();
        toast.success("We will be in touch with you shortly.");
      } else {
        toast.error("Something went wrong, Please try again.");
      }
    } finally {
      clearContactForm();
      reset();
      hideLoader();
    }
  };
  return (
    <section className="contact-form" id="get-in-touch-dev">
      <Box className="container">
        <Box className="contact-form-content">
          <Typography variant="h2" className="heading contact-form-heading">
            Feel Free Don’t Hesitate To Contact With Us
          </Typography>

          <Box className="email-box">
            <div className="email-icon">
              <img src={mailDarkIcon} alt="mail" />
            </div>
            <div className="email-info">
              <Typography variant="body2" component="label">
                Email
              </Typography>
              <Link href="mailto:help@ablelinkcare.com">
                help@ablelinkcare.com
              </Link>
            </div>
          </Box>
        </Box>
        <Box className="contact-form-card">
          <TextField
            {...register("fullName")}
            id="fullName"
            label="Full Name"
            variant="outlined"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            error={errors?.fullName?.message ? true : false}
            helperText={errors?.fullName?.message?.toString()}
            fullWidth
          />
          <TextField
            {...register("emailId")}
            id="emailId"
            label="Email ID"
            variant="outlined"
            type="email"
            error={errors?.emailId?.message ? true : false}
            helperText={errors?.emailId?.message?.toString()}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth
          />
          <TextField
            {...register("phoneNumber")}
            id="phoneNumber"
            label="Phone Number"
            variant="outlined"
            type="number"
            error={errors?.phoneNumber?.message ? true : false}
            helperText={errors?.phoneNumber?.message?.toString()}
            value={phoneNumber}
            onChange={(e) => {
              if (+e.target.value >= 0 && e.target.value.length <= 10)
                setPhoneNumber(e.target.value);
            }}
            fullWidth
          />
          <TextField
            {...register("message")}
            id="message"
            label="Message"
            multiline
            className="textarea"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            error={errors?.message?.message ? true : false}
            helperText={errors?.message?.message?.toString()}
            fullWidth
          />
          <Button
            onClick={handleSubmit(onEnquirySubmit)}
            variant="contained"
            color="secondary"
            className="btn-submit"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </section>
  );
};
export default ContactForm;
