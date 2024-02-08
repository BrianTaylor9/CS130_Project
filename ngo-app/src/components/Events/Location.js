import React from 'react'
import GoogleMapReact from "google-map-react";


const MapComp = ({ text }) => <div>{text}</div>;
export default function Location() {

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <>
      <div className="location">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <MapComp lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>

        {/* <div className="location">MAP</div> */}
      </div>
    </>
  );
}
