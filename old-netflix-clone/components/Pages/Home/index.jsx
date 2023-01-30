import React, { Fragment } from "react";
import { requests } from "../../data/requests";
import { Banner, Section } from "../../index";

const Home = () => {
  return (
    <Fragment>
      <Banner fetchUrl={""} />
      {requests &&
        requests.map(({ id, title, url, showType }) => (
          <Section key={id} title={title} fetchUrl={url} showType={showType} />
        ))}
    </Fragment>
  );
};

export default Home;
