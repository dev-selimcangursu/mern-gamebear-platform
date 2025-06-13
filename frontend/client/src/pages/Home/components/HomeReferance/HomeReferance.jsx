import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "./HomeReferance.module.css";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  Rating,
} from "@mui/material";

const reviews = [
  {
    name: "Ali Yılmaz",
    comment:
      "Ürün gerçekten çok kaliteli ve hızlı kargolandı. Teşekkür ederim!",
    image: "https://i.pravatar.cc/100?img=1",
    rating: 5,
  },
  {
    name: "Ayşe Demir",
    comment: "Satıcı çok ilgiliydi. Üründen memnun kaldım, tavsiye ederim.",
    image: "https://i.pravatar.cc/100?img=2",
    rating: 4,
  },
  {
    name: "Mehmet Kaya",
    comment: "Müşteri hizmetleri çok yardımcı oldu. Sorunsuz alışverişti.",
    image: "https://i.pravatar.cc/100?img=3",
    rating: 5,
  },
  {
    name: "Zeynep Acar",
    comment: "Harika bir deneyimdi, tekrar sipariş vereceğim.",
    image: "https://i.pravatar.cc/100?img=4",
    rating: 4,
  },
  {
    name: "Emre Uysal",
    comment: "Ürün beklediğimden daha güzel çıktı. Teşekkürler!",
    image: "https://i.pravatar.cc/100?img=5",
    rating: 5,
  },
];

function HomeReferance() {
  return (
    <Box className={styles.wrapper}>
      <Typography className={styles.heading}>
        <ConfirmationNumberIcon /> Müşteri Yorumları
      </Typography>
      <Typography className={styles.subheading}>
        Müşteri Memnuniyetimiz
      </Typography>

      <Splide
        options={{
          perPage: 3,
          gap: "1.5rem",
          rewind: true,
          pagination: false,
          arrows: true,
          autoplay: true,
          breakpoints: {
            1024: { perPage: 2 },
            600: { perPage: 1 },
          },
        }}
      >
        {reviews.map((review, index) => (
          <SplideSlide key={index}>
            <Card className={styles.card}>
              <Avatar
                src={review.image}
                alt={review.name}
                className={styles.avatar}
              />
              <Typography className={styles.name}>{review.name}</Typography>
              <Rating value={review.rating} readOnly size="small" />
              <CardContent sx={{ paddingTop: 1 }}>
                <Typography className={styles.comment}>
                  “{review.comment}”
                </Typography>
              </CardContent>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  );
}

export default HomeReferance;
