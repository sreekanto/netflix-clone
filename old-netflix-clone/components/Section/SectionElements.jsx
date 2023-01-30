import { Link } from "react-router-dom";
import styled from "styled-components";
import { Col, colorWhite, commonPadding } from "../globalElements";

export const SectionElement = styled.section`
  padding-top: ${commonPadding};
  padding-bottom: ${commonPadding};
`;
export const PosterElement = styled(Link)`
  display: inline-block;
  flex: 0 0 200px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
`;
export const RatingElement = styled.div`
  position: absolute;
  left: auto;
  top: 0;
  right: 0;
  padding: 2px;
  border-radius: 4px;
  color: ${({ color }) => (color ? color : colorWhite)};
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "#eeeeee")};
`;
