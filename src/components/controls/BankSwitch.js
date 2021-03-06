import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleBank } from "../../redux/action";

const BankSwitch = () => {
  const dispatch = useDispatch();
  const { whichBank } = useSelector(mapState);
  return (
    <div className="bank-switch">
      <div>{whichBank}</div>
      <label className="switch">
        <input
          type="checkbox"
          id="bank"
          label="Bank"
          checked={whichBank === "bankOne" ? true : false}
          onChange={() => dispatch(toggleBank())}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

const mapState = (state) => {
  return {
    whichBank: state.bank.whichBank
  };
};

export default BankSwitch;
