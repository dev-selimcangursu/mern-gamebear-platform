import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DevicesIcon from '@mui/icons-material/Devices';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Sidebar({ sidebarStatus, setSidebarStatus }) {
  const toggleDrawer = (open) => () => {
    setSidebarStatus(open);
  };

  const menuItems = [
    { text: "Anasayfa", icon: <HomeIcon /> },
    { text: "Oyunlar", icon: <SportsEsportsIcon /> },
    { text: "İndirimli Oyunlar", icon: <LocalOfferIcon /> },
    { text: "Elektronik Ürünler", icon: <DevicesIcon /> },
    { text: "Hakkımızda", icon: <InfoIcon /> },
    { text: "Bize Ulaşın", icon: <ContactMailIcon /> },
    { text: "Hesabım", icon: <AccountCircleIcon /> },
    { text: "Sepetim", icon: <ShoppingCartIcon /> },
  ];

  const socialLinks = [
    { icon: <InstagramIcon />, url: "https://www.instagram.com" },
    { icon: <TwitterIcon />, url: "https://www.twitter.com" },
    { icon: <FacebookIcon />, url: "https://www.facebook.com" },
    { icon: <YouTubeIcon />, url: "https://www.youtube.com" },
  ];

  const DrawerList = (
    <Box
      sx={{
        width: 260,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between'
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {/* Logo */}
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 70,
            backgroundColor: '#FF5F1F',
            color: '#fff',
            mb: 1
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            GameBear
          </Typography>
        </Box>
        <Divider />

        {/* Menu List */}
        <List>
          {menuItems.map(({ text, icon }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ "&:hover": { backgroundColor: "#f0f0f0" } }}>
                <ListItemIcon sx={{  color: '#FF5F1F' }}>{icon}</ListItemIcon>
                <ListItemText primary={text} sx={{ fontSize: "12px" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Footer - Social Media */}
      <Box sx={{ textAlign: 'center', pb: 2 }}>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle2" sx={{ mb: 1, color: '#888' }}>
          Bizi Takip Et
        </Typography>
        <Box>
          {socialLinks.map(({ icon, url }, index) => (
            <IconButton
              key={index}
              component="a"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#666',
                '&:hover': {
                  color: '#FF5F1F'
                }
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );

  return (
    <Drawer anchor="left" open={sidebarStatus} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}

export default Sidebar;
