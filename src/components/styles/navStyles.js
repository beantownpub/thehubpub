import styled from 'styled-components'

const config = require('./../../config.json')

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
        color: ${COLORS.white};
        font-family: 'Raleway', Arial, sans-serif;
    }
`