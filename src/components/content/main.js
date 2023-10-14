import React from "react"
import { config } from "../../utils/main.js"
import { ContentSection } from "@jalgraves/react-components-library"
import { HeroHeader } from "./heroHeader/main.js"
const COLORS = config.colors
const FONTS = config.fonts

export const ContentContainer = (props) => {
  return (
    <ContentSection
      aColor={props.aColor}
      aFontFamily={FONTS.headline}
      aFontSize="1.75rem"
      aFontWeight="600"
      backgroundColor={props.backgroundColor}
      borderTop={props.borderTop}
      display="flex"
      flexFlow="column wrap"
      fontColor={COLORS.white}
      fontFamily={FONTS.content}
      h1Color={props.h1Color || COLORS.white}
      h1FontFamily={FONTS.title}
      h1FontSize="2.75rem"
      h1FontWeight="bold"
      h1LineHeight="150%"
      h2FontFamily={FONTS.content}
      h2FontSize="2rem"
      h2LineHeight="150%"
      h3Color={COLORS.hubPubBlue}
      h3FontFamily={FONTS.headline}
      h3FontSize="1.75rem"
      h3FontWeight="bold"
      h3LetterSpacing=".3rem"
      h3LineHeight="150%"
      h3TextTransform="uppercase"
      h4FontFamily={FONTS.content}
      h4FontSize="1.75rem"
      h4LineHeight="175%"
      h4Padding=".5rem 0"
      h5Color={COLORS.hubPubBlue}
      h5FontFamily={FONTS.headline}
      h5FontSize="2rem"
      h5FontWeight="bold"
      h5LetterSpacing=".5rem"
      h5LineHeight="150%"
      h5Padding=".5rem 0"
      h5TextTransform="uppercase"
      lineHeight="150%"
      padding="5%"
      pColor={props.pColor || COLORS.white}
      pFontSize="150%"
      pLineHeight="150%"
      pMaxWidth="900px"
      sectionMargin={props.sectionMargin || "auto"}
      width="100%"
    >
      {props.children}
    </ContentSection>
  )
}

export const Home = () => {
  return (
    <ContentSection display="flex" flexFlow="column wrap">
      <HeroHeader/>
      <ContentContainer aColor={COLORS.yellow} backgroundColor={COLORS.red} borderTop={`2px solid ${COLORS.yellow}`}>
        <h1>Cocktails, Beer, Billiards, and, Fine Pub Dining</h1>
        <h5>Hours</h5>
        <h2>Monday - Saturday</h2>
        <h3>Open 11am to 2am</h3>
        <h2>Sunday</h2>
        <h3>Open 12pm to 2am</h3>
        <br /><a href="/menu">See pub dining menu &#10148;</a>
      </ContentContainer>
      <ContentContainer aColor={COLORS.yellow} backgroundColor="#383838">
        <h3>Gift Cards and Merchandise Available<br /></h3>
        <h4>Make your next private event a memorable one and book it at Hub Pub!<br /><a href="/parties">Learn more &#10148;</a></h4>
      </ContentContainer>
      <ContentContainer aColor={COLORS.red} backgroundColor="#fcba03" aFontColor={COLORS.hubPubBlue}>
        <h3>Want more info?<br /></h3>
        <h2>See our frequently asked questions</h2>
        <br /><a href="/about">FAQ &#10148;</a>
      </ContentContainer>
      <ContentContainer backgroundColor={COLORS.hubPubBlue} borderTop={`2px solid ${COLORS.black}`}>
        <h2>Pool tables, skiball, and pinball available in our upstairs game room!</h2>
      </ContentContainer>
    </ContentSection>
  )
}
