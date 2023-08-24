import React from 'react'
import { config } from '../../utils/main.js'
import { StyledContentContainer, StyledContent } from './styles.js'
import { HeroHeader } from './heroHeader/main.js'
const COLORS = config.colors

export const ContentContainer = (props) => {
    return (
        <StyledContent
            aria-labelledby={`Container ${props.label} content`}
            bgColor={props.bgColor || config.colors.backgroundGray}
            fontColor={props.fontColor || config.colors.black}
            pFontColor={props.pFontColor || config.colors.black}
            borderTop={props.borderTop}
        >
            {props.children}
        </StyledContent>
    )
}

export const Home = () => {
    return (
        <div>
            <HeroHeader/>
            <StyledContentContainer>
                <ContentContainer bgColor={COLORS.red} fontColor={COLORS.white} borderTop={`2px solid ${COLORS.yellow}`} label="Main info">
                    <h1>Cocktails, Beer, Billiards, and, Fine Pub Dining</h1>
                    <h5>Hours</h5>
                    <h2>Monday - Saturday</h2>
                    <h3>Open 11am to 2am</h3>
                    <h2>Sunday</h2>
                    <h3>Open 12pm to 2am</h3>
                    <br /><a href='/menu'>See pub dining menu &#10148;</a>
                </ContentContainer>
                <StyledContent bgColor="#383838" fontColor='#fcba03' aria-labelledby="Gift cards and merchandise">
                    <section>
                        <h3>Gift Cards and Merchandise Available<br /></h3>
                        <h4>Make your next private event a memorable one and book it at Hub Pub!<br /><a href='/parties'>Learn more &#10148;</a></h4>
                    </section>
                </StyledContent>
                <StyledContent bgColor="#fcba03">
                    <section>
                        <h3>Want more info?<br /></h3>
                        <h2>See our frequently asked questions<br /><a href='/about'><span>FAQ &#10148;</span></a></h2>
                    </section>
                </StyledContent>
                <StyledContent bgColor={COLORS.hubPubBlue} fontColor={COLORS.white} borderTop={"2px solid " + COLORS.yellow}>
                        <h2>Pool tables, skiball, and pinball available in our upstairs game room!</h2>
                </StyledContent>
            </StyledContentContainer>
        </div>
    )
}
