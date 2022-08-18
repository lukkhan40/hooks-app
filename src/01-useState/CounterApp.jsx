import { useState } from "react";

export const CounterApp = () => {
  const [counters, setCounters] = useState({
    counter1: 0,
    counter2: 10,
    counter3: 20,
  });
  return (
    <>
      <h1>Counter 1: {counters.counter1}</h1>
      <h1>Counter 2: {counters.counter2}</h1>
      <h1>Counter 3: {counters.counter3}</h1>
      <hr />
      <button
        onClick={() =>
          setCounters((counter) => ({
            ...counter,
            counter1: counter.counter1 + 1,
          }))
        }
        className="btn"
      >
        +1
      </button>
    </>
  );
};
