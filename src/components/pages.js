import React from 'react'
import { InfoSection } from './common'
import { Map } from './map'
// import { ContactForm } from './contactForm'
// import { LinkButton } from './common'

const config = require('./../config.json')
const COLORS = config.thehubpub.colors

export const MainInfo = () => {
    return (
        <div>
            <InfoSection bgColor={COLORS.red} fontColor={COLORS.white} borderTop={"2px solid " + COLORS.yellow}>
                <section>
                    <h5>Cocktails, Beer, Billiards, and, Fine Pub Dining</h5>
                    <h1>Hours</h1>
                    <h2>Monday - Saturday</h2>
                    <h3>Open 11am to 2am</h3>
                    <h2>Sunday</h2>
                    <h3>Open 12pm to 2am</h3>
                </section>
            </InfoSection>
            <InfoSection bgColor={COLORS.blue} fontColor={COLORS.white} borderTop={"2px solid " + COLORS.yellow}>
                <section>
                <h2>Pool tables, skiball, and pinball available in our upstairs game room!</h2>
                </section>
            </InfoSection>
        </div>
    )
}

export const AboutInfo = () => {
    return (
        <div>
            <InfoSection bgColor={COLORS.softGray} marginTop="1rem">
                <section>
                    <h1>About The Hub Pub</h1>
                </section>
            </InfoSection>
            <InfoSection bgColor={COLORS.softGray} fontColor={COLORS.black}>
                <section>
                    <article>
                    <p>Conveniently located just steps away from Boston’s Freedom Trail and nestled in the heart of historic downtown, The Hub Pub is a classic American pub offering fine pub dining and a casual drinking atmosphere. Whether you’re looking for an ice cold beer after work, a great place to meet friends, or somewhere to feel at home while you’re traveling - The Hub Pub is the place to be!</p>
                    </article>
                </section>
            </InfoSection>
            <InfoSection bgColor="#383838" fontColor='#fcba03'>
                <section>
                    <h3>Frequently Asked Questions</h3>
                    <h4>Do you accept credit cards yes?</h4>
                    <p>Yes.</p>
                    <h4>Do you take reservations?</h4>
                    <p>No, but we do offer private parties for larger gatherings.</p>
                    <h4>What time do you serve food 'til?</h4>
                    <p>12:00 am, though subject to change based on demand.</p>
                    <h4>How many t.v.s do you have?</h4>
                    <p>A lot! There is a large projection screen and many big screens scattered throughout the rest of the bar.</p>
                    <h4>Can you put my game on?</h4>
                    <p>Most likely, if it's available.</p>
                    <h4>Do you have takeout?</h4>
                    <p>Yes</p>
                    <h4>How much does pool cost?</h4>
                    <p>Pool tables are coin operated and are &#65284;2.50 a game, there are change machines located in the pool area. Pool tables are first come first serve.</p>
                    <h4>Can I have a job?</h4>
                    <p>If you would like to apply for a job please come see us in person.</p>
                </section>
            </InfoSection>
        </div>
    )
}

export const ContactInfo = () => {
    const api_key = "AIzaSyAXB15L0ZUglrIv_DlWz7XrVSQ0g6lGiwI"
    return (
        <div>
        <InfoSection bgColor={COLORS.softGray}>
            <section>
                <h3>Email</h3>
                <h2>hubpubboston@gmail.com</h2>
                <h3>Call</h3>
                <h2>617-227-8952</h2>
                <h3>Address</h3>
                <h2>18 Province Street<br />Boston MA, 02108</h2>
                <h6>MRJ INC. HUB PUB DBA</h6>
            </section>
        </InfoSection>
        <InfoSection bgColor='#383838'>
            <Map
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${api_key}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `225px`, maxWidth: `80%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </InfoSection>
        </div>
    )
}

export const FAQ = () => {
    return (
        <div>
            <InfoSection bgColor={COLORS.softGray} marginTop='5rem'>
                <section>
                    <article>
                    Frequently Asked Questions
                    </article>
                </section>
            </InfoSection>
            <InfoSection bgColor={COLORS.softGray} fontColor='#000000'>
                <section>
                    <h3>Frequently Asked Questions</h3>
                    <h4>Do you accept credit cards yes?</h4>
                    <p>Yes.</p>
                    <h4>Do you have a public restroom?</h4>
                    <p>No.</p>
                    <h4>Can I have a job?</h4>
                    <p>If you would like to apply for a job please come see us in person.</p>
                </section>
            </InfoSection>
        </div>
    )
}

export const ErrorPage = () => {
    return (
        <div>
            <InfoSection bgColor={COLORS.softGray}>
                <section>
                    <h1>The Hub Pub</h1>
                    <h2>Something has gone awry</h2>
                    <h2>The site developer has made a mistake and apologizes in advance for the inconvenience</h2>
                </section>
            </InfoSection>
        </div>
    )
}