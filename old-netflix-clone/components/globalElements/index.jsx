import styled, { css, createGlobalStyle } from "styled-components";

export const fontPrimary = "'Montserrat', sans-serif";
export const fontSecondary = "";
export const fontSBody = "16px";
export const fontSHeading = "40px";
export const colorPrimary = "#042E6F";
export const colorSecondary = "#E70A3C";
export const colorWhite = "#ffffff";
export const colorBlack = "#000000";
export const sectionPading = "60px";
export const commonPadding = "16px";

export const GlobalStyle = createGlobalStyle`
    *{padding: 0;margin: 0;box-sizing: border-box;}
    body {
        font-family: ${fontPrimary};
        font-weight: 400;
        padding: 0;
        margin: 0;
        line-height: 1.5;
        color: ${colorWhite};
        background-color: ${colorBlack};
    }
    h1, h2, h3, h4, h5, h6{line-height: 1.2;}
    h1, h2, h3, h4, h5, h6, p{margin-bottom: 1rem;}
`;

export const DefaultLink = ({ display = "inline-block", padding }) => css`
  display: ${display && display};
  text-decoration: none;
  padding: ${padding && padding};
`;

export const Container = styled.div`
  width: 100%;
  padding: ${({ padding, isFluid }) =>
    isFluid && padding ? padding : "0 3rem"};
  //padding: ${({ padding, isFluid }) =>
    !isFluid && padding ? padding : "0 1rem"};
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 400px) {
    width: ${({ isFluid }) => !isFluid && "100%"};
  }
  @media screen and (min-width: 576px) {
    width: ${({ isFluid }) => !isFluid && "540px"};
  }
  @media screen and (min-width: 768px) {
    width: ${({ isFluid }) => !isFluid && "720px"};
  }
  @media screen and (min-width: 992px) {
    width: ${({ isFluid }) => !isFluid && "920px"};
  }
  @media screen and (min-width: 1200px) {
    width: ${({ isFluid }) => !isFluid && "1140px"};
  }
  @media screen and (min-width: 1400px) {
    width: ${({ isFluid }) => !isFluid && "1280px"};
  }
  @media screen and (max-width: 767px) {
    padding: ${({ padding, isFluid }) =>
      isFluid && padding ? padding : "0 2rem"};
  }
  @media screen and (max-width: 575px) {
    padding: ${({ padding, isFluid }) =>
      isFluid && padding ? padding : "0 1rem"};
  }
`;
export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-left: -1rem;
  margin-right: -1rem;
`;
export const Col = styled.div`
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  flex: 0 1 auto;
  max-width: 100%;
  width: ${({ isTwoThird }) => isTwoThird && "66.66%"};
  width: ${({ isHalf }) => isHalf && "50%"};
  width: ${({ isOneTrird }) => isOneTrird && "33.33%"};
  width: ${({ isOneFourth }) => isOneFourth && "25%"};
  width: ${({ isOneFivth }) => isOneFivth && "20%"};
  width: ${({ isOneSixth }) => isOneSixth && "16.6666%"};
  @media screen and (max-width: 991px) {
    width: ${({ isOneTrird, isOneFourth }) =>
      (isOneTrird || isOneFourth) && "50%"};
    width: ${({ isOneFivth }) => isOneFivth && "25%"};
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    width: ${({ isOneFivth }) => isOneFivth && "50%"};
  }
`;
export const Heading = styled.h2``;
export const HeadingLarge = styled.h1`
  font-size: 4rem;
  color: ${({ color }) => (color ? color : colorWhite)};
`;
export const HeadingSmall = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
`;
export const Paragrapg = styled.p``;
export const ParagrapgLarge = styled.p`
  font-size: 18px;
  color: ${({ color }) => (color ? color : colorWhite)};
`;
export const ParagrapgSmall = styled.p``;
export const ImgFluid = styled.img`
  width: auto;
  max-width: 100%;
  height: auto;
`;
export const ULElement = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  font-size: ${({ fSize }) => (fSize ? fSize : "1rem")};
  color: ${({ color }) => (color ? color : colorBlack)};
  padding: ${({ padding }) => (padding ? padding : "0.5rem 1.5rem")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : colorWhite)};
  border: 1px solid transparent;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  & + button {
    margin-left: 1rem;
  }
`;
