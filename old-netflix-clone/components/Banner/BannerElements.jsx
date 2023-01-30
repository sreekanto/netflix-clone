import styled from "styled-components";
import { colorBlack, Container, sectionPading } from "../globalElements";

export const BannerElement = styled.section`
    min-height: calc(40vh + 200px);
    padding-top: 150px;
    padding-bottom: ${sectionPading};
    background-color: ${({bgColor}) => (bgColor ? bgColor : colorBlack)};
    background-image: ${({bgImage}) => (bgImage && `url(${bgImage})`)};
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    &::before{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
    }
    ${Container}{
        position: relative;
    }
`