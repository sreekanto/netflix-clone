import React, { Fragment, useEffect, useState } from "react";
import { colorBlack, colorWhite } from "../globalElements";
import { HeaderElement } from "./HeaderElements";
import Navbar from "./Navbar";

const Header = () => {
  const [headerFix, setHeaderFix] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) setHeaderFix(true);
      else setHeaderFix(false);
    });

    return () => {
      //window.removeEventListener('scroll')
    };
  }, []);
  return (
    <Fragment>
      <HeaderElement
        color={headerFix ? colorWhite : colorWhite}
        bgColor={headerFix ? colorBlack : "transparent"}
      >
        <Navbar />
      </HeaderElement>
    </Fragment>
  );
};

export default Header;
