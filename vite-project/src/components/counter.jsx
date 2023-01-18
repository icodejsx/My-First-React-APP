import React, { Component, useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(1);
  return (
    <div>
      <span>{formatCount}</span>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Increment
      </button>
    </div>
  );
};
const formatCount = () => {
  const { count } = this.props;
  return count === 0 ? "Zero" : count;
};

export default Counter;
