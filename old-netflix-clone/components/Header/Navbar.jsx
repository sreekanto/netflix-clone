import React, { Fragment } from 'react'
import { Container } from '../globalElements'
import { NavbarElement, NavElement, NavElementItem, NavElementItemLink, NavElementWrap } from './HeaderElements'
import Logo from './Logo'

const Navbar = () => {
  return (
    <Fragment>
        <NavbarElement>
            <Container isFluid>
                <Logo />
                <NavElementWrap>
                    <NavElement>
                        <NavElementItem>
                            <NavElementItemLink to='movie'>Movie</NavElementItemLink>
                        </NavElementItem>
                        <NavElementItem>
                            <NavElementItemLink to='tv-series'>TV Series</NavElementItemLink>
                        </NavElementItem>
                    </NavElement>
                </NavElementWrap>
            </Container>
        </NavbarElement>
    </Fragment>
  )
}

export default Navbar