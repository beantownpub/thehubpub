import React from 'react'
import { linkProps } from './main.js'
import { config } from '../../utils/main.js'
import { StyledTopNav } from './styles.js'

const COLORS = config.colors

export const NavBarLogo = () => {
    const imgStyles = {position: 'absolute', padding: '.25em'}
    return (
        <a href="/">
            <img style={imgStyles} src={"/images/logos/thehubpub_second_logo.png"}  alt="Hub Pub logo" />
        </a>
    )
}

function TopNavBar(props) {
    const navBar = props.props.map((prop) =>
        <a key={prop.id} href={prop.name}>{prop.text}</a>
    )
    return (
        <StyledTopNav hoverColor={props.hoverColor} fontColor={props.fontColor}>
            <nav className="top_nav">{navBar}</nav>
        </StyledTopNav>
    )
}

export function navBar(pages) {
    return (
        <TopNavBar
            fontColor={COLORS.white}
            hoverColor={COLORS.cyan}
            props={linkProps(pages, 'top_menu')}
        />
    )
}
