

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const ballRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;

    const moveBall = (event) => {
      gsap.to(ball, {
        x: event.clientX - ball.clientWidth / 2,
        y: event.clientY - ball.clientHeight / 2,
        ease: 'power3.out',
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', moveBall);

    return () => {
      window.removeEventListener('mousemove', moveBall);
    };
  }, []);

  return (
    <div
      ref={ballRef}
      className="w-10 h-10 bg-CustomWhite-1 rounded-full fixed top-0 left-0 pointer-events-none mix-blend-difference"
    ></div>
  );
};

export default Cursor;
