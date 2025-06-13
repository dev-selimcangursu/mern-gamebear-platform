import React from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";
import Header from "../../components/Header/Header";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import HomePlatform from "./components/HomePlatform/HomePlatform";
import HomeDiscount from "./components/HomeDiscount/HomeDiscount";
import HomeBestSellers from "./components/HomeBestSellers/HomeBestSellers";
import HomeMidPageBanner from "./components/HomeMidPageBanner/HomeMidPageBanner";
import HomeReferance from "./components/HomeReferance/HomeReferance";
import HomeSubscription from "./components/HomeSubscription/HomeSubscription";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <HomePlatform />
      <HomeDiscount />
      <HomeMidPageBanner />
      <HomeBestSellers />
      <HomeReferance />
      <HomeSubscription />
      <Footer />
    </>
  );
}

export default Home;
