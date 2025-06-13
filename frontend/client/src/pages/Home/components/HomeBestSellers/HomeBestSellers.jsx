import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import styles from "./HomeBestSellers.module.css";
import ProductCard from "../../../../components/ProductCard/ProductCard";

function HomeBestSellers() {
  return (
   <Box component="section" className={styles.container_wrapper}>
      <Box component="section" className={styles.wrapper}>
      <Box className={styles.header}>
        <Typography className={styles.heading}>
          <ArrowDropDownCircleIcon/>
         En Çok Satan Ürünler
        </Typography>
        <Typography className={styles.subheading}>
          Bu Haftanın En Çok Satan Ürünleri
        </Typography>
      </Box>
      <Box className={styles.grid}>
        {[...Array(8)].map((_, i) => (
          <ProductCard key={i} />
        ))}
      </Box>
    </Box>
   </Box>
  )
}

export default HomeBestSellers