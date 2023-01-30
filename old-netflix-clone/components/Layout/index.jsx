import React, { Fragment } from "react";
import Section from "../Section";
import { SectionElement } from "../Section/SectionElements";

const DefaultLayout = (children) => {
  console.log("default");
  return (
    <Fragment>
      <SectionElement>layout {children}</SectionElement>
    </Fragment>
  );
};

export default DefaultLayout;
