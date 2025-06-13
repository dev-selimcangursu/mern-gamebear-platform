import React from 'react'
import Box from "@mui/material/Box";
import { Link, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FavoriteIcon from "@mui/icons-material/Favorite";

function HeaderBottomActionArea() {
  return (
   <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
        <Link
          href="https://wa.me/902163459360"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#25d366",
            textDecoration: "none",
            fontSize: "12px",
            gap: 0.5,
            "&:hover": {
              fontWeight: "bold",
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: "20px" }} />
          <Typography sx={{ fontSize: "12px" }}>
            WhatsApp'tan Bize Ulaşın
          </Typography>
        </Link>
        <Link
          href="#"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "3px",
            textDecoration: "none",
            color: "black",
            fontSize: "14px",
            fontWeight: 500,
            "&:hover": {
              color: "orange",
            },
          }}
        >
          <FavoriteIcon />
          <Typography sx={{ fontSize: "12px" }}>Favorilerim</Typography>
        </Link>
      </Box>
  )
}

export default HeaderBottomActionArea