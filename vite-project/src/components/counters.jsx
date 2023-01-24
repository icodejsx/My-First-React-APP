import React, { useState } from "react";
import Counter from "./counter";

function Counters() {
  const [Count, setCounter] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const handleDelete = (counterId) => {
    const counters =  counters.filter((c) => c.id !== counterId);
    setCounter({ counters });
  };

  return (
    <div>
      {Count.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          value={counter.value}
          id={counter.id}
        />
      ))}   

      
    </div>
  );
}

export default Counters;
