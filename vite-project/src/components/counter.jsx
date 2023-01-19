import React, { Component, useState } from "react";

const Counter = () => {
  const [count] = useState(0);
  const formatCount = (count) => (count === 0 ? "Zero" : count);
  const badge = () => (count === 0 ? "bg-yellow-600" : "bg-blue-600");
  const tags = ["tag1", "tag2", "tag3"];

  return (
    <div>
      <span className={`m-2 p-1 rounded text-base text-white ${badge()}`}>
        {formatCount(count)}
      </span>
      <button className=" hover:bg-blue-600 text-black-200 font-medium py-2 px-4 rounded shadow-md">
        Increment
      </button>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};
export default Counter;
