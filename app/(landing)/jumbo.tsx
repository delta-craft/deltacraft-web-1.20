/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const LandingJumbo: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        overflow: "hidden",
        "& img": {
          position: "absolute",
          inset: 0,
          height: `100%`,
          width: "100vw",
        },
        "& .content": {
          position: "absolute",
          inset: 0,
        },
      }}
    >
      <img src="/images/2023-06-15_13.48.42.png.webp" alt="" decoding="async" />
      <Box sx={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,.3)" }} />
      <Box
        className="content"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h1">DeltaCraft</Typography>
      </Box>
    </Box>
  );
};

export default LandingJumbo;
