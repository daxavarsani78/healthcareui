import { Box, IconButton, Modal, Typography } from "@mui/material";
import { IEnquiryRecords } from "../../../utility/interfaces/enquiry-records";
import { closeIcon } from "../../../assets/images";

type ComponentProps = {
  row: IEnquiryRecords;
  tablePopupopen: any;
  handleTablePopupClose: any;
};
export const ViewMoreInquiry = (props: ComponentProps) => {
  // Extract Props
  const { row, handleTablePopupClose, tablePopupopen } = props;
  return (
    <Modal
      open={tablePopupopen}
      onClose={handleTablePopupClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="common-modal table-modal"
    >
      <Box className="modal-content">
        <Box className="modal-content-inner">
          <IconButton className="btn-close" onClick={handleTablePopupClose}>
            <img src={closeIcon} alt="Close" />
          </IconButton>
          <Typography variant="h6">
            Name: <span>{row.name}</span>
          </Typography>
          <Typography variant="h6">
            Email:{" "}
            <span>
              <a href={"mailto:" + `${row.email}`} className="table-link">
                {row.email}
              </a>
            </span>
          </Typography>
          <Typography variant="h6">
            Phone Number:{" "}
            <span>
              <a href={"tel:" + `${row.phoneNumber}`} className="table-link">
                {row.phoneNumber}
              </a>
            </span>
          </Typography>
          <Typography variant="h6">
            Is Resolved?: <span>{row.isResolved ? "Yes" : "No"}</span>
          </Typography>
          <Typography variant="h6">Message:</Typography>
          <Typography variant="h6" className="message">
            {row.message}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};
