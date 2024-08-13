import React, { useState, useEffect } from 'react';
import './App.css';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Matches the preloader time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <main>
          {/* Your main app content can be added here if needed */}
          <h1>Welcome to Flash Queue</h1>
           <h3>DO In A Flash</h3>
        </main>
      )}
    </div>
  );
}

export default App;
