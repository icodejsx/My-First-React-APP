import React, { useState } from "react";
import Counter from "./counter";

function Counters() {
  const [Count, setcounter] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);
  co;

  const handleDelete = (counterId) => {
    console.log("delete handler", counterId);
  };

  return (
    <div>
      {Count.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          value={counter.value}
        />
      ))}
    </div>
  );
}

export default Counters;
