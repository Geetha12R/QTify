import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Card from "../Card/Card";
import styles from "./Carousel.module.css";

import leftArrow from "../../assets/left_arrow.png";
import rightArrow from "../../assets/right_arrow.png";

function Carousel({ data = [], type="album" }) {
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavigationState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className={styles.carouselWrapper}>
      {!isBeginning && (
        <button
          className={styles.leftArrow}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img src={leftArrow} alt="Previous" />
        </button>
      )}

      <Swiper
      key={data.length}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateNavigationState(swiper);
        }}
        onSlideChange={updateNavigationState}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {data.map((album) => (
          <SwiperSlide key={album.id}>
            <Card
              image={album.image}
              title={album.title}
              follows={album.follows}
              likes={album.likes}
              type={type}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {!isEnd && (
        <button
          className={styles.rightArrow}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img src={rightArrow} alt="Next" />
        </button>
      )}
    </div>
  );
}

export default Carousel;