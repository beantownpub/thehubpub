import React from 'react'
import { StyledContentContainer, StyledContent } from '../styles'
import { ContentContainer } from '../main'
import { config } from '../../../utils/main'

const COLORS = config.colors

const faq = () => {
    return (
        <ContentContainer bgColor={COLORS.darkGray} pFontColor={COLORS.yellow}>
            <h3>Frequently Asked Questions</h3>
            <h4>Do you accept credit cards yes?</h4>
            <p>Yes.</p>
            <h4>Do you take reservations?</h4>
            <p>No, but we do offer private parties for larger gatherings.</p>
            <h4>What time do you serve food 'til?</h4>
            <p>Typically kitchen closes around 11:30pm, though subject to change based on demand.</p>
            <h4>How many t.v.s do you have?</h4>
            <p>A lot! There is a large projection screen and many big screens scattered throughout the rest of the bar.</p>
            <h4>Can you put my game on?</h4>
            <p>Most likely, if it's available.</p>
            <h4>Do you have takeout?</h4>
            <p>Yes</p>
            <h4>How much does pool cost?</h4>
            <p>Pool tables are coin operated and are &#65284;2.00 a game, there are change machines located in the pool area. Pool tables are first come first serve.</p>
            <h4>Can I have a job?</h4>
            <p>If you would like to apply for a job please come see us in person.</p>
        </ContentContainer>
    )
}

export const AboutInfo = () => {
    return (
        <div>
            <StyledContentContainer margin="5rem auto auto auto">
                <ContentContainer bgColor={COLORS.backgroundGray} pFontColor={COLORS.black}>
                    <section>
                        <h1>About The Hub Pub</h1>
                        <article>
                        <p>Conveniently located just steps away from Boston’s Freedom Trail and nestled in the heart of historic downtown, The Hub Pub is a classic American pub offering fine pub dining and a casual drinking atmosphere. Whether you’re looking for an ice cold beer after work, a great place to meet friends, or somewhere to feel at home while you’re traveling - The Hub Pub is the place to be!</p>
                        </article>
                    </section>
                </ContentContainer>
                <StyledContent bgColor="#383838" fontColor='#fcba03'>
                    {faq()}
                </StyledContent>
            </StyledContentContainer>
        </div>
    )
}
