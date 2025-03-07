"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  targetNumber: number;
  title: string;
  duration?: number;
  containerCountClass?: string;
  containerTitleClass?: string;
}

const Counter: React.FC<CounterProps> = ({
  targetNumber,
  title,
  duration = 2,
  containerCountClass,
  containerTitleClass,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < targetNumber) {
      const interval = setInterval(() => {
        setCount((prev) => {
          const increment = Math.ceil(targetNumber / (duration * 30));
          return prev + increment >= targetNumber
            ? targetNumber
            : prev + increment;
        });
      }, 33);

      return () => clearInterval(interval);
    }
  }, [count, targetNumber, duration]);

  return (
    <div className="flex flex-col items-center">
      <h2 className={`${containerCountClass}`}>
        {count} {"+"}
      </h2>
      <p className={`${containerTitleClass}`}>{title}</p>
    </div>
  );
};

export default Counter;
