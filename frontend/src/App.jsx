import React, { useEffect, useState } from 'react';

function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL; 
  const [mcq, setMcq] = useState(null);

  useEffect(() => {
    fetch(`${backendUrl}/mcq`)  // call your backend endpoint
      .then((res) => res.json())
      .then((data) => setMcq(data))
      .catch((err) => console.error('Error fetching MCQ:', err));
  }, []);

  if (!mcq) return <div>Loading question...</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{mcq.question}</h2>
      <ul>
        {mcq.options.map((opt, i) => (
          <li key={i}>{opt}</li>
        ))}
      </ul>
      {/* In your full app, add click handlers to check answer */}
    </div>
  );
}

export default App;
