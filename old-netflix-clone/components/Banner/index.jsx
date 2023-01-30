import React, { Fragment, useState, useEffect } from "react";
import { fetchData } from "../data";
import {
  Button,
  Col,
  Container,
  HeadingLarge,
  ParagrapgLarge,
  Row,
} from "../globalElements";
import { BannerElement } from "./BannerElements";
import { FaPlay, FaExclamation } from "react-icons/fa";
export const extractStr = (str, n) =>
  str?.length > n ? `${str.substring(0, n - 1)}...` : str;
const Banner = ({ fetchUrl, showType }) => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      const data = await fetchData(fetchUrl, showType);
      setMovie(data[Math.floor(Math.random() * data.length)]);
    };
    fetchedData();
  }, [fetchUrl]);
  const { title, name, original_title, overview, img_backdrop_original, id } =
    movie;
  return (
    <Fragment>
      <BannerElement id={id} bgImage={img_backdrop_original}>
        <Container isFluid>
          <Row>
            <Col isTwoThird>
              <HeadingLarge>{title || name || original_title}</HeadingLarge>
              <ParagrapgLarge>{extractStr(overview, 250)}</ParagrapgLarge>
              <Button>
                {" "}
                <FaPlay /> Play
              </Button>
              <Button>
                {" "}
                <FaExclamation /> More Info
              </Button>
            </Col>
          </Row>
        </Container>
      </BannerElement>
    </Fragment>
  );
};

export default Banner;
