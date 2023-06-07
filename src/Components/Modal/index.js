import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";

export default function ModalContent({state}) {
    const [modal,Setmodal] = useState(state);
    const Toogle = () => Setmodal(!modal);
  return (
    <>

      <Modal
        open={state}
        onClose={Toogle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
