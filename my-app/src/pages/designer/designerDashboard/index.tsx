import React from "react";
import DesignerDashboardHeader from "../../../components/designer/designerDashboardHeader";
import DesignerDashboardSidebar from "../../../components/designer/designerDashboardSidebar";
import { Box, Card, CardContent, FormControl, Grid, IconButton, InputAdornment, InputLabel, Menu, MenuItem, Modal, OutlinedInput, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { checkCircleIcon, checkCirclePrimaryIcon, closeIcon, deletePrimaryIcon, eyeOpenPrimaryIcon, fileIcon, menuDotsIcon, queryIcon, searchPrimaryIcon } from "../../../assets/images";

function createData(
    name: string,
    email: string,
    mobile: string,
    message: string,
    resolved: string,
) {
    return { name, email, mobile, message, resolved };
}

const rows = [
    createData('Varun Kumar', 'varunkumar@gmail.com', '+91 7866544554', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.", 'No'),
    createData('Aditya Narayan', 'adityanarayan@gmail.com', '+91 7866544554', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.", 'Yes'),
    createData('Varsha S', 'varshas@gmail.com', '+91 7866544554', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.", 'Yes'),
    createData('Kiran Kundara', 'Kirankundra@gmail.com', '+91 7866544554', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.", 'No'),
    createData('Sanchit', 'sanchit001@gmail.com', '+91 7866544554', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.", 'Yes'),
    createData('Kiran Kundara', 'Kirankundara@gmail.com', '+91 7866544554', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.", 'No'),
    createData('Mahima Shah', 'mahimashah@gmail.com', '+91 7866544554', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.", 'No'),
    createData('Lalvani Govind', 'lalvanigovind@gmail.com', '+91 7866544554', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.", 'No'),
];

const DesignerDashboard: React.FC = () => {
    const [menu, setMenu] = React.useState<null | HTMLElement>(null);
    const open = Boolean(menu);
    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenu(event.currentTarget);
    };
    const handleMenuClose = () => {
        setMenu(null);
    };

    const [tableCardMenu, setTableCardMenu] = React.useState<null | HTMLElement>(null);
    const TableCardOpen = Boolean(tableCardMenu);
    const handleTableCardMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setTableCardMenu(event.currentTarget);
    };
    const handleTableCardMenuClose = () => {
        setTableCardMenu(null);
    };

    const [tablePopupopen, setTablePopupOpen] = React.useState(false);
    const handleTablePopupOpen = () => setTablePopupOpen(true);
    const handleTablePopupClose = () => setTablePopupOpen(false);
    return (
        <div className="wrapper">
            <div className="content-wrapper">
                <DesignerDashboardSidebar />

                <main className="dashboard-main-content">
                    <div className="dashboard-overlay" onClick={(e) => document.body.classList.toggle('dashboard-sidebar-toggle')}></div>
                    <DesignerDashboardHeader />
                    <Box className="content">
                        <Grid container spacing={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}>
                            <Grid item xs={4}>
                                <Card className="dashboard-card info">
                                    <CardContent>
                                        <Box className="icon">
                                            <img src={queryIcon} alt="Icon" />
                                        </Box>
                                        <Box className="data">
                                            <Typography variant="h5" component="span" className="total">100</Typography>
                                            <Typography variant="h6" component="span" className="title">Total Query</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card className="dashboard-card success">
                                    <CardContent>
                                        <Box className="icon">
                                            <img src={fileIcon} alt="Icon" />
                                        </Box>
                                        <Box className="data">
                                            <Typography variant="h5" component="span" className="total">200</Typography>
                                            <Typography variant="h6" component="span" className="title">New Query</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card className="dashboard-card warning">
                                    <CardContent>
                                        <Box className="icon">
                                            <img src={checkCircleIcon} alt="Icon" />
                                        </Box>
                                        <Box className="data">
                                            <Typography variant="h5" component="span" className="total">80</Typography>
                                            <Typography variant="h6" component="span" className="title">Resolved Query</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Card className="table-card">
                            <Box className="table-card-header">
                                <Box className="table-markers-group">
                                    <Box className="table-markers">
                                        <img src={checkCirclePrimaryIcon} alt="Icon" />
                                        Mark as Resolved
                                    </Box>
                                    <Box className="table-markers">
                                        <img src={deletePrimaryIcon} alt="Icon" />
                                        Delete
                                    </Box>
                                </Box>

                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="search">Search</InputLabel>
                                    <OutlinedInput
                                        placeholder="Search by"
                                        id="search"
                                        className="with-icon"
                                        type="text"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="end"
                                                    disableFocusRipple
                                                    disableRipple
                                                >
                                                    <img src={searchPrimaryIcon} alt="Icon" />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Box>
                            <TableContainer sx={{ display: { xs: "none", md: "block" } }}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ width: { lg: "150px" } }}>
                                                <span>
                                                    Full Name
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <span>
                                                    Email ID
                                                </span>
                                            </TableCell>
                                            <TableCell sx={{ width: { lg: "150px" } }}>
                                                <span>
                                                    Mobile Number
                                                </span>
                                            </TableCell>
                                            <TableCell sx={{ width: { lg: "120px" } }}>
                                                <span>
                                                    Is Resolved
                                                </span>
                                            </TableCell>
                                            <TableCell className="col-message">
                                                <span>
                                                    Message
                                                </span>
                                            </TableCell>
                                            <TableCell sx={{ width: { lg: "80px" } }}>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    <Typography variant="body1"></Typography>
                                                    {row.name}
                                                </TableCell>
                                                <TableCell>
                                                    <a href={"mailto:" + `${row.email}`} className="table-link">
                                                        {row.email}
                                                    </a>
                                                </TableCell>
                                                <TableCell>
                                                    <a href={"tel:" + `${row.mobile}`} className="table-link">
                                                        {row.mobile}
                                                    </a>
                                                </TableCell>
                                                <TableCell>{row.resolved}</TableCell>
                                                <TableCell className="col-message">
                                                    <Typography>
                                                        {row.message}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell className="col-message-btn">
                                                    <IconButton
                                                        id="table-menu-button"
                                                        aria-controls={open ? 'table-menu' : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? 'true' : undefined}
                                                        onClick={handleMenuClick}
                                                        className="btn-table-menu"
                                                    >
                                                        <img src={menuDotsIcon} alt="Menu" />
                                                    </IconButton>
                                                    <Menu
                                                        id="table-menu"
                                                        anchorEl={menu}
                                                        open={open}
                                                        onClose={handleMenuClose}
                                                        MenuListProps={{
                                                            'aria-labelledby': 'table-button',
                                                        }}
                                                        className="table-menu"
                                                    >
                                                        <MenuItem onClick={handleMenuClose}>
                                                            <img src={checkCirclePrimaryIcon} alt="Icon" />
                                                            Mark as Resolved
                                                        </MenuItem>
                                                        <MenuItem onClick={handleMenuClose}>
                                                            <img src={deletePrimaryIcon} alt="Icon" />
                                                            Delete
                                                        </MenuItem>
                                                        <MenuItem onClick={handleTablePopupOpen}>
                                                            <img src={eyeOpenPrimaryIcon} alt="Icon" />
                                                            View More
                                                        </MenuItem>
                                                    </Menu>

                                                    <Modal
                                                        open={tablePopupopen}
                                                        onClose={handleTablePopupClose}
                                                        aria-labelledby="modal-modal-title"
                                                        aria-describedby="modal-modal-description"
                                                        className="common-modal table-modal"
                                                    >
                                                        <Box className="modal-content">
                                                            <Box className="modal-content-inner">
                                                                <IconButton className="btn-close" onClick={handleTablePopupClose} >
                                                                    <img src={closeIcon} alt="Close" />
                                                                </IconButton>
                                                                <Typography variant="h6">
                                                                    Name: <span>{row.name}</span>
                                                                </Typography>
                                                                <Typography variant="h6">
                                                                    Email: <span>
                                                                        <a href={"mailto:" + `${row.email}`} className="table-link">
                                                                            {row.email}
                                                                        </a>
                                                                    </span>
                                                                </Typography>
                                                                <Typography variant="h6">
                                                                    Phone Number: <span>
                                                                        <a href={"tel:" + `${row.mobile}`} className="table-link">
                                                                            {row.mobile}
                                                                        </a>
                                                                    </span>
                                                                </Typography>
                                                                <Typography variant="h6">
                                                                    Is Resolved?: <span>{row.resolved}</span>
                                                                </Typography>
                                                                <Typography variant="h6">
                                                                    Message:
                                                                </Typography>
                                                                <Typography variant="h6" className="message">
                                                                    {row.message}
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    </Modal>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Box
                                sx={{ display: { xs: "block", md: "none" } }}
                                className="tabledata-cards-group"
                            >
                                {rows.map((row) => (
                                    <Card className="tabledata-card">
                                        <CardContent>
                                            <Typography variant="h6">
                                                Name: <span>{row.name}</span>
                                            </Typography>
                                            <Typography variant="h6">
                                                Email: <span>
                                                    <a href={"mailto:" + `${row.email}`} className="table-link">
                                                        {row.email}
                                                    </a>
                                                </span>
                                            </Typography>
                                            <Typography variant="h6">
                                                Phone Number: <span>
                                                    <a href={"tel:" + `${row.mobile}`} className="table-link">
                                                        {row.mobile}
                                                    </a>
                                                </span>
                                            </Typography>
                                            <Typography variant="h6">
                                                Is Resolved?: <span>{row.resolved}</span>
                                            </Typography>
                                            <Typography variant="h6">
                                                Message:
                                            </Typography>
                                            <Typography variant="h6" className="message">
                                                {row.message}
                                            </Typography>

                                            <IconButton
                                                id="table-card-menu-button"
                                                aria-controls={open ? 'table-card-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleTableCardMenuClick}
                                                className="btn-table-card"
                                            >
                                                <img src={menuDotsIcon} alt="Menu" />
                                            </IconButton>
                                            <Menu
                                                id="table-card-menu"
                                                anchorEl={tableCardMenu}
                                                open={TableCardOpen}
                                                onClose={handleTableCardMenuClose}
                                                MenuListProps={{
                                                    'aria-labelledby': 'table-card-button',
                                                }}
                                                className="table-card-menu"
                                            >
                                                <MenuItem onClick={handleTableCardMenuClose}>
                                                    <img src={checkCirclePrimaryIcon} alt="Icon" />
                                                    Mark as Resolved
                                                </MenuItem>
                                                <MenuItem onClick={handleTableCardMenuClose}>
                                                    <img src={deletePrimaryIcon} alt="Icon" />
                                                    Delete
                                                </MenuItem>
                                            </Menu>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Box>
                            <Box className="table-pagination">
                                <Pagination count={5} variant="outlined" shape="rounded" showFirstButton showLastButton />
                                <Typography variant="h6" className="row-num">
                                    1 of 20 pages &#40;70 items&#41;
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                </main>
            </div>
        </div>
    );
};
export default DesignerDashboard;