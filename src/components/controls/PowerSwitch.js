import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { togglePower } from "../../redux/action";

const PowerSwitch = () => {
  const dispatch = useDispatch();
  const { power } = useSelector(mapState);
  return (
    <div className="power-switch">
      <div>Power</div>
      <label className="switch">
        <input
          type="checkbox"
          id="power"
          label="Power"
          checked={power}
          onChange={() => dispatch(togglePower())}
        />
        <span class="slider"></span>
      </label>
    </div>
  );
};

const mapState = (state) => {
  return {
    power: state.power.off
  };
};

export default PowerSwitch;
