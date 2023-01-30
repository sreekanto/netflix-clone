import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  colorBlack,
  colorWhite,
  Container,
  sectionPading,
  ULElement,
} from "../globalElements";
export const FooterElement = styled.footer`
  color: ${({ color }) => (color ? color : colorWhite)};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : colorBlack)};
  padding: ${sectionPading};
  @media screen and (max-width: 767px) {
    padding: 30px;
  }
  @media screen and (max-width: 575px) {
    padding: 2rem 0rem;
  }
  ${Container} {
    max-width: 1000px;
  }
`;
export const FooterNav = styled(ULElement)``;
export const FooterNavItem = styled.li``;
export const FooterNavLink = styled(Link)`
  font-size: 14px;
  display: inline-block;
  color: inherit;
  text-decoration: none;
  padding: 0.375rem 0;
`;
