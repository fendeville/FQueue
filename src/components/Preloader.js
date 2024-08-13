// src/components/Preloader.js
import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000); // 3 seconds for preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    visible && (
      <div className="preloader">
        <h1 className="flash-text">Flash Queue</h1>
      </div>
    )
  );
};

export default Preloader;
