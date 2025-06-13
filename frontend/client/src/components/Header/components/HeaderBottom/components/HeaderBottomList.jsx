import React from "react";
import { List, ListItem, Link } from "@mui/material";
import styles from "./HeaderBottomList.module.css";

function HeaderBottomList() {
  const menuItems = [
    { label: "Tüm Oyunlar", href: "#" },
    { label: "İndirimli Oyunlar", href: "#" },
    { label: "Elektronik Ürünler", href: "#" },
  ];

  return (
    <List className={styles.list}>
      {menuItems.map((item) => (
        <ListItem key={item.label} disablePadding className={styles.listItem}>
          <Link href={item.href} className={styles.link}>
            {item.label}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default HeaderBottomList;
