import styled from 'styled-components'

const config = require('./../config.json')

const COLORS = config.thehubpub.colors

export const StyledLink = styled.div`
    a {
        margin: auto;
        padding: .5em 0;
        display: block;
        position: relative;
        font-size: 1.5em;
        font-weight: 700;
        letter-spacing: .15em;
        text-transform: uppercase;
        left: -17em;
        font-family: 'Raleway', Arial, sans-serif;
        color: ${COLORS.blue};
        text-decoration: none;
    }
    a:hover {
        color: red;
    }
`

export const StyledHamburger = styled.div`
    .hamburger {
    position: fixed;
    z-index: 1000;
    margin: .25em;
    padding: 0;
    width: 3em;
    height: 2.75em;
    border: none;
    text-indent: 2.5em;
    font-size: 1.5em;
    color: transparent;
    background: white;
    border-radius: .35em;
    opacity: .8;
    left: .5rem;
    top: 1em;
    }
    .hamburger::before {
        position: absolute;
        top: 0.5em;
        right: 0.5em;
        bottom: 0.5em;
        left: 0.5em;
        background: linear-gradient(#373a47 20%, transparent 20%, transparent 40%, #373a47 40%, #373a47 60%, transparent 60%, transparent 80%, #373a47 80%);
        content: '';
        font-family: 'Raleway', Arial, sans-serif;
        color: #fbfb0e;
    }
    @media (min-width: 1000px)
    and (-webkit-min-device-pixel-ratio: 2) {
        .hamburger {
            display: none;
        }
    }
`

export const StyledCloseMenu = styled.div`
    .menu_close {
        width: 1rem;
        height: 1rem;
        position: absolute;
        right: 1em;
        top: 1em;
        overflow: hidden;
        text-indent: 1em;
        font-size: 0.75em;
        border: none;
        background: transparent;
        color: transparent;
    }
    .menu_close::before,
    .menu_close::after {
        content: '';
        position: absolute;
        width: 3px;
        height: 100%;
        top: 0;
        left: 50%;
        background: ${COLORS.yellow};
    }
    .menu_close::before {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    .menu_close::after {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
`

export const StyledTopNav = styled.div`
    .top_nav {
        display: flex;
        flex-direction: row;
        margin: auto;
        position: fixed;
        top: 1em;
        right: 1vw;
        a {
            padding: 1em 1.25em;
            font-size: 1.75em;
            font-weight: 700;
            letter-spacing: .15em;
            text-transform: uppercase;
            text-decoration: none;
            color: ${COLORS.yellow};
            font-family: 'Raleway', Arial, sans-serif;
        }
        a:hover {
            color: ${COLORS.red};
        }
    }
    @media (max-width: 374px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        .top_nav {
            display: none;
        }
    }
    @media (max-width: 700px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        .top_nav {
            display: none;
        }
    }
    @media (min-width:320px)
    and (max-width: 768px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        .top_nav {
            display: none;
        }
    }
    @media (min-width: 600px)
    and (max-width: 768px)
    and (orientation: landscape)
    and (-webkit-min-device-pixel-ratio: 2) {
        .top_nav {
            display: none;
        }
    }
`

export const StyledSlideMenu = styled.div`
    .slide_menu {
        margin: auto;
        padding: 1em 2em;
        display: flex;
        width: 25rem;
        z-index: 1001;
        display: flex;
        flex-direction: column;
        background-color: ${props => props.menuColor || "white"};
        border: 1px solid ${COLORS.yellow};
        border-radius: .5rem;
        position: absolute;
        left: -25rem;
        img {
            margin: .5em auto;
            padding: 1em 0;
            display: flex;
            width: 10rem;
            max-height: unset;
            left: 4rem;
            top: 1rem;
        }
        h2 {
            margin: auto;
            padding: 1rem;
            font-size: 1.75rem;
            font-weight: 700;
            letter-spacing: .15em;
            text-decoration: none;
            color: ${COLORS.yellow};
            font-family: 'Raleway', Arial, sans-serif;
        }
    }
    .menu_list {
        font-size: 1rem;
        border: 1px solid #1f6696;
        border-radius: .5rem;
    }
    .menuHead & {
        width: min-content;
        display: block;
        position: relative;
    }
`

