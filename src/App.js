import React, { useState, useEffect } from 'react';
import './App.css';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <main>
          <h1>Welcome to Flash Queue</h1>
          <h3>DO In A Flash</h3>
          this app is mentally unstable 

          {/* Your main app content */}
        </main>
      )}
    </div>
  );
}

export default App;
