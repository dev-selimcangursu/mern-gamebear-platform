import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../Footer.module.css";

function FooterLinks() {
  return (
    <>
      <Box className={styles.column}>
        <Typography variant="h6" gutterBottom>
          Hakkımızda
        </Typography>
        <ul className={styles.linkList}>
          <li className={styles.linkItem}>Hakkımızda</li>
          <li className={styles.linkItem}>Satıcı Hesap Başvurusu</li>
          <li className={styles.linkItem}>Bize Ulaşın</li>
          <li className={styles.linkItem}>Kişisel Verilerin Korunması</li>
          <li className={styles.linkItem}>İlan Sözleşmesi</li>
          <li className={styles.linkItem}>Çerez Politikası</li>
          <li className={styles.linkItem}>Gizlilik Politikası</li>
          <li className={styles.linkItem}>Aydınlatma Politikası</li>
        </ul>
      </Box>

      <Box className={styles.column}>
        <Typography variant="h6" gutterBottom>
          Yardım
        </Typography>
        <ul className={styles.linkList}>
          <li className={styles.linkItem}>Giriş Yap</li>
          <li className={styles.linkItem}>Kayıt Ol</li>
          <li className={styles.linkItem}>Profilim</li>
          <li className={styles.linkItem}>Şifremi Unuttum</li>
          <li className={styles.linkItem}>Öneri ve Şikayet</li>
          <li className={styles.linkItem}>Sıkça Sorulan Sorular</li>
        </ul>
      </Box>
    </>
  );
}

export default FooterLinks;
