import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

import DrumPadContainer from "./drums/DrumPadContainer";
import ControlsContainer from "./controls/ControlsContainer";

const DrumMachine = () => {
  return (
    <div className="container" id="drum-machine">
      <div className="logo">
        FCC <FontAwesomeIcon icon={faFreeCodeCamp} className="icon" />
      </div>
      <DrumPadContainer />
      <ControlsContainer />
    </div>
  );
};

export default DrumMachine;
