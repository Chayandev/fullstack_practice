import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [timerTime, setTimerTime] = useState(50000);

  useEffect(() => {
   const timer= setInterval(() => {
      setTimerTime((prevTime) => prevTime - 1);
    }, 1000);
    return ()=>clearInterval(timer)
  }, []);

  const formatTime = (time) => {
    const roundedTime = Math.floor(time);

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(roundedTime / 3600);
    const minutes = Math.floor((roundedTime % 3600) / 60);
    const remSeconds = roundedTime % 60;

    // Pad hours, minutes, and seconds to two digits
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <div>{formatTime(timerTime)}</div>
    </>
  );
}

export default App;
