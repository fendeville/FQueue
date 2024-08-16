// src/components/Preloader.js
import React, { useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.preloader').classList.add('animate');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="preloader">
      <span className="flash">Flash</span>
      <span className="queue">
        <span className="dot"></span>
        <span className="q">Q</span>
        <span className="ueue">ueue</span>
      </span>
    </div>
  );
};

export default Preloader;