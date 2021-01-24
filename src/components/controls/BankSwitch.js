import React from "react";
import { Form } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { toggleBank } from "../../redux/action";

const BankSwitch = () => {
  const dispatch = useDispatch();
  const { whichBank } = useSelector(mapState);
  return (
    <Form>
      <Form.Check
        type="switch"
        id="bank"
        label="Bank"
        checked={whichBank === "bankOne" ? true : false}
        onChange={() => dispatch(toggleBank())}
      />
    </Form>
  );
};

const mapState = (state) => {
  return {
    whichBank: state.bank.whichBank
  };
};

export default BankSwitch;
