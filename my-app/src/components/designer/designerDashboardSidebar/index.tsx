import { Box, List, ListItem, ListItemButton } from "@mui/material";
import React from "react";
import {
  activityActiveIcon,
  activityDefaultIcon,
  chatActiveIcon,
  chatDefaultIcon,
  dashboardActiveIcon,
  dashboardDefaultIcon,
  documentActiveIcon,
  documentDefaultIcon,
  headerLogo,
  userActiveIcon,
  userDefaultIcon,
} from "../../../assets/images";
import { AppRoutes } from "../../../utility/app-routes";

const DesignerDashboardSidebar: React.FC = () => {
  return (
    <Box className="dashboard-sidebar">
      <a
        href={AppRoutes.DesignerDashboard}
        className="header-logo"
        title="AbleLink Care"
      >
        <img src={headerLogo} alt="AbleLink Care" className="desktop" />
      </a>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <img src={dashboardDefaultIcon} alt="Icon" className="default" />
            <img src={dashboardActiveIcon} alt="Icon" className="active" />
            Dashboard
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="active">
            <img src={activityDefaultIcon} alt="Icon" className="default" />
            <img src={activityActiveIcon} alt="Icon" className="active" />
            Inquiry
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <img src={userDefaultIcon} alt="Icon" className="default" />
            <img src={userActiveIcon} alt="Icon" className="active" />
            User Management
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <img src={documentDefaultIcon} alt="Icon" className="default" />
            <img src={documentActiveIcon} alt="Icon" className="active" />
            Documents
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <img src={chatDefaultIcon} alt="Icon" className="default" />
            <img src={chatActiveIcon} alt="Icon" className="active" />
            Messages
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default DesignerDashboardSidebar;
