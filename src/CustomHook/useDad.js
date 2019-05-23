import { useState, useEffect } from 'react';

const API = `https://icanhazdadjoke.com/`;

export default function useDad() {
  const [data, setData] = useState({});

  async function fetchJoke() {
    const res = await fetch(API, {
      headers: {
        Accept: 'application/json'
      }
    });

    const data = await res.json();
    setData(data);
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return [data, fetchJoke];
}
