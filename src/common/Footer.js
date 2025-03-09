import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", py: 2, bgcolor: "#f5f5f5", mt: 4 }}>
      <Typography variant="body2">© 2025 My Website. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
