"use client";

import AppBar from "@mui/material/AppBar";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Box>
            <Link href="/">
              <Typography sx={{ fontWeight: "bold", fontSize: 24 }}>
                DeltaCraft - Season 5
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
