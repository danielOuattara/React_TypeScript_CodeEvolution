// import { useState, useRef, useEffect } from "react";

// export default function MutableRef() {
//   const [timer, setTimer] = useState(0);
//   const interValRef = useRef<number | null>(null);

//   const stopTimer = () => {
//     if (interValRef.current) {
//       window.clearInterval(interValRef.current);
//     }
//   };

//   // const continueTimer = () => {
//   //   if (interValRef.current)
//   //     window.setInterval(() => {
//   //       setTimer((timer) => timer + 1);
//   //     }, 1000);
//   // };

//   useEffect(() => {
//     interValRef.current = window.setInterval(() => {
//       setTimer((timer) => timer + 1);
//     }, 1000);
//     return () => stopTimer();
//   }, []);

//   return (
//     <>
//       HookTimer - {timer}
//       {/* <button onClick={() => continueTimer()}>Continue</button> */}
//       <button onClick={() => stopTimer()}>Stop Timer</button>
//     </>
//   );
// }

// -----------------------------------------------------------------------------

import { useState, useRef, useEffect } from "react";

export default function MutableRef() {
  const [timer, setTimer] = useState(0);
  const [stopTiming, setStopTiming] = useState(false);
  const interValRef = useRef<number | null>(null);

  const toggleTimer = () => {
    setStopTiming(!stopTiming);
    if (stopTiming && interValRef.current) {
      return window.clearInterval(interValRef.current);
    } else if (interValRef.current) {
    }
  };

  // const continueTimer = () => {
  //   if (interValRef.current)
  //     window.setInterval(() => {
  //       setTimer((timer) => timer + 1);
  //     }, 1000);
  // };

  useEffect(() => {
    // setStopTiming(false);
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      if (interValRef.current) {
        return window.clearInterval(interValRef.current);
      }
    };
  }, []);

  return (
    <>
      HookTimer - {timer}
      {/* <button onClick={() => continueTimer()}>Continue</button> */}
      <button onClick={toggleTimer}>
        {stopTiming ? "Continue Timer" : "Stop Timer"}
      </button>
    </>
  );
}
