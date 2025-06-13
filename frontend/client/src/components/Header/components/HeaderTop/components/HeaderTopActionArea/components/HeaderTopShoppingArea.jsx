import React from "react";
import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./HeaderTopShoppingArea.module.css";

function HeaderTopShoppingArea() {
  return (
    <Box className={styles.shoppingWrapper}>
      <ShoppingCartIcon />
      <Box className={styles.textContainer}>
        <Typography className={styles.captionGray} variant="caption">
          Sepetim
        </Typography>
        <Typography variant="caption">0 TL</Typography>
      </Box>
    </Box>
  );
}

export default HeaderTopShoppingArea;
