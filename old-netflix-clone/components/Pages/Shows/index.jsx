import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { fetchData } from "../../data";
import { Col, Container, Heading, Row } from "../../globalElements";
import { Banner, Poster, Popup, Pagination } from "../../index";
import { ShowsElement } from "./ShowsElements";

const Shows = ({ fetchUrl, showType, title }) => {
  const [page, setPage] = useState(1);
  const [shows, setShows] = useState([]);
  // useEffect(() => {

  // }, [page]);

  useEffect(() => {
    const fetchedsData = async () => {
      // setPage(1);
      // setShows([]);
      // console.log("page", page);
      // console.log("shows", shows);
      setShows(await fetchData(fetchUrl, showType, 1));
    };
    fetchedsData();
  }, [fetchUrl]);

  const handelScroll = async () => {
    const appScrollHeight = document.documentElement.scrollHeight;
    const appScrollTop = document.documentElement.scrollTop;
    const appInnerHeight = window.innerHeight;
    const appScrollHeightCustom = appScrollTop + appInnerHeight + 1;

    if (appScrollHeightCustom > appScrollHeight) {
      setPage((prevPage) => prevPage + 1);
      // const data = await fetchData(fetchUrl, showType, page);
      // setShows((prevShows) => [...prevShows, ...data]);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);
  // console.log("scrollTop", scrollTop);
  return (
    <Fragment>
      <Banner fetchUrl={fetchUrl} showType={showType} />
      <ShowsElement>
        <Container isFluid>
          <Row>
            <Col>
              <Heading>{title}</Heading>
            </Col>
          </Row>
          {shows.length !== 0 ? (
            <Fragment>
              <Row>
                {shows.map((item, index) => (
                  <Col key={index} isOneFivth>
                    <Poster {...item} showType={showType} />
                  </Col>
                ))}
              </Row>
              <Pagination />
            </Fragment>
          ) : (
            <Popup />
          )}
        </Container>
      </ShowsElement>
    </Fragment>
  );
};

export default Shows;
