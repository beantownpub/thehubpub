import React from 'react'
import { SocialNav } from './social.js'
import { StyledFooter } from './styles.js'

export const Footer = () => {
    const year = new Date().getFullYear()
    const gitHash = process.env.GIT_HASH
    const version = process.env.VERSION
    return (
        <StyledFooter fontColor="white" backgroundColor="transparent" aria-labelledby="Page footer">
            <footer>
                <img src="/images/logos/thehubpub_logo.png" alt="The Hub Pub logo" />
                <h3>18 Province Street Boston, MA 02108</h3>
                <h2>Call: 617-227-8952</h2>
                <h2>Stay Connected</h2>
                <SocialNav/>
                <h2>{'© ' + year} The Hub Pub </h2>
                <h4>Commit: {gitHash} Version: {version}</h4>
            </footer>
        </StyledFooter>
    )
}
