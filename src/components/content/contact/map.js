import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { StyledContent } from '../styles'

export const Map = withScriptjs(withGoogleMap((props) =>
    <StyledContent>
        <GoogleMap
            defaultZoom={17}
            defaultCenter={{ lat: 42.35739537041983, lng: -71.05960403766282 }}
        >
        {props.isMarkerShown && <Marker position={{ lat: 42.35739537041983, lng: -71.05960403766282 }} label={"The Hub Pub"} />}
        {props.isMarkerShown && <Marker position={{ lat: 42.35728430266154, lng: -71.0610939826688 }} label={"Beantown Pub"} />}
        </GoogleMap>
    </StyledContent>
))
