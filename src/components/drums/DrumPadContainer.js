import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import DrumPad from "./DrumPad";

const DrumPadContainer = (props) => {
  const { power, bank, volume, whichBank } = props;
  const [currentBank, setCurrentBank] = useState(bank[whichBank]);

  useEffect(() => {
    setCurrentBank(bank[whichBank]);
  }, [whichBank, bank]);

  const renderDrumPads = () => {
    return currentBank.map((item) => {
      return (
        <DrumPad key={item.id} data={item} power={power} volume={volume} />
      );
    });
  };

  return (
    <div className="drumpad-grid" id="drum-machine">
      {renderDrumPads()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    power: state.power.off,
    bank: state.bank,
    whichBank: state.bank.whichBank,
    volume: state.volume.currentVolume
  };
};

export default connect(mapStateToProps)(DrumPadContainer);
