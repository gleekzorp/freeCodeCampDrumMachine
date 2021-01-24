import React from "react";

import DrumPadContainer from "./drums/DrumPadContainer";
import ControlsContainer from "./controls/ControlsContainer";

const DrumMachine = () => {
  return (
    <div className="container" id="drum-machine">
      <DrumPadContainer />
      <ControlsContainer />
    </div>
  );
};

export default DrumMachine;
