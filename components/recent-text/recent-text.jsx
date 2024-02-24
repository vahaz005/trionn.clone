// ScrollingText.js
import React, { useState, useEffect } from 'react';
import '/components/recent-text/recent-text.css';

const RecentText = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect will only run once on mount

  const initialTranslateX = -130; // Adjust this value based on your preference

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '40px' ,marginTop:'200px',marginBottom:'100px'}}>
      <span
        className="recentText"
        data-fill-text="RECENT"
        style={{
          transform: `translateX(${initialTranslateX + scrollPosition / 5}px)`,
         
        }}
      >
        RECENT
      </span>
      <span
        className="recentText"
        data-fill-text="WORK"
        style={{
          transform: `translateX(${initialTranslateX + scrollPosition / 5}px)`,
        }}
      >
        WORK
      </span>
    </div>
  );
};

export default RecentText;
