import React, { Fragment } from "react";
import { Card, Stack } from "react-bootstrap";

const Poster = (props) => {
  //console.log(props);
  const {
    backdrop,
    backdrop_path,
    id,
    media_type,
    name,
    poster,
    poster_path,
    original_name,
    vote_average,
    title,
  } = props;
  return (
    <Fragment>
      <Stack>
        <Card className="border-0 rounded-1">
          <Card.Img src={backdrop} alt={name || original_name || title} />
          <Card.ImgOverlay>
            <Card.Title></Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Stack>
    </Fragment>
  );
};

export default Poster;
