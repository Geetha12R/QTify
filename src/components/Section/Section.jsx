import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { config } from "../../App";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Carousel from "../Carousel/Carousel";

function Section({ title, api, type = "album" }) {
  const [albums, setAlbums] = useState([]);
  const [showAllAlbums, setShowAllAlbums] = useState(false);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    axios
      .get(`${config.endpoint}${api}`)
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => console.log(err));
  }, [api]);

  useEffect(() => {
    if (type !== "song") return;

    axios
      .get(`${config.endpoint}/genres`)
      .then((res) => setGenres(res.data.data));
  }, [type]);

  const filteredData =
    type === "song"
      ? selectedGenre === "all"
        ? albums
        : albums.filter((song) => song.genre.key === selectedGenre)
      : albums;

  return (
    <div className={styles.section} key={title}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        {type !== "song" && (
          <button
            className={styles.button}
            onClick={() => setShowAllAlbums(!showAllAlbums)}
          >
            {showAllAlbums ? "Collapse" : "Show All"}
          </button>
        )}
      </div>
      {type === "song" && (
        <Tabs
          value={selectedGenre}
          onChange={(e, value) => setSelectedGenre(value)}
          classes={{
            indicator: styles.indicator,
          }}
        >
          <Tab className={styles.tab} label="All" value="all" />

          {genres.map((genre) => (
            <Tab
              key={genre.key}
              className={styles.tab}
              label={genre.label}
              value={genre.key}
            />
          ))}
        </Tabs>
      )}
      {type === "song" ? (
        <Carousel data={filteredData} type="song" />
      ) : showAllAlbums ? (
        <Grid container spacing={2}>
          {albums.map((album) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={2}
              key={album.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                image={album.image}
                title={album.title}
                follows={album.follows}
                likes={album.likes}
                type={type}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Carousel data={albums} type="album" />
      )}
    </div>
  );
}

export default Section;
