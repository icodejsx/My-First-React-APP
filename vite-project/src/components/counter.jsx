import React, { Component, useState } from "react";

const Counter = (props) => {
  let [count, setCount] = useState(props.value);
  const formatCount = (count) => (count === 0 ? "Zero" : count);
  const badge = () => (count === 0 ? "bg-yellow-600" : "bg-blue-600");
  const tags = ["tag1", "tag2", "tag3"];
  const handleIncrement = (pro) => setCount(count + 1);
  const helper = () => {
    handleIncrement({ id: 1 });
  };
  const { value, id, onDelete } = props;

  return (
    <div>
      <span className={`m-2 p-1 rounded text-base text-white ${badge()}`}>
        {formatCount(count)}
      </span>
      <button
        onClick={(pro) => helper(pro)}
        className=" hover:bg-blue-600 text-black-200 font-medium py- 2 px-4 rounded shadow-md"
      >
        Increments
      </button>
      <button
        onClick={() => props.onDelete(props.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
      {/* <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul> */}
    </div>
  );
};
export default Counter;
