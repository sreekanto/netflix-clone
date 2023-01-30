import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, ProgressBar, Row, Stack } from "react-bootstrap";

const ShowsPage = () => {
  // const sum = (a) => {
  //   const subRest = (b) => {
  //     if (b) return sum(a + b);
  //     return a;
  //   };
  //   return subRest;
  // };
  // const add = (a) => (b) => a + b;
  // console.log(sum(3)(4)(5)());
  for (let i = 2; i < 8; i++) {
    for (let j = 2; j < 8; j++) {
      if ((i) => j)
        console.log(`Output: i: ${i} & j: ${j} & i/j: ${i % j == 0}`);
    }
  }
  const [progressWidth, setProgressWidth] = useState(0);
  useEffect(() => {
    if (progressWidth <= 100) {
      setTimeout(() => {
        console.log(progressWidth);
        setProgressWidth((prevWidth) => prevWidth + 1);
      }, 10);
    }
  }, [progressWidth]);
  //console.log(progressWidth);
  return (
    <Fragment>
      <Stack style={{ height: "200vh", backgroundColor: "#595" }}>
        <Container>
          <Row>
            <Col>
              <ProgressBar striped variant="danger" now={progressWidth} />
              <h2>Show Page...</h2>
            </Col>
          </Row>
        </Container>
      </Stack>
    </Fragment>
  );
};

export default ShowsPage;
