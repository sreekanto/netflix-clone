import React, { Fragment } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
  Stack,
} from "react-bootstrap";
import { useFetch } from "../";
import styles from "./Banner.module.sass";
const Banner = ({ fetchUrl }) => {
  const shows = useFetch(fetchUrl);
  const showIndex = shows.length && Math.floor(Math.random() * shows.length);
  //const { backdrop_original, id, name, original_name, overview, title } =
  // shows[showIndex];
  // console.log(show);
  return (
    <Fragment>
      <Stack as="section" className={styles.wrap}>
        <Container>
          <Row>
            <Col md="10" lg="8">
              <h2>Movie Title</h2>
              <p></p>
              <ButtonGroup>
                <Button type="button">Play Now</Button>
                <Button type="button">Watch Later</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </Stack>
    </Fragment>
  );
};

export default Banner;
