import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({ image, title, follows }) {
  return (
    <div>
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={title} />
      </div>

      {/* white section under image */}
      <div className={styles.metaSection}>
        <Chip className={styles.chip} label={`${follows} Follows`} />
      </div>

      
    </div>
    {/* title below card */}
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
      </div>
      </div>
  );
}

export default Card;