export const StyledNavBar = styled.div`
    z-index: 999;
    margin: 0;
    padding: 0;
    height: 5rem;
    width: 100%;
    font-size: 66.6%;
    line-height: 1.15;
    background-color: ${props => props.barColor || "red"};
    position: fixed;
    border-bottom: 2px solid #fcba03;
    box-shadow: 1px 1px 3px #888888;
    img {
        margin: .5em auto;
        padding: 1em 0;
        max-width: 60vw;
        max-height: 4em;
        left: 4rem;
        top: 1rem;
    }
    h2 {
        color: ${COLORS.blue};
        font-family: 'Raleway', Arial, sans-serif;
    }
`

export const StyledInfo = styled.div`
    margin-top: ${props => props.marginTop || "auto"};
    margin-bottom: ${props => props.marginBottom || "auto"};
    margin-left: ${props => props.marginLeft || "auto"};
    margin-right: ${props => props.marginRight || "auto"};
    padding-top: ${props => props.paddingTop || "2rem"};
    padding-bottom: ${props => props.paddingBottom || "2rem"};
    padding-left: ${props => props.paddingLeft || "4rem"};
    padding-right: ${props => props.paddingRight || "1rem"};
    background-color: ${props => props.color || "#F3F4F4"};
    width: 100vw;
    display: flex;
    flex-flow: column wrap;
    font-family: 'Newsreader', serif;
    letter-spacing: .12rem;
    color: ${props => props.fontColor || "black"};
    line-height: 170%;
    h1 {
        padding: .5rem 0;
        max-width: 80%;
        font-size: 2.5em;
        font-family: gotham-narrow-ultra;
        line-height: 170%;
    }
    h2 {
        padding: .5rem 0;
        max-width: 80vw;
        font-family: gotham;
        font-size: 2em;
        line-height: 170%;
        text-align: ${props => props.textAlign || "initial"};
        span {
            color: ${COLORS.red};
        }
    }
    h3 {
        padding: 1rem 0;
        max-width: 80vw;
        font-family: gotham-narrow-ultra;
        font-size: 2em;
        line-height: 170%;
        letter-spacing: .25rem;
    }
    h4 {
        padding: .5rem 0;
        max-width: 40rem;
        font-family: gotham;
        font-size: 1.75rem;
        text-transform: none;
        line-height: 170%;
    }
    h5 {
        padding: .5rem 0;
        max-width: 40rem;
        font-family: satisfy;
        font-size: 1.75rem;
        letter-spacing: unset;
        text-transform: none;
        line-height: 170%;
    }
    h6 {
        padding: .5rem 0;
        max-width: 40rem;
        font-family: gotham;
        font-size: .75rem;
        text-transform: none;
        line-height: 170%;
    }
    a {
        text-decoration: none;
        color: ${COLORS.cyan};
        font-family: gotham-medium;
        text-transform: capitalize;
    }
    article {
        padding: 2rem 0 0 0;
        max-width: 50rem;
        text-transform: none;
        font-family: gotham-medium;
    }
    p {
        padding: .5rem 0;
        max-width: 50rem;
        color: ${props => props.fontColor || COLORS.black};
        text-transform: none;
        font-family: gotham-medium;
        font-size: 1.2rem;
    }
    @media (min-width: 320px)
    and (max-width: 768px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        h1 {
            font-size: 2rem;
        }
    }
`

export const StyledLinkButton = styled.div`
    button {
        margin: 1rem 0;
        padding: .5rem;
        width: 10rem;
        border: none;
        border-radius: .3rem;
        font-family: 'Newsreader', serif;
        font-size: 1.5em;
        text-transform: uppercase;
        letter-spacing: .2em;
        background-color: ${props => props.buttonColor || "#383838"};
        color: ${props => props.fontColor || "black"};
    }
`

