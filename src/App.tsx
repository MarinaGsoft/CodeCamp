import React, { useState, useEffect } from "react";

export const App: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Trenutni broj: ${count}`);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Povećaj</button>
    </div>
  );
};
