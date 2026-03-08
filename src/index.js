import React from "react"
import ReactDOM from "react-dom"
import { createRoot } from "react-dom/client";
import ReactRoutes from "./components/reactRoutes.js"
import { Footer } from "./components/content/footer/main.js"
import { MainMenuBar } from "@jalgraves/react-components-library"
import { config } from "./utils/main.js"
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

const container = document.getElementById("app")
const footerContainer = document.getElementById("footer")
const topBarContainer = document.getElementById("topBar")
const app = createRoot(container)
const footer = createRoot(footerContainer)
const topBar = createRoot(topBarContainer)

const slideMenu = {
  backgroundColor: COLORS.backgroundGray,
  border: `.1rem solid ${COLORS.black}`,
  fontColor: COLORS.dodgerBlue,
  fontFamily: FONTS.content,
  footer: {
    text: `The Friendliest Pub in the Hub`,
    fontFamily: FONTS.script,
    fontColor: COLORS.dodgerBlue,
    fontSize: "2rem",
    fontWeight: "900",
    textTransform: "none"
  },

  linkList: {
    borderRadius: "4px",
    fontFamily: FONTS.content,
    fontColor: COLORS.black,
    fontSize: "1.5rem",
    fontWeight: "900",
    outline: `1px solid ${COLORS.yellow}`,
    margin: "2rem auto",
    pages: PAGES,
    position: "relative",
    hoverColor: COLORS.dodgerBlue,
    width: "100%",
    iconStyle: {
      color: COLORS.yellow,
      fontSize: "1em"
    }
  },
  header: {
    fontFamily: FONTS.content,
    imgSource: `/images/logos/thehubpub_logo.png`
  }
}

topBar.render(
  <MainMenuBar
    barColor={COLORS.black}
    fontColor={COLORS.white}
    fontFamily={FONTS.content}
    hamburgerBackground={COLORS.white}
    hoverColor={COLORS.dodgerBlue}
    mainMenuBarBorderBottom={`1px solid ${COLORS.white}`}
    mainMenuBarBoxShadow={`2px 2px 6px ${COLORS.darkGray}`}
    mainMenuBarImgSource={`/images/logos/thehubpub_second_logo.png`}
    navBarLogoImgStyles={IMG_STYLES}
    pages={PAGES}
    slideMenu={slideMenu}
    slideMenuBackgroundColor={COLORS.topMenuBackground}
    slideMenuLogoImgSource={`/images/script_logo.png`}
  />
)

if (app) {
  app.render(
    <ReactRoutes/>
  )
}

footer.render(
  <Footer/>
)
