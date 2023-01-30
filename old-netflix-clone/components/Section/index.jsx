import React, { Fragment, useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//import 'swiper/css/Navigation'
import { fetchData } from "../data";
import { Container, HeadingSmall, Row } from "../globalElements";
import Poster from "./Poster";
import { SectionElement } from "./SectionElements";
const Section = ({ title, fetchUrl, showType }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      setData(await fetchData(fetchUrl));
    };
    fetchedData();
  }, []);
  const breakPoints = {
    0: {
      spaceBetween: 4,
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 4,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
  };
  console.log(data);
  return (
    <Fragment>
      <SectionElement>
        <Container isFluid>
          <HeadingSmall>{title}</HeadingSmall>
          {data && (
            <Swiper
              breakpoints={breakPoints}
              spaceBetween={16}
              slidesPerView={2}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <Poster {...item} showType={showType} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Container>
      </SectionElement>
    </Fragment>
  );
};

export default Section;
