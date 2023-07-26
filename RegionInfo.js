import React from 'react';
import { connect } from 'react-redux';

const RegionInfo = ({ region }) => {
  if (!region) {
    return null;
  }

  return (
    <div>
      <h2>{region.name}</h2>
      <p>Currency: {region.currency}</p>
      <p>Speed: {region.speedUnit}</p>
      <p>Distance: {region.distanceUnit}</p>
      <p>Volume: {region.volumeUnit}</p>
      <p>Timezone: {region.timezone}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  region: state.map.region,
});

export default connect(mapStateToProps)(RegionInfo);
