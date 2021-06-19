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
            <InfoSection bgColor={COLORS.yellow}>
                <section>
                    <h1 style={{textTransform: "uppercase"}}>cocktails, beer, billiards, and, fine pub dining</h1>
                    <h2>Monday - Saturday</h2>
                    <h2>Open 11am to 2am</h2>
                    <h2>Sunday</h2>
                    <h2>Open 12pm to 2am</h2>
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