import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Select, Button } from 'antd';
import { setRegion } from '../actions/mapActions';

const { Option } = Select;

const FormInput = ({ setRegion }) => {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleChange = (value) => {
    setSelectedRegion(value);
  };

  const handleLoad = () => {
    // You can fetch the region information from an API or a static data file here
    const regionInfo = {
      name: selectedRegion,
      lat: 0, // Provide the latitude value for the selected region
      lon: 0, // Provide the longitude value for the selected region
      currency: '', // Region's currency symbol
      speedUnit: '', // Units of speed
      distanceUnit: '', // Units of distance
      volumeUnit: '', // Units of volume
      timezone: '', // Timezone(s) information
    };

    setRegion(regionInfo);
  };

  return (
    <div>
      <Select style={{ width: 200 }} onChange={handleChange} value={selectedRegion}>
        <Option value="United States">United States</Option>
        <Option value="India">India</Option>
        <Option value="United Kingdom">United Kingdom</Option>
      </Select>
      <Button onClick={handleLoad}>Load</Button>
    </div>
  );
};

export default connect(null, { setRegion })(FormInput);
