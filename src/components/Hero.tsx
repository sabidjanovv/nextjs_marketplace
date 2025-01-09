"use client";
import React, { useState } from "react";

const Hero = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h2>Hero {count}</h2>
      <button onClick={() => setCount((p: number): number => p + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Hero;
