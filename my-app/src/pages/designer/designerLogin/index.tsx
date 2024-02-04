import {
    Box,
    Button,
    Divider,
    FormControl,
    Grid,
    Hidden,
    IconButton,
    InputAdornment,
    InputLabel,
    Modal,
    OutlinedInput,
    Typography,
} from "@mui/material";
import {
    accountIcon,
    eyeClose,
    eyeOpen,
    loginBanner,
    headerLogo,
} from "../../../assets/images";
import React from "react";
import { AppRoutes } from "../../../utility/app-routes";

const DesignerLoginPage: React.FC = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
        event.preventDefault();
    };

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
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="username">Username</InputLabel>
                                    <OutlinedInput
                                        id="username"
                                        className="with-icon"
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
                                </FormControl>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <OutlinedInput
                                        id="password"
                                        className="with-icon"
                                        type={showPassword ? "text" : "password"}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    disableFocusRipple
                                                    disableRipple
                                                >
                                                    {showPassword ? (
                                                        <img src={eyeClose} alt="show" />
                                                    ) : (
                                                        <img src={eyeOpen} alt="hide" />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    title="Sign In"
                                    href={AppRoutes.DesignerDashboard}
                                    className="login-btn"
                                    disableElevation
                                    disableRipple
                                    disableFocusRipple
                                >
                                    Sign In
                                </Button>
                                <Button
                                    color="secondary"
                                    className="back-login"
                                >
                                    Forgot password?
                                </Button>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
};

export default DesignerLoginPage;