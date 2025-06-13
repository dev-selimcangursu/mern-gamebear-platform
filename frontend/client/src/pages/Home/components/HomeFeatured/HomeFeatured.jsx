import React from "react";
import styles from "./HomeFeatured.module.css";
import Box from "@mui/material/Box";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import { Typography } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";

const features = [
  {
    title: "Ücretsiz Kargo",
    desc: "600TL ve Üzeri Tüm Siparişlerde",
    icon: <FireTruckIcon fontSize="large" className={styles.icon__color} />,
  },
  {
    title: "Güvenli Ödeme",
    desc: "3D Secure & SSL Sertifikası ile Korunur",
    icon: <PaymentIcon fontSize="large" className={styles.icon__color} />,
  },
  {
    title: "Hızlı Teslimat",
    desc: "1-3 İş Günü İçinde Teslimat Garantisi",
    icon: <RocketLaunchIcon fontSize="large" className={styles.icon__color} />,
  },
  {
    title: "Kolay İade",
    desc: "14 Gün İçinde Koşulsuz Şartsız İade",
    icon: (
      <AssignmentReturnIcon fontSize="large" className={styles.icon__color} />
    ),
  },
];

function HomeFeatured() {
  return (
    <Box className={styles.home__featured__wrapper} component="section">
      {features.map((item, index) => (
        <Box key={index} className={styles.feature__item}>
          <Box className={styles.icon__wrapper}>{item.icon}</Box>
          <Box>
            <Typography variant="h6" component="h5" className={styles.title}>
              {item.title}
            </Typography>
            <Typography component="small" className={styles.desc}>
              {item.desc}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default HomeFeatured;
