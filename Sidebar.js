import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'antd';
import { toggleNightMode } from '../actions/nightModeActions';

const Sidebar = ({ toggleNightMode }) => {
  const handleToggleNightMode = () => {
    toggleNightMode();
  };

  return (
    <div>
      <p>Sidebar Content</p>
      <Switch onChange={handleToggleNightMode} />
    </div>
  );
};

export default connect(null, { toggleNightMode })(Sidebar);
