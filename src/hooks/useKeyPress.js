// https://usehooks.com/useKeyPress/
// Modified to use KeyCode instead of Key
import { useEffect, useState } from "react";

export function useKeyPress(targetKey) {
  console.log("UseKey");
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ keyCode }) {
    if (keyCode === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ keyCode }) => {
    if (keyCode === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}

//////////////////////////////////////////////////
// Someone said to throw it all into the useEffect
//////////////////////////////////////////////////
// import { useEffect, useState } from "react";

// export function useKeyPress(targetKey) {
//   console.log("useKeyPress");
//   const [keyPressed, setKeyPressed] = useState(false);

//   useEffect(() => {
//     function downHandler({ keyCode }) {
//       console.log("useKeyPress");
//       if (keyCode === targetKey) {
//         setKeyPressed(true);
//       }
//     }

//     const upHandler = ({ keyCode }) => {
//       if (keyCode === targetKey) {
//         setKeyPressed(false);
//       }
//     };

//     window.addEventListener("keydown", downHandler);
//     window.addEventListener("keyup", upHandler);

//     return () => {
//       window.removeEventListener("keydown", downHandler);
//       window.removeEventListener("keyup", upHandler);
//     };
//   }, [targetKey]);

//   return keyPressed;
// }

////////////
// Original
////////////
// import { useEffect, useState } from "react";

// export function useKeyPress(targetKey) {
//   // State for keeping track of whether key is pressed
//   const [keyPressed, setKeyPressed] = useState(false);

//   // If pressed key is our target key then set to true
//   function downHandler({ keyCode }) {
//     if (keyCode === targetKey) {
//       setKeyPressed(true);
//     }
//   }

//   // If released key is our target key then set to false
//   const upHandler = ({ keyCode }) => {
//     if (keyCode === targetKey) {
//       setKeyPressed(false);
//     }
//   };

//   // Add event listeners
//   useEffect(() => {
//     window.addEventListener("keydown", downHandler);
//     window.addEventListener("keyup", upHandler);
//     // Remove event listeners on cleanup
//     return () => {
//       window.removeEventListener("keydown", downHandler);
//       window.removeEventListener("keyup", upHandler);
//     };
//   }, []); // Empty array ensures that effect is only run on mount and unmount

//   return keyPressed;
// }
