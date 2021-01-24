import React, { useRef, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { changeDisplay } from "../../redux/action";

const DrumPad = (props) => {
  const { keyCode, keyTrigger, url, id } = props.data;
  const { power, volume, changeDisplay } = props;
  const audioButtonRef = useRef();
  const audioElement = useRef();

  const handlePlay = useCallback(() => {
    if (power) {
      changeDisplay(id);
      handleStyles();
      audioElement.current.currentTime = 0;
      audioElement.current.volume = volume;
      // audioElement.current.play();
      // Had to do this to not have an error pop up in chrome.
      const audioPromise = audioElement.current.play();
      if (audioPromise !== undefined) {
        audioPromise
          .then((_) => {})
          .catch((error) => {
            console.log(
              "Error because of freeCodeCamp and Chrome trying to pause()",
              error
            );
          });
      }
    } else {
      changeDisplay("Turn on the power!");
    }
  }, [power, volume, changeDisplay, id]);

  useEffect(() => {
    const downHandler = (e) => {
      if (e.keyCode === keyCode) {
        handlePlay();
      }
    };
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [handlePlay, power, keyCode]);

  const handleStyles = () => {
    audioButtonRef.current.classList.add("active-sound");
    setTimeout(() => {
      audioButtonRef.current.classList.remove("active-sound");
    }, 100);
  };

  return (
    <div className="drum-pad" id={id} ref={audioButtonRef} onClick={handlePlay}>
      {keyTrigger}
      <audio ref={audioElement} className="clip" id={keyTrigger} src={url} />
    </div>
  );
};

export default connect(null, { changeDisplay })(DrumPad);
