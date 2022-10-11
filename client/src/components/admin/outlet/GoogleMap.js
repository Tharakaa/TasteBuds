import React, { useRef, useState } from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const GoogleMapView = ({ mapPositionChange }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLR_MAP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map mapPositionChange={mapPositionChange} />;
};

function Map({ mapPositionChange }) {
  const ref = useRef();
  const [currentLocation, setCurrentLocation] = useState({
    lat: 6.932493154625668, 
    lng: 79.84605257087263,
  });
  const center = useMemo(() => currentLocation, []);

  const onPositionChange = () => {
    if (ref.current) {
      const position = {
        lat: ref.current.marker.position.lat(),
        lng: ref.current.marker.position.lng(),
      };
      mapPositionChange(position);
    }
  };

  return (
    <GoogleMap
      currentLocation={true}
      zoom={17}
      center={center}
      mapContainerClassName="map-container"
    >
      <Marker
        draggable={true}
        position={center}
        ref={ref}
        onPositionChanged={() => onPositionChange()}
      />
    </GoogleMap>
  );
}

export default GoogleMapView;
