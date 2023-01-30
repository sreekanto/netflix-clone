import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { colorBlack, Container, DefaultLink, ULElement } from "../globalElements";

export const HeaderElement = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
    padding-top: 1rem;
    color: ${({color}) => (color && color )};
    background-color: ${({bgColor}) => (bgColor && bgColor )};
`
export const NavbarElement = styled.nav`
    ${Container}{
        display: flex;
        flex-flow: row wrap;
    }
`
export const LogoElement = styled(Link)`
    display: inline-block;
    text-decoration: none;
    flex: 0 1 200px;
`
export const NavElementWrap = styled.div`
    flex: 1 1 auto;
`
export const NavElement = styled(ULElement)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
`
export const NavElementItem = styled.li``
export const NavElementItemLink = styled(NavLink)`
    color: inherit;
    ${DefaultLink({padding: '0.5rem 1rem'})} // DefaultLink({display:'block'})
`