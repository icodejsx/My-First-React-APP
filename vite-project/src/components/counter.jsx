import React, { Component, useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(1);
  return (
    <div>
      <span>{value}</span>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Increment
      </button>
    </div>
  );
};

export default Counter;
