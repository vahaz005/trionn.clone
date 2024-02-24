import React, { useEffect, useRef, useState, useMemo } from 'react';


const useIntersectionObserver = (targetRef, options) => {
  const [isInView, setIsInView] = useState(false);

  const observer = useMemo(() => {
    return new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);
  }, [options]);

  useEffect(() => {
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [observer, targetRef, options]);

  return isInView;
};

function ImageRenderer({ side, url, title }) {
  const imageRef = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const isInView = useIntersectionObserver(imageRef, options);

  const translateY = isInView ? Math.min(-90, window.scrollY - 300) : Math.min(400, window.scrollY - 300);
  const translateXImage = isInView ? Math.min(100, window.scrollX - 50) : Math.min(-200, window.scrollY - 100);
  const tiltAngle = isInView ? 3 : 30;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop:'180px',
        marginBottom:'280px',
        ...(side === 'left' && { flexDirection: 'row-reverse' }),
        
      }}
    >
      <div
        style={{
          alignSelf: 'center',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection:'column',
          transform: `translateY(${translateY}px)`,
          transition: 'transform 1s ease',
        }}
      >
        <span style={{ fontSize: '50px', color: '#e0eeee', textAlign: 'center', textTransform: 'uppercase', fontFamily: "Dirtyline 36Daysoftype 2022",marginBottom:'20px' }}>{title}</span>
        <span style={{ color: '#e0eeee' }}>UX, UI Design, Development</span>
       <div style={{border:'2px solid #c5fcfc',padding:'20px' ,borderRadius:'50px',marginTop:'40px',paddingInline:'40px'}}>
        <span style={{color:'#c5fcfc'}}>View Project</span>
       </div>
      </div>
      <div
        ref={imageRef}
        style={{
          opacity: window.scrollY > 100 ? 1 : 0,
          transform: `translateX(${Math.abs(translateXImage)}px) rotate(${tiltAngle}deg)`,
          transition: 'opacity 0.5s ease, transform 1s linear 50ms',
        }}
      >
        <img
          loading="lazy"
          src={url}
          alt=""
          style={{ width: '800px', height: '600px', borderRadius: '20px' }}
        />
      </div>
    </div>
  );
}

export default ImageRenderer;
