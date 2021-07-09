import styled from 'styled-components'

const config = require('./../../config.json')

const COLORS = config.thehubpub.colors

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
    border-top: ${props => props.borderTop || "unset"};
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
        text-transform: uppercase;
        line-height: 170%;
        letter-spacing: .5rem;
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
        letter-spacing: .35rem;
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
        font-size: 2.75rem;
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
        color: ${COLORS.white};
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
    background-image: url(${props => props.image || "/images/thehubpub_hero_header.jpg"});
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