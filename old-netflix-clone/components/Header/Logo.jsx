import React, { Fragment } from 'react'
import { LogoElement } from './HeaderElements'
import LogoSrc from '../assets/images/logo.svg'
import { ImgFluid } from '../globalElements'
const Logo = () => {
  return (
    <Fragment>
        <LogoElement to='/'>
            <ImgFluid src={LogoSrc} alt='Netflix' />
        </LogoElement>
    </Fragment>
  )
}

export default Logo