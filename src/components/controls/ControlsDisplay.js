import React from "react";
import { useSelector } from "react-redux";

const ControlsDisplay = () => {
  const { displayValue } = useSelector(mapState);
  return (
    <div id="display">
      <h1>{displayValue}</h1>
    </div>
  );
};

const mapState = (state) => {
  return {
    displayValue: state.display.displayValue
  };
};

export default ControlsDisplay;
