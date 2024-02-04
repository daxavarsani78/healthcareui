import {
    AppBar,
    Box,
    Button,
    ButtonProps,
    Collapse,
    IconButton,
    List,
    ListItemButton,
    MenuItem,
    MenuList,
    Modal,
    Popover,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import { AppRoutes } from "../../../utility/app-routes";
import { closeIcon, expandGreenIcon, headerLogo, menuIcon } from "../../../assets/images";

interface BgColorprop {
    bgColor: string;
}

interface ExpandMoreProps extends ButtonProps {
    expand: boolean;
}


const ExpandMore = ((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <Button {...other} />;
});


const DesignerHeader: React.FC<BgColorprop> = (props) => {
    const { bgColor } = props;

    const [serviceMenu, setServiceMenu] = React.useState<null | HTMLElement>(
        null
    );
    const handleServiceMenuClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        setServiceMenu(event.currentTarget);
    };
    const handleServiceMenuClose = () => {
        setServiceMenu(null);
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);


    return (
        <AppBar position="static" className={"header " + `${bgColor}`}>
            <Toolbar disableGutters className="header-container container" >
                <Box className="header-content">
                    <IconButton className="btn-menu" onClick={() => document.body.classList.add('sidebar-toggle')} title="Menu">
                        <img src={menuIcon} alt="Menu" />
                    </IconButton>
                    <a
                        href={AppRoutes.DesignerHomePage}
                        className="header-logo"
                        title="AbleLink Care"
                    >
                        <img
                            src={headerLogo}
                            alt="AbleLink Care"
                            className="desktop"
                        />
                    </a>
                    <Box className="nav">
                        <Button className="nav-link active" href={AppRoutes.DesignerHomePage} title="Home" onClick={() => document.body.classList.toggle('sidebar-toggle')} >
                            Home
                        </Button>
                        <Button className="nav-link" href={AppRoutes.DesignerAboutUs} title="About us" onClick={() => document.body.classList.toggle('sidebar-toggle')}>
                            About us
                        </Button>
                        <ul>
                            <li onMouseLeave={handleServiceMenuClose}>
                                <Button
                                    id="service-btn"
                                    aria-haspopup="true"
                                    className="nav-link service-link"
                                    onMouseEnter={handleServiceMenuClick}
                                    href={AppRoutes.DesignerServices}
                                >
                                    Services
                                    <img src={expandGreenIcon} alt="Icon" />
                                </Button>
                                <Popover
                                    id="service-menu"
                                    anchorEl={serviceMenu}
                                    open={Boolean(serviceMenu)}
                                    onClose={handleServiceMenuClose}
                                    className="service-menu"
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left",
                                    }}
                                >
                                    <MenuList>
                                        <MenuItem
                                            onClick={handleServiceMenuClose}
                                            className="active"
                                        >
                                            Service Details
                                        </MenuItem>
                                        <MenuItem onClick={handleServiceMenuClose}>
                                            Our Service
                                        </MenuItem>
                                    </MenuList>
                                </Popover>
                            </li>
                        </ul>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            className="nav-link service-link mobile"
                        >
                            Services
                            <img src={expandGreenIcon} alt="Icon" />
                        </ExpandMore>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <List>
                                <ListItemButton href={AppRoutes.DesignerServiceDetail}
                                    onClick={handleExpandClick}
                                >
                                    Service Details
                                </ListItemButton>
                                <ListItemButton href={AppRoutes.DesignerServices}
                                    onClick={handleExpandClick}
                                >
                                    Our Service
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Button className="nav-link" href={AppRoutes.DesignerNdis} title="NDIS"
                            onClick={() => document.body.classList.toggle('sidebar-toggle')}>
                            NDIS
                        </Button>
                    </Box>
                </Box>
                <Button variant="outlined" onClick={handleOpenModal} className="btn-get-in-touch" size="small" color="secondary">Get in Touch</Button>
            </Toolbar>

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="common-modal"
            >
                <Box className="modal-content">
                    <IconButton className="btn-close" onClick={handleCloseModal} >
                        <img src={closeIcon} alt="Close" />
                    </IconButton>
                    <Typography id="modal-modal-title" variant="h5" className="modal-title">
                        Are you sue you want to delete this account?
                    </Typography>
                    <Box className="modal-footer-btn-group">
                        <Button variant="outlined" color="secondary" className="btn-dlt" onClick={handleCloseModal}>
                            Yes, Delete
                        </Button>
                        <Button variant="contained" color="secondary" className="btn-keep" onClick={handleCloseModal}>
                            No, Keep
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </AppBar >
    );
};

export default DesignerHeader;
