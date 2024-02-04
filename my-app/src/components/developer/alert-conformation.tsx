import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { closeIcon } from "../../assets/images";

type ComponentProps = {
  alertMessage: string;
  handleOnSubmit: any;
  handleOnCancel: any;
  submitText: string;
  cancelText: string;
  isModalOpen: boolean;
};

export const AlertConfirmation = (props: ComponentProps) => {
  // Extract Props
  const {
    alertMessage,
    handleOnSubmit,
    handleOnCancel,
    submitText,
    cancelText,
    isModalOpen,
  } = props;

  return (
    <Modal
      open={isModalOpen}
      onClose={handleOnCancel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="common-modal"
    >
      <Box className="modal-content">
        <IconButton className="btn-close" onClick={handleOnCancel}>
          <img src={closeIcon} alt="Close" />
        </IconButton>
        <Typography id="modal-modal-title" variant="h5" className="modal-title">
          {alertMessage}
        </Typography>
        <Box className="modal-footer-btn-group">
          <Button
            variant="outlined"
            color="secondary"
            className="btn-dlt"
            onClick={handleOnSubmit}
          >
            {submitText}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="btn-keep"
            onClick={handleOnCancel}
          >
            {cancelText}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
