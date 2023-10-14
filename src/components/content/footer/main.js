import React from 'react'
import { ContentSection } from "@jalgraves/react-components-library"
import { SocialNav } from './social.js'
// import { StyledFooter } from './styles.js'
import { config } from "../../../utils/main.js"
const COLORS = config.colors
const FONTS = config.fonts

export const Footer = () => {
  const year = new Date().getFullYear()
  const gitHash = process.env.GIT_HASH
  const version = process.env.VERSION
  return (
    <ContentSection
      ariaDetails="Footer"
      backgroundColor="transparent"
      borderRadius="4px"
      display="flex"
      flexFlow="column wrap"
      fontFamily={FONTS.footer}
      h1Color={COLORS.white}
      h1FontFamily={FONTS.footer}
      h1FontSize="1.5rem"
      h1FontWeight="900"
      h1LineHeight="150%"
      h1Margin="auto"
      h1Padding=".5rem"
      h1LetterSpacing=".3rem"
      h1TextTransform="uppercase"
      h2Color={COLORS.white}
      h2FontFamily={FONTS.content}
      h2FontSize="1.5rem"
      h2FontWeight="600"
      h2LetterSpacing=".3rem"
      h2LineHeight="150%"
      h2TextTransform="uppercase"
      h2Margin="auto"
      h2Padding=".5rem"
      h3Padding="1rem"
      h3Margin="auto"
      h3Color="transparent"
      margin="1rem auto 1rem auto"
      maxWidth="80vw"
      outline={`.2rem solid ${COLORS.yellow}`}
      padding="2rem"
      textAlign="center"
      width="100vw"
    >
      <footer>
        <img src="/images/logos/thehubpub_logo.png" alt="The Hub Pub logo" />
        <h2>18 Province Street Boston, MA 02108</h2>
        <h2>Call: 617-227-8952</h2>
        <h2>Stay Connected</h2>
        <SocialNav/>
        <h2>{'© ' + year} The Hub Pub </h2>
        <h3>Commit: {gitHash} Version: {version}</h3>
      </footer>
    </ContentSection>
  )
}
