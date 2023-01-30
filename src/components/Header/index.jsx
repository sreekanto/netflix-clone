import React from "react";
import { Container, Navbar, Stack } from "react-bootstrap";

const Header = () => {
  return (
    <Stack as="header">
      <Navbar expand="lg">
        <Container>Navbar</Container>
      </Navbar>
    </Stack>
  );
};

export default Header;
