import React from "react"
import { ContentSection } from "@jalgraves/react-components-library"
import { ContentContainer } from "../main.js"
// import { config } from "../../../utils/main.js"

export const ContactInfo = () => {
  return (
    <ContentSection display="flex" flexFlow="column wrap">
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
    </ContentSection>
  )
}
