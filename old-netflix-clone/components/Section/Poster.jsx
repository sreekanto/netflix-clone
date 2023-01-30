import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { colorPrimary, colorSecondary, ImgFluid } from "../globalElements";
import { PosterElement, RatingElement } from "./SectionElements";
const Rating = (vote_average) => {
  if (vote_average < 5)
    return (
      <RatingElement bgcolor="red">{vote_average.toFixed(1)}</RatingElement>
    );
  else if (vote_average >= 5 && vote_average < 7)
    return (
      <RatingElement bgcolor={colorPrimary}>
        {vote_average.toFixed(1)}
      </RatingElement>
    );
  else
    return (
      <RatingElement bgcolor={colorSecondary}>
        {vote_average.toFixed(1)}
      </RatingElement>
    );
};
const Poster = ({
  id,
  title,
  original_title,
  name,
  img_backdrop_medium,
  media_type,
  vote_average,
}) => {
  return (
    <Fragment>
      <PosterElement id={id} to={`/${media_type && media_type}/${id}`}>
        {Rating(vote_average)}
        <ImgFluid
          src={img_backdrop_medium}
          alt={title || original_title || name}
        />
      </PosterElement>
    </Fragment>
  );
};

export default Poster;
