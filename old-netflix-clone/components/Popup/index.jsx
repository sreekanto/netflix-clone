import React, { Fragment } from "react";

import PortalReactDOM from "react-dom";
import { Loading } from "../";
import { PopupContainer, PopupElement } from "./PopupElements";

const Popup = () => {
  return PortalReactDOM.createPortal(
    <Fragment>
      <PopupElement>
        <PopupContainer>
          <Loading />
        </PopupContainer>
      </PopupElement>
    </Fragment>,
    document.getElementById("portal")
  );
};

export default Popup;
