import React from "react";
import { List, ListItem, Link } from "@mui/material";

function HeaderBottomList() {
  return (
    <List sx={{ display: "flex", flexDirection: "row" }}>
      {[
        { label: "Tüm Oyunlar", href: "#" },
        { label: "İndirimli Oyunlar", href: "#" },
        { label: "Elektronik Ürünler", href: "#" },
      ].map((item) => (
        <ListItem key={item.label} disablePadding>
          <Link
            href={item.href}
            sx={{
              textDecoration: "none",
              color: "black",
              px: 1.5,
              fontSize: "15px",
              fontWeight: 500,
              "&:hover": {
                color: "orange",
              },
            }}
          >
            {item.label}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default HeaderBottomList;
