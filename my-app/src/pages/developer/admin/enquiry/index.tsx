import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  checkCircleIcon,
  fileIcon,
  queryIcon,
  searchPrimaryIcon,
} from "../../../../assets/images";
import AdminSidebar from "../../../../components/developer/admin-sidebar";
import AdminHeader from "../../../../components/developer/admin-header";
import { toast } from "react-toastify";
import { HttpStatusCodes } from "../../../../utility/enums";
import { ISearchCriteria } from "../../../../utility/interfaces";
import {
  deleteEnquiry,
  enquiryMarkAsResolved,
  getEnquiry,
} from "../../../../services";
import { IEnquiryRecords } from "../../../../utility/interfaces/enquiry-records";
import { hideLoader, showLoader } from "../../../../utility/helper";
import { EnquiryTableRowDesktop } from "../../../../components/developer/enquiryPage/enquiry-table-row-desktop";
import { EnquiryTableRowMobile } from "../../../../components/developer/enquiryPage/enquiry-table-row-mobile";

const AdminEnquiryPage: React.FC = () => {
  const [searchCriteria, setSearchCriteria] = React.useState<ISearchCriteria>({
    text: "",
    pageNumber: 1,
    rowPerPage: 10,
    sortBy: "CreatedDate",
    sortDirection: "desc",
    resolvedOnly: -1,
  });

  const [totalRecords, setTotalRecords] = React.useState(0);
  const [notDeletedRecords, setNotDeletedRecords] = React.useState(0);
  const [deletedRecords, setDeletedRecords] = React.useState(0);
  const [newEnquiry, setNewENquiry] = React.useState(0);
  const [resolvedEnquiry, setResolvedEnquiry] = React.useState(0);
  const [pageRecords, setPageRecords] = React.useState<IEnquiryRecords[]>([]);
  const onChangeSearchFields = (name: string, value: any) => {
    if (name === "sortBy") {
      setSearchCriteria({
        ...searchCriteria,
        sortBy: value,
        sortDirection: searchCriteria.sortDirection === "asc" ? "desc" : "asc",
      });
      return;
    }
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };
  const getAllEnquiry = async () => {
    try {
      showLoader();
      const { data } = await getEnquiry({
        searchText: searchCriteria.text,
        pageNumber: searchCriteria.pageNumber,
        sortBy: searchCriteria.sortBy,
        sortByeDscending:
          searchCriteria.sortDirection === "desc" ? true : false,
        resolvedOnly: searchCriteria.resolvedOnly,
      });
      if (data && data.status === HttpStatusCodes.Ok) {
        setTotalRecords(+data.response.totalRecords);
        setNewENquiry(+data.response.newRecords);
        setResolvedEnquiry(+data.response.resolvedRecords);
        setNotDeletedRecords(+data.response.notDeleteRecords);
        setDeletedRecords(+data.response.deleteRecords);
        setPageRecords(data.response.records);
      } else {
        setTotalRecords(0);
        setNewENquiry(0);
        setResolvedEnquiry(0);
        setPageRecords([]);
        setNotDeletedRecords(0);
        setDeletedRecords(0);
        toast.error("Something went wrong, Please refresh the page.");
      }
    } finally {
      hideLoader();
    }
  };
  const handleOnClickMarkAsResolved = async (
    id: number,
    isResolved: boolean
  ) => {
    try {
      showLoader();
      const { data } = await enquiryMarkAsResolved(id, isResolved);
      if (data && data.status === HttpStatusCodes.Ok) {
        getAllEnquiry();
        toast.success("Enquiry successfully updated.");
      } else {
        toast.error("Something went wrong, Please try again.");
      }
    } finally {
      hideLoader();
    }
  };
  const handleOnClickDelete = async (id: number) => {
    try {
      showLoader();
      const { data } = await deleteEnquiry(id);
      if (data && data.status === HttpStatusCodes.Ok) {
        getAllEnquiry();
        toast.success("Enquiry successfully deleted.");
      } else {
        toast.error("Something went wrong, Please try again.");
      }
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    getAllEnquiry();
  }, [searchCriteria]);

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <AdminSidebar />
        <main className="dashboard-main-content">
          <div
            className="dashboard-overlay"
            onClick={(e) =>
              document.body.classList.toggle("dashboard-sidebar-toggle")
            }
          ></div>
          <AdminHeader />
          <Box className="content">
            <Grid
              container
              spacing={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
            >
              <Grid item xs={4}>
                <Card className="dashboard-card info">
                  <CardContent>
                    <Box className="icon">
                      <img src={queryIcon} alt="Icon" />
                    </Box>
                    <Box className="data">
                      <Typography
                        variant="h5"
                        component="span"
                        className="total"
                      >
                        {notDeletedRecords}
                      </Typography>
                      <Typography
                        variant="h6"
                        component="span"
                        className="title"
                      >
                        Total Query(s)
                      </Typography>
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
                      <Typography
                        variant="h5"
                        component="span"
                        className="total"
                      >
                        {newEnquiry}
                      </Typography>
                      <Typography
                        variant="h6"
                        component="span"
                        className="title"
                      >
                        New Query(s)
                      </Typography>
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
                      <Typography
                        variant="h5"
                        component="span"
                        className="total"
                      >
                        {resolvedEnquiry}
                      </Typography>
                      <Typography
                        variant="h6"
                        component="span"
                        className="title"
                      >
                        Resolved Query(s)
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Card className="table-card">
              <Box className="table-card-header">
                {/* <Box className="table-markers-group">
                  <Box className="table-markers">
                    <img src={checkCirclePrimaryIcon} alt="Icon" />
                    Mark as Resolved
                  </Box>
                  <Box className="table-markers">
                    <img src={deletePrimaryIcon} alt="Icon" />
                    Delete
                  </Box>
                </Box> */}
                <FormControl variant="outlined">
                  <OutlinedInput
                    placeholder="Search by"
                    id="search"
                    className="with-icon"
                    type="text"
                    value={searchCriteria.text}
                    onChange={(e) => {
                      onChangeSearchFields("text", e.target.value);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end" disableFocusRipple disableRipple>
                          <img src={searchPrimaryIcon} alt="Icon" />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-label"></InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={searchCriteria.resolvedOnly}
                    label="Resolved Status"
                    onChange={(e) => {
                      setSearchCriteria({
                        ...searchCriteria,
                        pageNumber: 1,
                        resolvedOnly: +e.target.value,
                      });
                    }}
                  >
                    <MenuItem value={-1}>All</MenuItem>
                    <MenuItem value={0}>Unresolved</MenuItem>
                    <MenuItem value={1}>Resolved</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TableContainer sx={{ display: { xs: "none", md: "block" } }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          onChangeSearchFields("sortBy", "Name");
                        }}
                      >
                        <span>Name</span>
                      </TableCell>
                      <TableCell
                        style={{ cursor: "pointer" }}
                        sx={{ width: { lg: "250px" } }}
                        onClick={() => {
                          onChangeSearchFields("sortBy", "Email");
                        }}
                      >
                        <span>Email</span>
                      </TableCell>
                      <TableCell
                        style={{ cursor: "pointer" }}
                        sx={{ width: { lg: "120px" } }}
                        onClick={() => {
                          onChangeSearchFields("sortBy", "Mobile");
                        }}
                      >
                        <span>Mobile</span>
                      </TableCell>
                      <TableCell
                        style={{ cursor: "pointer" }}
                        sx={{ width: { lg: "100px" } }}
                        onClick={() => {
                          onChangeSearchFields("sortBy", "IsResolved");
                        }}
                      >
                        <span>Resolved</span>
                      </TableCell>
                      <TableCell
                        style={{ cursor: "pointer" }}
                        sx={{ width: { lg: "120px" } }}
                        onClick={() => {
                          onChangeSearchFields("sortBy", "CreatedDate");
                        }}
                      >
                        <span>Created On</span>
                      </TableCell>
                      <TableCell className="col-message">
                        <span>Message</span>
                      </TableCell>
                      <TableCell sx={{ width: { lg: "60px" } }}></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pageRecords.map((row) => (
                      <EnquiryTableRowDesktop
                        key={row.id}
                        handleOnClickDelete={handleOnClickDelete}
                        handleOnClickMarkAsResolved={
                          handleOnClickMarkAsResolved
                        }
                        row={row}
                      />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box
                sx={{ display: { xs: "block", md: "none" } }}
                className="tabledata-cards-group"
              >
                {pageRecords.map((row) => (
                  <EnquiryTableRowMobile
                    key={row.id}
                    handleOnClickDelete={handleOnClickDelete}
                    handleOnClickMarkAsResolved={handleOnClickMarkAsResolved}
                    row={row}
                  />
                ))}
              </Box>
              <Box className="table-pagination">
                <Pagination
                  count={Math.ceil(
                    (searchCriteria.resolvedOnly === -1
                      ? notDeletedRecords
                      : searchCriteria.resolvedOnly === 0
                      ? notDeletedRecords - resolvedEnquiry
                      : resolvedEnquiry) / 10
                  )}
                  variant="outlined"
                  shape="rounded"
                  showFirstButton
                  page={searchCriteria.pageNumber}
                  showLastButton
                  onChange={(e: any, value: number) => {
                    onChangeSearchFields("pageNumber", value);
                  }}
                />
                <Typography variant="h6" className="row-num">
                  {`${(searchCriteria.pageNumber - 1) * 10 + 1}-${
                    (searchCriteria.pageNumber - 1) * 10 + pageRecords.length
                  } of ${
                    searchCriteria.resolvedOnly === -1
                      ? notDeletedRecords
                      : searchCriteria.resolvedOnly === 0
                      ? notDeletedRecords - resolvedEnquiry
                      : resolvedEnquiry
                  }`}
                </Typography>
              </Box>
            </Card>
          </Box>
        </main>
      </div>
    </div>
  );
};
export default AdminEnquiryPage;
