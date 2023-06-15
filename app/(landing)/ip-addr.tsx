"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import useCopyToClipboard from "@hooks/copyToClipboard";

const IP = "play.deltacraft.eu";

const IpAddress: React.FC = () => {
  const { handleCopy, isCopied } = useCopyToClipboard();
  return (
    <Box
      sx={{ userSelect: "text", mx: 5 }}
      onMouseUp={event => {
        event.preventDefault();
        event.stopPropagation();
        handleCopy(IP);

        if (window && window.getSelection) {
          window.getSelection()?.removeAllRanges();
        } else if (document.getSelection()) {
          document.getSelection()?.empty();
        }
      }}
    >
      <Tooltip
        title={<Typography>Zkopírováno</Typography>}
        arrow
        open={isCopied}
        disableHoverListener
        disableTouchListener
        disableFocusListener
      >
        <Typography
          onClick={event => {
            event.preventDefault();
            event.stopPropagation();

            handleCopy(IP);
          }}
          sx={{ fontSize: 24, cursor: "pointer" }}
        >
          {IP}
        </Typography>
      </Tooltip>
    </Box>
  );
};

export default IpAddress;
