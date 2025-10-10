import { useState } from 'react';

export const MyCounterApp = () => {
  const [counter, setCounter] = useState(5);

  const handleAdd = () => {};

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Counter: {counter}</h1>
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <button>+1</button>
          <button>-1</button>
          <button>Reset</button>
        </div>
      </div>
    </>
  );
};
