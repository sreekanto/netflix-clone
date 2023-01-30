import React, { Fragment } from "react";
import { Container, Stack } from "react-bootstrap";
import styles from "./Poster.module.sass";
import { Loader, useFetch } from "../";
import Poster from "./Poster";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const PosterRow = (props) => {
  const { title, fetchUrl } = props;
  const shows = useFetch(fetchUrl);
  const swiperBreakPoints = {
    0: { slidesPerView: 2, spaceBetween: 10 },
    767: { slidesPerView: 3, spaceBetween: 10 },
    992: { slidesPerView: 4, spaceBetween: 10 },
    1200: { slidesPerView: 6, spaceBetween: 10 },
    1400: { slidesPerView: 7, spaceBetween: 10 },
    1600: { slidesPerView: 8, spaceBetween: 10 },
  };
  return (
    <Fragment>
      <Stack as="section" className={`${styles.wrap}`}>
        <Container fluid>
          {title && <h2>{title}</h2>}
          {shows.length > 0 ? (
            <Swiper breakpoints={swiperBreakPoints}>
              {shows.map((item, index) => (
                <SwiperSlide key={index}>
                  <Poster {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Loader />
          )}
          <Poster />
        </Container>
      </Stack>
    </Fragment>
  );
};

export default PosterRow;
