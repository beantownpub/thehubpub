import React from 'react'
import ReactDOM from 'react-dom'
import { MainInfo, AboutInfo, ContactInfo, OurTeam, Services, Friends, FAQ } from './components/pages'
import { HeroHeader, Footer } from './components/common'
import { TopMenuBar, LinkList, TopNavBar, linkProps } from './components/TopBar'
require('dotenv').config()
const config = require('./config.json')
const PAGES = config.thehubpub.pages
const STATIC_URL = config.thehubpub.static_url
const COLORS = config.thehubpub.colors

function topMenu() {
    return (
        <div >
            <img src={STATIC_URL + "/img/logos/thehubpub_logo.png"}  alt="Hub Pub logo" />
        </div>
    )
}

function navBar() {
    return (
        <TopNavBar
            fontColor={COLORS.white}
            hoverColor={COLORS.cyan}
            props={linkProps(PAGES, 'top_menu')}
        />
    )
}

const menuList = <LinkList props={linkProps(PAGES, 'menu_list')} />

function navBarLogo() {
    var imgStyles = {position: 'absolute', padding: '.25em'}
    return (
        <a href="/">
            <img style={imgStyles} src={STATIC_URL + "/img/logos/thehubpub_second_logo.png"}  alt="Hub Pub logo" />
        </a>
    );
}

ReactDOM.render(
    <TopMenuBar
        bottomMenu=''
        fontColor={COLORS.white}
        navBarLogo={navBarLogo()}
        topMenu={topMenu()}
        menuList={menuList}
        navBar={navBar()}
        barColor={COLORS.black}
        menuColor={COLORS.gray} />,
    document.getElementById('topBar')
)

ReactDOM.render(
    <Footer/>,
    document.getElementById('footer')
)

if (document.getElementById('heroHeader')) {
    ReactDOM.render(
        <HeroHeader/>,
        document.getElementById('heroHeader')
    )
}

if (document.getElementById('aboutInfo')) {
    ReactDOM.render(
        <AboutInfo/>,
        document.getElementById('aboutInfo')
    )
}

if (document.getElementById('contactInfo')) {
    ReactDOM.render(
        <ContactInfo/>,
        document.getElementById('contactInfo')
    )
}

if (document.getElementById('mainInfo')) {
    ReactDOM.render(
        <MainInfo/>,
        document.getElementById('mainInfo')
    )
}
