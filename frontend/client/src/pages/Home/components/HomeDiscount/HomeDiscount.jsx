import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import styles from "./HomeDiscount.module.css";
import ProductCard from "../../../../components/ProductCard/ProductCard";

function HomeDiscount() {
  return (
   <Box component="section" className={styles.container_wrapper}>
      <Box component="section" className={styles.wrapper}>
      <Box className={styles.header}>
        <Typography className={styles.heading}>
          <ArrowDropDownCircleIcon/>
        İndirimdeki Ürünler
        </Typography>
        <Typography className={styles.subheading}>
          Bu Haftanın İndirime Giren Ürünleri
        </Typography>
      </Box>

      <Box className={styles.grid}>
        {[...Array(8)].map((_, i) => (
          <ProductCard key={i} />
        ))}
      </Box>
    </Box>
   </Box>
  );
}

export default HomeDiscount;
