import React, { Fragment } from "react";
import { Banner, PosterRow } from "../../";

const HomePage = () => {
  return (
    <Fragment>
      <Banner fetchUrl="discover/tv" />
      <PosterRow title="Trending" fetchUrl="trending/all/day" />
      <PosterRow title="Netflix Movie" fetchUrl="discover/movie" />
      <PosterRow title="Netflix TV" fetchUrl="discover/tv" />
    </Fragment>
  );
};

export default HomePage;
