// Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { connect } from 'react-redux';

const Map = ({ region }) => {
  const position = [region?.lat || 0, region?.lon || 0];

  return (
    <MapContainer center={position} zoom={6} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {region && (
        <Marker position={position}>
          <Popup>
            {region.name}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

const mapStateToProps = (state) => ({
  region: state.map.region,
});

export default connect(mapStateToProps)(Map);
