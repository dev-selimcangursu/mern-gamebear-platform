import React from "react";
import { Box } from "@mui/material";
import HeaderTopContactInfo from "./components/HeaderTopContactInfo";
import HeaderTopLoginInfo from "./components/HeaderTopLoginInfo";
import HeaderTopShoppingArea from "./components/HeaderTopShoppingArea";
import styles from "./HeaderTopAction.module.css";

function HeaderTopAction() {
  return (
    <Box className={styles.actionWrapper}>
      <HeaderTopContactInfo />
      <HeaderTopLoginInfo />
      <HeaderTopShoppingArea />
    </Box>
  );
}

export default HeaderTopAction;
