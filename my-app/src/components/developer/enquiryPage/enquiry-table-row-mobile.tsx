import {
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
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

type ComponentProps = {
  row: IEnquiryRecords;
  handleOnClickMarkAsResolved: any;
  handleOnClickDelete: any;
};
export const EnquiryTableRowMobile = (props: ComponentProps) => {
  // Extract Props
  const { row, handleOnClickMarkAsResolved, handleOnClickDelete } = props;

  const [tableCardMenu, setTableCardMenu] = useState<null | HTMLElement>(null);
  const open = Boolean(tableCardMenu);
  const TableCardOpen = Boolean(tableCardMenu);
  const handleTableCardMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setTableCardMenu(event.currentTarget);
  };
  const handleTableCardMenuClose = () => {
    setTableCardMenu(null);
  };
  const [tablePopupopen, setTablePopupOpen] = useState(false);
  const handleTablePopupOpen = () => setTablePopupOpen(true);
  const handleTablePopupClose = () => setTablePopupOpen(false);

  return (
    <Card className="tabledata-card">
      <CardContent>
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
        <Typography variant="h6">
          Created On: <span>{getDateLabel(row.createdDate)}</span>
        </Typography>

        <IconButton
          id="table-card-menu-button"
          aria-controls={open ? "table-card-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
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
            "aria-labelledby": "table-card-button",
          }}
          className="table-card-menu"
        >
          <MenuItem
            onClick={() => {
              handleTableCardMenuClose();
              handleOnClickMarkAsResolved(row.id, row.isResolved);
            }}
          >
            <img src={checkCirclePrimaryIcon} alt="Icon" />

            {row.isResolved ? "Mark as unresolved" : "Mark as resolved"}
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleTableCardMenuClose();
              handleOnClickDelete(row.id);
            }}
          >
            <img src={deletePrimaryIcon} alt="Icon" />
            {row.isDeleted ? "Undo delete" : "Delete"}
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleTableCardMenuClose();
              handleTablePopupOpen();
            }}
          >
            <img src={eyeOpenPrimaryIcon} alt="Icon" />
            View More
          </MenuItem>
        </Menu>
      </CardContent>
      <ViewMoreInquiry
        row={row}
        tablePopupopen={tablePopupopen}
        handleTablePopupClose={handleTablePopupClose}
      />
    </Card>
  );
};
