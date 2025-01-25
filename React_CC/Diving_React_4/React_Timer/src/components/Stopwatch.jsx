import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  const handleStart = () => {
    setStartTime(Date.now() - elapsedTime); //maintain elapsed time to resume
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    setStartTime(null);
  };

  const formatTime = (timeMs) => {
    // console.log(timeSec)
    const totalSeconds = Math.floor(timeMs / 1000);
    const milliseconds = Math.floor((timeMs % 1000) / 10);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center min-h-screen">
        <h2 className="text-white text-3xl font-bold bg-purple-700/40 px-6 py-3 rounded-md">
          {formatTime(elapsedTime)}
        </h2>
        <div className="flex gap-3">
          <button
            onClick={handleStop}
            className="bg-red-600 rounded-sm px-4 py-2 shadow-sm text-white"
          >
            Stop
          </button>
          <button
            onClick={handleStart}
            className="bg-white rounded-sm px-4 py-2 shadow-sm text-black"
          >
            Start
          </button>
          <button
            onClick={handleReset}
            className="bg-blue-600 rounded-sm px-4 py-2 shadow-sm text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Stopwatch;
