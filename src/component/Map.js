/* global google */
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    //Build map
    <GoogleMap
      defaultZoom={8}
      zoom={props.zoom}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      center={props.center}
    >
    {/*Build markers*/}
      {props.markers && props.markers.filter(marker => marker.isVisible)
        .map((marker,idx) => (

          <Marker
            key={idx}
            position={{ lat: marker.lat, lng: marker.lng }}
            //onClick={() => props.handleMarkerClick(marker)}
            //animation={arr.length === 1 ? google.map.Animation.BOUNCE : google.maps.Animation.DROP}
          />
        //  {/*Build info windows*/}
            //{marker.isOpen &&
              //venueInfo.bestPhoto && (
                //<InfoWindow>
                  //<React.Fragment>
                    //  {/*Display venue image, if available, or placeholder image if not*/}
                    //  {/*eslint-disable-next-line */}
                    //  <img src={`${venueInfo.bestPhoto.prefix}200x200${venueInfo.bestPhoto.suffix}`} alt={"Venue image"}/>
                    //<p>{venueInfo.name}</p>
                  //</React.Fragment>
                //</InfoWindow>
              //)}
        //  </Marker>
      //  );
    ))}
    </GoogleMap>
  ))
//);

export default class Map extends Component {
    render() {
        return (
          <MyMapComponent
          {...this.props}
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAWa8VXVcDuIcPMIxrxjXMBRcpYta1zRnk"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%`, width: `75%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        );
    }
}
