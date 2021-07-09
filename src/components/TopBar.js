import React from 'react'
import { StyledTopNav, StyledNavBar, StyledLink } from './styles/navStyles'
import { StyledCloseMenu, StyledHamburger, StyledSlideMenu } from './styles/menuStyles'
import MenuIcon, { getIcon } from './icons'

const config = require('./../config.json')
const slide = require('./menuSlide')
const COLORS = config.thehubpub.colors

export function linkProps(pages, menuType) {
    const props = []
    let id = 0
    for (const page of Object.keys(pages)) {
            if (pages[page][menuType] === true) {
                props.push({id: id, name: pages[page].name, icon: pages[page].icon, text: pages[page].text})
            }
        ++id
    }
    return props
}

const iconStyle = {
    color: COLORS.yellow,
    fontSize: '1em'
}

export function LinkList(props) {
    const slider = props.props.map((prop) =>
        <StyledLink key={prop.id}>
        <a href={prop.name} className="animate">
            <MenuIcon
                name={getIcon(prop.icon)}
                style={iconStyle} /> {prop.text}</a>
        </StyledLink>
    );
    return (
        <div>{slider}</div>
    );
}

export function TopNavBar(props) {
    const navBar = props.props.map((prop) =>
        <a key={prop.id} href={prop.name}>{prop.text}</a>
    )
    return (
        <StyledTopNav hoverColor={props.hoverColor} fontColor={props.fontColor}>
            <nav className="top_nav">{navBar}</nav>
        </StyledTopNav>
    )
}

function closeButton() {
    return (
        <StyledCloseMenu>
            <button className="menu_close" id="close_menu" onClick={() => slide.menuClose()}>Close Menu</button>
        </StyledCloseMenu>
    )
}

function openButton() {
    return (
        <StyledHamburger>
            <button className="hamburger" id="open_menu" onClick={() => slide.menuOpen()}>Open Menu</button>
        </StyledHamburger>
    )
}

export class TopMenuBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <StyledNavBar barColor={this.props.barColor}>
                <StyledSlideMenu menuColor={this.props.menuColor}>
                    <div className="slide_menu">
                    {this.props.topMenu}
                        <div className="menu_list">
                            {this.props.menuList}
                        </div>
                        {closeButton()}
                        <h2>The Friendliest Pub in the Hub!</h2>
                    </div>
                </StyledSlideMenu>
                {openButton()}
                {this.props.navBarLogo}
                {this.props.bottomMenu}
                {this.props.navBar}
            </StyledNavBar>
        )
    }
}