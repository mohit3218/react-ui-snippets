import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const bar = [0, 5, 10, 20, 35, 50, 75, 100];

  // Optional animation
  const [animatedBars, setAnimatedBars] = useState(
    new Array(bar.length).fill(0)
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedBars(bar);
    }, 100); // Animation trigger delay

    return () => clearTimeout(timeout);
  }, []);// eslint-disable-next-line

  return (
    <div className="w-full min-h-screen p-6 bg-white">
      <div className="w-full text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Progress Bar</h1>
      </div>

      <div className="flex flex-col space-y-4">
        {animatedBars.map((progress, index) => (
          <div
            key={index}
            className="h-10 bg-blue-500 rounded-3xl text-white font-semibold px-3 flex items-center justify-end transition-all duration-700 ease-in-out shadow-md"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemax={100}
            aria-valuemin={0}
          >
            {progress}%
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
