import React, { useState } from "react";
import Counter from "./counter";

function Counters() {
  const [counters, setCounters] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };

  return (
    <div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={() => handleDelete(counter.id)}
          value={counter.value}
          id={counter.id}
        />
      ))}
    </div>
  );
}

export default Counters;
