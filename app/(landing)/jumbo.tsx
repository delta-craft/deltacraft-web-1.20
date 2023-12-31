/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { BsDiscord } from "react-icons/bs";
import MapIcon from "@mui/icons-material/Map";
import RedditIcon from "@mui/icons-material/Reddit";
import Tooltip from "@mui/material/Tooltip";
import IpAddress from "./ip-addr";

const LINKS = [
  { url: "https://discord.gg/Hr47USxa", icon: <BsDiscord fontSize="inherit" />, title: "Discord" },
  {
    url: "https://map.deltacraft.eu",
    icon: <MapIcon fontSize="inherit" />,
    title: "Dynmap",
  },
  {
    url: "https://reddit.com/r/Delta_Craft",
    icon: <RedditIcon fontSize="inherit" />,
    title: "Reddit",
  },
];

const LandingJumbo: React.FC = () => {
  return (
    <Box
      sx={theme => ({
        overflow: "hidden",
        userSelect: "none",
        height: `calc(100svh - ${64}px)`,
        [theme.breakpoints.down("md")]: {
          height: `calc(100svh - ${56}px)`,
        },
        backgroundImage: "url(/images/2023-06-15_13.48.42.png.webp)",
        "& .content": {
          position: "absolute",
          inset: 0,
        },
      })}
    >
      <Box sx={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,.6)" }} />
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
        <Typography
          variant="h1"
          fontWeight="bold"
          sx={theme => ({
            [theme.breakpoints.down("md")]: {
              fontSize: 48,
            },
          })}
        >
          DeltaCraft
        </Typography>

        <IpAddress />

        <Box sx={{ display: "flex", gap: 2 }}>
          {LINKS.map(link => (
            <Tooltip key={link.url} title={<Typography>{link.title}</Typography>}>
              <a href={link.url} target="_blank" rel="noreferrer">
                <IconButton size="large">{link.icon}</IconButton>
              </a>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LandingJumbo;
