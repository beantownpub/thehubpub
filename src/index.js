import React from 'react'
import ReactDOM from 'react-dom'
import ReactRoutes from './components/reactRoutes.js'
import { Footer } from './components/content/footer/main.js'
//import { MainMenuBar } from './components/topBar/main.js'
import { MainMenuBar } from "@jalgraves/react-components-library"
import { config } from './utils/main.js'
const PAGES = config.pages
const COLORS = config.colors
const FONTS = config.fonts
const IMG_STYLES = {
  margin: ".5em auto",
  padding: "1em 0",
  maxWidth: "60vw",
  maxHeight: "4rem",
  position: "absolute",
  left: "4rem",
  top: "1rem"
}

ReactDOM.render(
  <MainMenuBar
    pages={PAGES}
    fontColor={COLORS.white}
    fontFamily={FONTS.content}
    barColor={COLORS.black}
    navBarLogoImgStyles={IMG_STYLES}
    slideMenuBackgroundColor={COLORS.backgroundGray}
    slideMenuFontColor={COLORS.dodgerBlue}
    slideMenuFontFamily={FONTS.content}
    slideMenuLinkListBorder={`.1rem solid ${COLORS.dodgerBlue}`}
    slideMenuLinkListBorderRadius="4px"
    hoverColor={COLORS.dodgerBlue}
    mainMenuBarImgSource={`${config.static_url}/img/logos/thehubpub_second_logo.png`}
    slideMenuLogoImgSource={`${config.static_url}/img/logos/thehubpub_logo.png`}
  />,
  document.getElementById("topBar")
)

// ReactDOM.render(
//   <MainMenuBar
//     pages={PAGES}
//     fontColor={COLORS.white}
//     barColor={COLORS.black}
//     menuColor={COLORS.gray} />,
//   document.getElementById('topBar')
// )

if (document.getElementById('app')) {
  ReactDOM.render(
    <ReactRoutes/>,
    document.getElementById('app')
  )
}

ReactDOM.render(
  <Footer/>,
  document.getElementById('footer')
)
