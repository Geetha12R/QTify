import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { config } from "../../App";
import Grid  from "@mui/material/Grid";

function Section() {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get(`${config.endpoint}/albums/top`)
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const visibleAlbums = showAll ? albums : albums.slice(0, 7);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Top Albums</h2>

        <button className={styles.button} onClick={() => setShowAll(!showAll)}>
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>
      <Grid container spacing={2}>
        {visibleAlbums.map((album) => (
          <Grid item xs={6} sm={4} md={3} lg={1.7} key={album.id}>
            <Card
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Section;
