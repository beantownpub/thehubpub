import React from 'react'
import { SocialNav } from './social'
import {
    StyledAnchor,
    StyledInfo,
    StyledLinkButton,
    StyledHero,
    StyledFooter } from './Styles'

export const InfoSection = (props) => {
    return (
        <StyledInfo
            color={props.bgColor}
            fontColor={props.fontColor}
            textAlign={props.textAlign}
            marginTop={props.marginTop}
            paddingTop={props.paddingTop}
            paddingBottom={props.paddingBottom}
            paddingLeft={props.paddingLeft}
            paddingRight={props.paddingRight}
            borderTop={props.borderTop}>{props.children}</StyledInfo>
    )
}

export const Title = (props) => {
    return (
        <h1>{props.children}</h1>
    )
}

export const LinkButton = (props) => {
    const goTo = () => {
        window.location.href=props.url
    }
    return (
        <StyledLinkButton buttonColor={props.color} fontColor={props.fontColor}>
            <button onClick={goTo} type="button">{props.children}</button>
        </StyledLinkButton>
    )
}

export const HeroHeader = () => {
    return (
        <StyledHero>
            <h1>The Friendliest Pub in the Hub!</h1>
        </StyledHero>
    )
}

export const Anchor = (props) => {
    return (
        <StyledAnchor>
            <a href={props.target}>{props.text}</a>
        </StyledAnchor>
    )
}

export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <StyledFooter fontColor="white" backgroundColor="transparent">
            <footer>
                <img src="/images/logos/thehubpub_logo.png" alt="The Hub Pub logo" />
                <h3>18 Province Street Boston, MA 02108</h3>
                <h2>Call: 617-227-8952</h2>
                <h2>Stay Connected</h2>
                <SocialNav/>
                <h2>{'© ' + year} The Hub Pub </h2>
            </footer>
        </StyledFooter>
    )
}
