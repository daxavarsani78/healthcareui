import {
    AppBar,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import { bellIcon, calendarIcon, expandMoreIcon, menuIcon, profileAdmin } from "../../../assets/images";


const DesignerDashboardHeader: React.FC = () => {
    const [profile, setProfile] = React.useState<null | HTMLElement>(null);
    const open = Boolean(profile);
    const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setProfile(event.currentTarget);
    };
    const handleProfileClose = () => {
        setProfile(null);
    };
    return (
        <AppBar position="relative" className="dashboard-header">
            <Toolbar disableGutters className="dashboard-header-container" >
                <Box sx={{ display: "flex", alignItems: "center", columnGap: { xs: "8px", md: "20px" } }}>
                    <IconButton className="btn-menu" onClick={() => document.body.classList.toggle('dashboard-sidebar-toggle')} title="Menu">
                        <img src={menuIcon} alt="Menu" />
                    </IconButton>
                    <Typography variant="h5" className="dashboard-header-title">Inquiry</Typography>
                </Box>
                <Box className="dashboard-header-content">
                    <Box className="dashboard-header-btn-group">
                        <IconButton>
                            <img src={calendarIcon} alt="Calendar" />
                        </IconButton>
                        <IconButton>
                            <img src={bellIcon} alt="Bell" />
                        </IconButton>
                    </Box>
                    <Button
                        id="profile-button"
                        aria-controls={open ? 'profile-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleProfileClick}
                        className="btn-profile"
                    >
                        <img src={profileAdmin} alt="Profile" />
                        <Box component="span" className="profile-info">
                            <Typography variant="body1" component="span" className="profile-name">John Doe</Typography>
                            <Typography variant="body2" component="span" className="profile-id  ">#2365</Typography>
                        </Box>
                        <Box className="arrow" component="span">
                            <img src={expandMoreIcon} alt="Icon" />
                        </Box>
                    </Button>
                    <Menu
                        id="profile-menu"
                        anchorEl={profile}
                        open={open}
                        onClose={handleProfileClose}
                        MenuListProps={{
                            'aria-labelledby': 'profile-button',
                        }}
                        className="profile-menu"
                    >
                        <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
                        <MenuItem onClick={handleProfileClose}>My account</MenuItem>
                        <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar >
    );
};

export default DesignerDashboardHeader;
