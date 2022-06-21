import { useState, useRef, useEffect } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (interValRef.current) window.clearInterval(interValRef.current);
  };

  // const continueTimer = () => {
  //   if (interValRef.current)
  //     window.setInterval(() => {
  //       setTimer((timer) => timer + 1);
  //     }, 1000);
  // };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => stopTimer();
  }, []);

  return (
    <>
      HookTimer - {timer}
      {/* <button onClick={() => continueTimer()}>Continue</button> */}
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </>
  );
};
