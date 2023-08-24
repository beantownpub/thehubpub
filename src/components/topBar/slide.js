import React from 'react'
import {
    StyledCloseMenu,
    StyledHamburger } from './styles.js'

import * as slide from '../../utils/menuSlide.js'

export function toggleMenu(action) {
  return (
    <StyledHamburger>
      {action === "open" &&
          <button className="hamburger" id="open_menu" onClick={() => slide.menuOpen()}>Open Menu</button>
      }
      {action === "close" &&
          <StyledCloseMenu><button className="menu_close" id="close_menu" onClick={() => slide.menuClose()}>Close Menu</button></StyledCloseMenu>
      }
    </StyledHamburger>
  )
}

export const SlideMenuLogo = () => {
  return (
    <div >
      <img src={"/images/logos/thehubpub_logo.png"}  alt="Hub Pub logo" />
    </div>
  )
}
