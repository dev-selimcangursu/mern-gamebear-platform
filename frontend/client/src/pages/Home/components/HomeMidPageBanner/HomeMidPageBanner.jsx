import React from "react";
import styles from "./HomeMidPageBanner.module.css";
import Banner1 from '../../../../assets/banner-1.png'
import Banner2 from '../../../../assets/banner-2.png'
import Banner3 from '../../../../assets/banner-3.png'

function HomeMidPageBanner() {
  return (
    <div className={styles.wrapper}>
      {/* Üst Büyük Banner */}
      <div className={styles.topBanner}>
        <img
          src={Banner1}
          alt="Ana Banner"
        />
      </div>

      {/* Alt Yan Yana 2 Banner */}
      <div className={styles.bottomBanners}>
        <div className={styles.smallBanner}>
          <img
            src={Banner2}
            alt="Sol Banner"
          />
        </div>
        <div className={styles.smallBanner}>
          <img
            src={Banner3}
            alt="Sağ Banner"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeMidPageBanner;
