import React from "react";
import { Box, Typography, Link } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./HeaderTopShoppingArea.module.css";

function HeaderTopShoppingArea() {
  return (
    <Link href="/sepetim" underline="none" className={styles.shoppingWrapper}>
      <ShoppingCartIcon />
      <Box className={styles.textContainer}>
        <Typography className={styles.captionGray}>Sepetim</Typography>
        <Typography className={styles.price}>0 TL</Typography>
      </Box>
    </Link>
  );
}

export default HeaderTopShoppingArea;
