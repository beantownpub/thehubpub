import React from 'react'
import ReactDOM from 'react-dom'
import ReactRoutes from './components/reactRoutes'
import { Footer } from './components/content/footer/main'
import { TopMenuBar, LinkList, TopNavBar, linkProps } from './components/topBar/main'
import { config } from './utils/main'
const PAGES = config.pages
const COLORS = config.colors

function topMenu() {
    return (
        <div >
            <img src={"/images/logos/thehubpub_logo.png"}  alt="Hub Pub logo" />
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
            <img style={imgStyles} src={"/images/logos/thehubpub_second_logo.png"}  alt="Hub Pub logo" />
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

if (document.getElementById('app')) {
    ReactDOM.render(
        <ReactRoutes/>,
        document.getElementById('app')
    )
}

ReactDOM.render(
    <Footer/>,
    document.getElementById('footer')
)
