"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";

const Mods: React.FC = () => {
  return (
    <Container
      sx={theme => ({
        p: 2,
        py: 4,
        display: "flex",
        gap: 2,

        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },

        "& > div": {
          display: "flex",
          flexDirection: "column",
          width: "100%",

          "& a": {
            color: theme.palette.primary.main,
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
              color: theme.palette.primary.dark,
            },
          },
        },
      })}
      maxWidth="lg"
      component="section"
    >
      {/* <Box>
        <Typography variant="h2" textAlign="center">
          O serveru
        </Typography>
      </Box> */}
      <Box>
        <Typography variant="h2" textAlign="center">
          Instalace modů
        </Typography>
        <Box component="ul">
          <Typography component="li">
            Fabric Loader -{" "}
            <a href="https://fabricmc.net/use/installer/" target="_blank" rel="noreferrer">
              https://fabricmc.net/use/installer/
            </a>
          </Typography>
          <Typography component="li">
            Mody (rozbalit do &lsquo;mods&rsquo; v instalaci se hrou) -{" "}
            <a href="/downloads/mods-1.20.1.zip" download>
              download
            </a>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Mods;
