import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { loginBanner, headerLogo } from "../../../../assets/images";
import React, { useEffect } from "react";
import { HttpStatusCodes } from "../../../../utility/enums";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { DeveloperAppRoutes } from "../../../../utility/app-routes";
import { getToken, setAuthorization } from "../../../../utility/auth-guard";
import { hideLoader, showLoader } from "../../../../utility/helper";
import { signUp } from "../../../../services";

const AdminSignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("AbleLink@321");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [secret, setSecret] = React.useState("");

  const onClickSignUp = async () => {
    try {
      showLoader();
      const { data } = await signUp({
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        secret,
      });
      if (data && data.status === HttpStatusCodes.Ok) {
        toast.success("Successfully user added.");
        navigate(DeveloperAppRoutes.adminLogin);
      } else {
        toast.error("Something went wrong, Please try again.");
      }
    } finally {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("AbleLink@321");
      setPhoneNumber("");
      setSecret("");
      hideLoader();
    }
  };
  useEffect(() => {
    const sessionToken = getToken();
    if (sessionToken) navigate(DeveloperAppRoutes.adminInquiry);
  }, []);
  return (
    <section className="login-wrapper">
      <Grid container className="login-container">
        <Grid item xs={12} lg={6} className="login-banner">
          <img src={loginBanner} alt="Banner" />
        </Grid>

        <Grid item xs={12} lg={6} className="login-content-container">
          <div className="login-content">
            <a href="/" className="logo login-logo" title="AbleLink Care">
              <img src={headerLogo} alt="AbleLink Care" />
            </a>
            <div className="login-content-form">
              <Typography variant="h3">Add Admin Account</Typography>
              <div
                className="login-form-control"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <FormControl variant="outlined">
                  <InputLabel htmlFor="username">Enter your secret</InputLabel>
                  <OutlinedInput
                    id="secret"
                    type="password"
                    className="with-icon"
                    value={secret}
                    onChange={(e) => setSecret(e.target.value)}
                    label="Secret"
                  />
                </FormControl>
                {secret === "AbleLink@880459200" ? (
                  <>
                    <FormControl variant="outlined">
                      <InputLabel htmlFor="username">First Name</InputLabel>
                      <OutlinedInput
                        id="firstName"
                        className="with-icon"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        label="First Name"
                      />
                    </FormControl>
                    <FormControl variant="outlined">
                      <InputLabel htmlFor="username">Last Name</InputLabel>
                      <OutlinedInput
                        id="lastName"
                        className="with-icon"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        label="Last Name"
                      />
                    </FormControl>
                    <FormControl variant="outlined">
                      <InputLabel htmlFor="username">Email</InputLabel>
                      <OutlinedInput
                        id="email"
                        className="with-icon"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Last Name"
                      />
                    </FormControl>
                    <FormControl variant="outlined">
                      <InputLabel htmlFor="username">Phone Number</InputLabel>
                      <OutlinedInput
                        id="phone"
                        className="with-icon"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        label="Phone Number"
                      />
                    </FormControl>
                    <Button
                      variant="contained"
                      color="secondary"
                      title="Sign up"
                      className="login-btn"
                      disableElevation
                      disableRipple
                      disableFocusRipple
                      onClick={onClickSignUp}
                    >
                      Sign up
                    </Button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default AdminSignUpPage;
