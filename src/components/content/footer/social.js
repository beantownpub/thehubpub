import React from 'react'
import { Icon } from '../icons/main.js'
import { config } from '../../../utils/main.js'
const urls = config.urls

const iconStyle = {
  padding: '0 .25em',
  color: config.colors.yellow,
  fontSize: '3rem'
}

export const SocialNav = () => {
  return (
    <nav style={{margin: '1rem auto'}}>
      <a href={urls["facebook"]}><Icon iconName="faFacebook" style={iconStyle} /></a>
    </nav>
  )
}
