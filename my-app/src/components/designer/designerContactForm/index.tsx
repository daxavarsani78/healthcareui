import {
    Box,
    Button,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { mailDarkIcon } from "../../../assets/images";

const DesignerContactForm: React.FC = () => {

    return (
        <section className="contact-form">
            <Box className="container">
                <Box className="contact-form-content">
                    <Typography variant="h2" className="heading contact-form-heading">Feel Free Don’t Hesitate To Contact With Us</Typography>

                    <Box className="email-box">
                        <div className="email-icon">
                            <img src={mailDarkIcon} alt="mail" />
                        </div>
                        <div className="email-info">
                            <Typography variant="body2" component="label">Email</Typography>
                            <Link href="mailto:help@ablelinkcare.com">help@ablelinkcare.com</Link>
                        </div>
                    </Box>
                </Box>
                <Box className="contact-form-card">
                    <TextField id="fullname" label="Full Name" variant="outlined" fullWidth />
                    <TextField id="emailId" label="Email ID" variant="outlined" fullWidth />
                    <TextField id="phomeNumber" label="Mobile Number" variant="outlined" fullWidth />
                    <TextField
                        id="message"
                        label="Message"
                        multiline
                        className="textarea"
                        fullWidth
                    />
                    <Button variant="contained" color="secondary" className="btn-submit">Submit</Button>
                </Box>
            </Box>
        </section>
    );
};

export default DesignerContactForm;
