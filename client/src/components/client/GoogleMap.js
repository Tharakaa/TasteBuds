import React, { useState } from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const GoogleMapView = ({ position }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLR_MAP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map position={position} />;
};

function Map({ position }) {
  console.log(parseFloat(position.lat));
  console.log(parseFloat(position.lng));
  const [currentLocation, setCurrentLocation] = useState({
    lat: parseFloat(position.lat) || 6.920895220553393,
    lng: parseFloat(position.lng) || 79.86268948191096,
  });
  const center = useMemo(() => currentLocation, []);

  return (
    <GoogleMap zoom={17} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default GoogleMapView;
