import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({ image, title, follows, likes, type }) {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt={title} />
        </div>

        <div className={styles.metaSection}>
          <Chip
            className={styles.chip}
            label={type === "song" ? `${likes} Likes` : `${follows} Follows`}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}

export default Card;
