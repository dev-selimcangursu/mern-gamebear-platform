import React from 'react'
import styles from './ProductCard.module.css'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Banner3 from '../../assets/banner-3.png'
function ProductCard() {
  return (
    <Card className={styles.card}>
        <CardMedia
          component="img"
          image={Banner3}
          alt="Ürün Görseli"
          className={styles.media}
        />
        <CardContent className={styles.content}>
          <Typography className={styles.title}>
            Apple AirPods Pro (2. Nesil)
          </Typography>
          <Typography className={styles.description}>
            Aktif gürültü engelleme, uyumlu kulaklık başlıkları ve şarj kutusuyla birlikte.
          </Typography>
          <Typography className={styles.price}>4.299 TL</Typography>
        </CardContent>
        <CardActions className={styles.actions}>
          <Button size="small" variant="contained" className={styles.button}>
            İncele
          </Button>
          <Button size="small" variant="contained" className={styles.button}>
            Sepete Ekle
          </Button>
        </CardActions>
      </Card>
  )
}

export default ProductCard