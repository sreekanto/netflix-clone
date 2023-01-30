import React, { Fragment } from "react";
import {
  PaginationButton,
  PaginationList,
  PaginationWrap,
} from "./PaginationElements";

const Pagination = () => {
  return (
    <Fragment>
      <PaginationWrap>
        <Pagination>
          <PaginationList>
            <PaginationButton>1</PaginationButton>
          </PaginationList>
        </Pagination>
      </PaginationWrap>
    </Fragment>
  );
};

export default Pagination;
