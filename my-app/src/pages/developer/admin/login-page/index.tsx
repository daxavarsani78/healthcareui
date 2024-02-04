import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import {
  accountIcon,
  loginBanner,
  headerLogo,
} from "../../../../assets/images";
import React, { useEffect } from "react";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../../../services";
import { HttpStatusCodes } from "../../../../utility/enums";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { DeveloperAppRoutes } from "../../../../utility/app-routes";
import { getToken, setAuthorization } from "../../../../utility/auth-guard";
import { hideLoader, showLoader } from "../../../../utility/helper";

const AdminLoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [showOTPScreen, setShowOTPScreen] = React.useState(false);
  const [OTPValue, setOTPValue] = React.useState("");
  const [userNameValue, setUserNameValue] = React.useState("");

  const otpSchema = object({
    email: string().email("Email is not valid.").required("Email is required."),
  });

  const loginSchema = object({
    otp: string()
      .required("OTP is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(6, "Must be exactly 6 digits")
      .max(6, "Must be exactly 6 digits"),
  });
  // Yup resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(otpSchema),
  });

  const {
    register: loginRegister,
    handleSubmit: loginSubmit,
    formState: { errors: loginError },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onClickSendOtp = async () => {
    try {
      showLoader();
      const { data } = await login({
        email: userNameValue,
        otp: 0,
      });
      if (data && data.status === HttpStatusCodes.Ok) {
        toast.success("Please find OTP from email");
        setShowOTPScreen(true);
      } else {
        toast.error("Something went wrong, Please try again.");
      }
    } finally {
      hideLoader();
    }
  };
  const onClickLogin = async () => {
    try {
      showLoader();
      const { data } = await login({
        email: userNameValue,
        otp: +OTPValue,
      });
      if (data && data.status === HttpStatusCodes.Ok) {
        toast.success("Successfully login.");
        setAuthorization(data.response.token);
        navigate(DeveloperAppRoutes.adminInquiry);
      } else {
        toast.error("Something went wrong, Please try again.");
      }
    } finally {
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
              <Typography variant="h3">Login to your Account</Typography>
              <div
                className="login-form-control"
                style={{ display: "flex", flexDirection: "column" }}
              >
                {!showOTPScreen && (
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <OutlinedInput
                      {...register("email")}
                      error={errors?.email?.message ? true : false}
                      id="email"
                      className="with-icon"
                      value={userNameValue}
                      onChange={(e) => setUserNameValue(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            disableFocusRipple
                            disableRipple
                          >
                            <img src={accountIcon} alt="account" />
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Username"
                    />
                    <FormHelperText error id="component-error-text">
                      <>{errors?.email?.message?.toString()}</>
                    </FormHelperText>
                  </FormControl>
                )}
                {showOTPScreen && (
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="password">
                      One Time Password
                    </InputLabel>
                    <OutlinedInput
                      {...loginRegister("otp")}
                      error={loginError?.otp?.message ? true : false}
                      id="otp"
                      onChange={(e) => {
                        if (
                          +e.target.value >= 0 &&
                          +e.target.value <= 999999 &&
                          e.target.value?.length <= 6
                        )
                          setOTPValue(e.target.value);
                      }}
                      value={OTPValue}
                      className="with-icon"
                      type="number"
                      placeholder="000000"
                      label="One Time Password"
                    />
                    <FormHelperText error id="component-error-text">
                      <>{loginError?.otp?.message?.toString()}</>
                    </FormHelperText>
                  </FormControl>
                )}
                {!showOTPScreen && (
                  <Button
                    variant="contained"
                    color="secondary"
                    title="Get OTP"
                    className="login-btn"
                    disableElevation
                    disableRipple
                    disableFocusRipple
                    onClick={handleSubmit(onClickSendOtp)}
                  >
                    Get OTP
                  </Button>
                )}
                {showOTPScreen && (
                  <Button
                    variant="contained"
                    color="secondary"
                    title="Sign In"
                    href="/designer-dashboard"
                    className="login-btn"
                    disableElevation
                    disableRipple
                    disableFocusRipple
                    onClick={loginSubmit(onClickLogin)}
                  >
                    Sign In
                  </Button>
                )}
                {showOTPScreen && (
                  <Button
                    onClick={() => {
                      setShowOTPScreen(false);
                      setOTPValue("");
                    }}
                    color="secondary"
                    className="back-login"
                  >
                    Edit UserName?
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default AdminLoginPage;
