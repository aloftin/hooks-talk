import React from 'react';
import useDad from './useDad';

export default function DadJoke() {
  const [data, fetchJoke] = useDad();

  return (
    <div className="App">
      <p>{data.joke}</p>
      <button onClick={fetchJoke}>New Joke</button>
    </div>
  );
}