export const StyledHero = styled.div`
    margin: 5rem auto 0 auto;
    width: 100%;
    height: 420px;
    display: flex;
    flex-flow: column wrap;
    background-image: url(${props => props.image || "https://static.dev.beantownpub.com/img/thehubpub_hero_header.jpg"});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    h1 {
        margin: auto;
        max-width: 80%;
        font-family: gotham-narrow-ultra;
        font-size: 3.25rem;
        text-transform: uppercase;
        letter-spacing: .2em;
        color: ${COLORS.white};
        text-shadow: 2px 2px 8px #000000;
        line-height: 150%;
    }
    h5 {
        margin: .5rem auto;
        padding: .5rem 0;
        max-width: 40rem;
        font-family: satisfy;
        font-size: 3rem;
        color: ${COLORS.yellow};
        text-shadow: 2px 2px 8px #000000;
        letter-spacing: unset;
        text-transform: none;
        line-height: 170%;
    }
    img {
        margin: .5rem auto;
        max-width: 60%;
    }
    @media (min-width: 320px)
    and (max-width: 768px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        h1 {
            font-size: 2rem;
        }
    }
`

export const StyledFooter = styled.div`
    margin: auto;
    padding: 2rem 0;
    width: 100%;
    display: flex;
    border-top: .2rem solid #fcba03;
    background-color: ${props => props.backgroundColor || "white"};
    footer {
        margin: auto;
        font-family: 'Raleway', Arial, sans-serif;
        text-transform: uppercase;
        color: ${props => props.fontColor || "#1f6696"};
        text-align: center;
        letter-spacing: .2em;
    }
    img {
        margin: auto;
        padding: .5rem 0;
        max-width: 20rem;
    }
    h2 {
        margin: 1rem auto;
        text-shadow: 2px 2px 4px ${COLORS.black};
    }
    h3 {
        margin: auto;
        padding: .5rem 0;
        font-size: 1.65em;
        text-shadow: 2px 2px 4px ${COLORS.black};
    }
    h4 {
        margin: auto;
        padding: 1rem 0;
        font-family: 'Raleway', Arial, sans-serif;
        font-size: 2rem;
        color: ${props => props.fontColor || "#1f6696"};
        text-transform: capitalize;
        letter-spacing: none;
        text-shadow: 2px 2px 4px ${COLORS.black};
    }
`

export const StyledContactForm = styled.div`
    width: 20rem;
    display: flex;
    flex-flow: column wrap;
    form {
        display: flex;
        flex-flow: column wrap;
        input {
            margin: .5rem 0;
            padding: .5rem;
            border: .05rem solid #e2e2e2;
            border-radius: .4em;
        }
        label {
            margin: auto .25rem;
            font-family: 'Newsreader', serif;
            letter-spacing: .25rem;
            text-transform: uppercase;
        }
        textarea {
            border: .05rem solid #e2e2e2;
            border-radius: .4rem;
        }
    }
    h2 {
        font-size: 1.5rem;
    }
    h3 {
        padding: .25rem;
        font-size: .5rem;
        color: #000000;
        font-family: 'Newsreader', serif;
        text-transform: uppercase;
    }
    .stateZip {
        display: flex;
        flex-flow: row nowrap;
        form {
            input {
                margin: 0 .25em;
            }
        }
    }
    .billingAddress {
        font-family: gotham-medium;
        font-size: .75em;
        font-style: italic;
    }
`
export const StyledAnchor = styled.div`
    display: flex;
    a {
        margin: .25rem;
        padding: 1rem;
        width: ${props => props.width || "12rem"};
        height: min-content;
        font-family: 'Newsreader', serif;
        background-color: ${props => props.bgColor || "white"};
        border: 1px solid ${props => props.borderColor || "white"};
        border-radius: 6px;
        text-decoration: none;
        font-size: 1rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .2rem;
        color: black;
    }
`