import React from "react";

import PowerSwitch from "./PowerSwitch";
import ControlsDisplay from "./ControlsDisplay";
import VolumeSlider from "./VolumeSlider";
import BankSwitch from "./BankSwitch";

const ControlsContainer = () => {
  return (
    <div>
      <PowerSwitch />
      <ControlsDisplay />
      <VolumeSlider />
      <BankSwitch />
    </div>
  );
};

export default ControlsContainer;
