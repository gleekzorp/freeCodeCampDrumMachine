import React from "react";
import { Form } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { togglePower } from "../../redux/action";

const PowerSwitch = () => {
  const dispatch = useDispatch();
  const { power } = useSelector(mapState);
  return (
    <Form>
      <Form.Check
        type="switch"
        id="power"
        label="Power"
        checked={power}
        onChange={() => dispatch(togglePower())}
      />
    </Form>
  );
};

const mapState = (state) => {
  return {
    power: state.power.off
  };
};

export default PowerSwitch;
