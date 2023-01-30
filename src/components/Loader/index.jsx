import React, { Fragment } from "react";
import { Spinner, Stack } from "react-bootstrap";

const Loader = () => {
  return (
    <Fragment>
      <Stack className="align-items-center">
        <Spinner variant="warning" />
      </Stack>
    </Fragment>
  );
};

export default Loader;
