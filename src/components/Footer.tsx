import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#272b33",
        color: "#fff",
        padding: "20px 0",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          marginBottom: "10px",
          "& a": {
            color: "inherit",
            transition: "color 0.3s",
            "&:hover": {
              color: "#ff9800",
            },
          },
        }}
      >
        <Link
          href="https://github.com/samuelSml8"
          target="_blank"
          rel="noopener"
        >
          <GitHub fontSize="large" />
        </Link>
        <Link
          href="https://linkedin.com/in/samuelsml"
          target="_blank"
          rel="noopener"
        >
          <LinkedIn fontSize="large" />
        </Link>
      </Box>
      <Typography variant="body2" sx={{ fontFamily: "Arial, sans-serif" }}>
        All rights reserved © {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
