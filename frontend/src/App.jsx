import "./App.css";
import React, { useEffect, useState } from "react";

const API_URL = "https://cse471-deployment-demo.onrender.com";

function App() {
  const [message, setMessage] = useState("Loading...");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch(`${API_URL}/api/message`)
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setCounter(data.counter);
      })
      .catch(() => setMessage("Error fetching message ❌"));
  }, []);

  const increment = async () => {
    const res = await fetch(`${API_URL}/api/increment`, { method: "POST" });
    const data = await res.json();
    setCounter(data.counter);
  };

  const decrement = async () => {
    const res = await fetch(`${API_URL}/api/decrement`, { method: "POST" });
    const data = await res.json();
    setCounter(data.counter);
  };

  return (
    <div className="container">
      <h1>MERN Demo App</h1>
      <p>{message}</p>
      <div className="counter-box">
        <h2>Counter: {counter}</h2>
        <div className="buttons">
          <button onClick={increment}>➕ Increment</button>
          <button onClick={decrement}>➖ Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App; // 👈 VERY IMPORTANT
