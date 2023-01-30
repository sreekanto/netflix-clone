import React from "react";
import { Fragment } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

const Footer = () => {
  return (
    <Fragment>
      <Stack as="footer" id="footer" className="py-5 text-bg-dark text-center">
        <Container>
          <Row>
            <Col sm="12">Footer</Col>
          </Row>
        </Container>
      </Stack>
    </Fragment>
  );
};

export default Footer;
