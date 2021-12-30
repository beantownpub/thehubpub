import React from 'react'
import { StyledContentContainer } from '../styles'
import { Map } from './map'
import { ContentContainer } from '../main'
// import { config } from '../../../utils/main'
// const COLORS = config.colors

const info = () => {
    return (
        <ContentContainer>
            <h1>Contact Hub Pub</h1>
            <h3>Email</h3>
            <p>hubpubboston@gmail.com</p>
            <h3>Call</h3>
            <p>617-227-8952</p>
            <h3>Address</h3>
            <p>18 Province Street<br />Boston MA, 02108</p>
            <h6>MRJ INC. HUB PUB DBA</h6>
        </ContentContainer>
    )
}

export const ContactInfo = () => {
    const api_key = "AIzaSyAXB15L0ZUglrIv_DlWz7XrVSQ0g6lGiwI"
    return (
        <StyledContentContainer margin="5rem auto auto auto">
            {info()}
            <ContentContainer>
                <Map
                    isMarkerShown
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${api_key}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `225px`, maxWidth: `80%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </ContentContainer>
        </StyledContentContainer>
    )
}
