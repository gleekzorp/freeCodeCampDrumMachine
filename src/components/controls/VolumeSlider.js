import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeVolume } from "../../redux/action";

const VolumeSlider = () => {
  const dispatch = useDispatch();
  const { volume } = useSelector(mapState);

  return (
    <div className="volume-slider-container">
      <input
        className="volume-slider"
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => dispatch(changeVolume(e.target.value))}
      />
    </div>
  );
};

const mapState = (state) => {
  return {
    volume: state.volume.currentVolume
  };
};

export default VolumeSlider;
