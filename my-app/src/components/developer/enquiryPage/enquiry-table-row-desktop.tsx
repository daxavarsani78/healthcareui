import {
  IconButton,
  Menu,
  MenuItem,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { IEnquiryRecords } from "../../../utility/interfaces/enquiry-records";
import { useState } from "react";
import {
  checkCirclePrimaryIcon,
  deletePrimaryIcon,
  eyeOpenPrimaryIcon,
  menuDotsIcon,
} from "../../../assets/images";
import { getDateLabel } from "../../../utility/helper";
import { ViewMoreInquiry } from "./view-more-inquiry";
import { AlertConfirmation } from "../alert-conformation";

type ComponentProps = {
  row: IEnquiryRecords;
  handleOnClickMarkAsResolved: any;
  handleOnClickDelete: any;
};
export const EnquiryTableRowDesktop = (props: ComponentProps) => {
  // Extract Props
  const { row, handleOnClickMarkAsResolved, handleOnClickDelete } = props;
  const [menu, setMenu] = useState<null | HTMLElement>(null);
  const open = Boolean(menu);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenu(event.currentTarget);
  };
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isUpdateStatusModal, setIsUpdateStatusModal] = useState(false);

  const handleMenuClose = () => {
    setMenu(null);
  };

  const [tablePopupopen, setTablePopupOpen] = useState(false);
  const handleTablePopupOpen = () => setTablePopupOpen(true);
  const handleTablePopupClose = () => setTablePopupOpen(false);
  const handleOnDeleteButtonClick = async () => {
    setIsDeleteModal(false);
    await handleOnClickDelete(row.id);
  };
  const handleOnUpdateStatus = async () => {
    setIsUpdateStatusModal(false);
    await handleOnClickMarkAsResolved(row.id, row.isResolved);
  };
  return (
    <>
      <TableRow
        key={row.id}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <TableCell component="th" scope="row">
          <Typography variant="body1" className="name">
            {row.name}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body1" className="name">
            <a href={"mailto:" + `${row.email}`} className="table-link">
              {row.email}
            </a>
          </Typography>
        </TableCell>
        <TableCell>
          <a href={"tel:" + `${row.phoneNumber}`} className="table-link">
            {row.phoneNumber}
          </a>
        </TableCell>
        <TableCell>{row.isResolved ? "Yes" : "No"}</TableCell>
        <TableCell>{getDateLabel(row.createdDate)}</TableCell>
        <TableCell className="col-message">
          <Typography>{row.message}</Typography>
        </TableCell>
        <TableCell className="col-message-btn">
          <IconButton
            id="table-menu-button"
            aria-controls={open ? "table-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
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
              "aria-labelledby": "table-button",
            }}
            className="table-menu"
          >
            <MenuItem
              onClick={() => {
                handleMenuClose();
                setIsUpdateStatusModal(true);
              }}
            >
              <img src={checkCirclePrimaryIcon} alt="Icon" />
              {row.isResolved ? "Mark as unresolved" : "Mark as resolved"}
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                setIsDeleteModal(true);
              }}
            >
              <img src={deletePrimaryIcon} alt="Icon" />
              {row.isDeleted ? "Undo delete" : "Delete"}
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                handleTablePopupOpen();
              }}
            >
              <img src={eyeOpenPrimaryIcon} alt="Icon" />
              View More
            </MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
      <AlertConfirmation
        alertMessage="Are you sure you want to delete this record?"
        cancelText="No, Keep"
        isModalOpen={isDeleteModal}
        handleOnCancel={() => setIsDeleteModal(false)}
        handleOnSubmit={handleOnDeleteButtonClick}
        submitText="Yes,  Delete"
      />
      <AlertConfirmation
        alertMessage={`Are you sure you want to update this record as ${
          row.isResolved ? "unresolved" : "resolved"
        }? `}
        cancelText="No, Don't"
        isModalOpen={isUpdateStatusModal}
        handleOnCancel={() => setIsUpdateStatusModal(false)}
        handleOnSubmit={handleOnUpdateStatus}
        submitText="Yes,  Do"
      />
      <ViewMoreInquiry
        row={row}
        tablePopupopen={tablePopupopen}
        handleTablePopupClose={handleTablePopupClose}
      />
    </>
  );
};
