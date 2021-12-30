import React from 'react';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
    faStar,
    faUserCircle,
    faCoffee,
    faPen,
    faComment,
    faInfo,
    faUsers,
    faHome,
    faCamera,
    faEnvelope,
    faCalendar,
    faUtensils,
    faLock
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function getIcon(icon) {
    let icons = {
        "faStar": faStar,
        "faUsers": faUsers,
        "faPen": faPen,
        "faUserCircle": faUserCircle,
        "faComment": faComment,
        "faInfo": faInfo,
        "faCamera": faCamera,
        "faHome": faHome,
        "faEnvelope": faEnvelope,
        "faCalendar": faCalendar,
        "faFacebook": faFacebook,
        "faInstagram": faInstagram,
        "faTwitter": faTwitter,
        "faLinkedin": faLinkedin,
        "faCoffee": faCoffee,
        "faGithub": faGithub,
        "faUtensils": faUtensils,
        "faLock": faLock
    }
    let Icon = icons[icon]
    return Icon
}

export const SocialIcon = (props) => {
    return (
        <FontAwesomeIcon icon={getIcon(props.iconName)} style={props.style} fixedWidth />
    )
}

export default class MenuIcon extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <FontAwesomeIcon icon={this.props.name} style={this.props.style} fixedWidth />
		)
    }
}