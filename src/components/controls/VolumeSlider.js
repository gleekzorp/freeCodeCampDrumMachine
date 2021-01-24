import React from "react";
import { Form } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { changeVolume } from "../../redux/action";

const VolumeSlider = () => {
  const dispatch = useDispatch();
  const { volume } = useSelector(mapState);

  return (
    <Form>
      <Form.Group controlId="formBasicRangeCustom">
        <Form.Label>Volume</Form.Label>
        <Form.Control
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => dispatch(changeVolume(e.target.value))}
          // custom
        />
      </Form.Group>
    </Form>
  );
};

const mapState = (state) => {
  return {
    volume: state.volume.currentVolume
  };
};

export default VolumeSlider;
