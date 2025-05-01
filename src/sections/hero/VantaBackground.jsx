import React, { useState, useEffect, useRef } from "react";
import BIRDS from 'vanta/src/vanta.birds';
import * as THREE from "three";

const VantaBackground = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && myRef.current) {
      const effect = BIRDS({
        el: myRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x000000,
        color1: 0x8311ed,
        color2: 0x00ffff,
        birdSize: 0.5,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
    ref={myRef}
    style={{
      width: "100%",
      height: "100vh",
      position: "relative", 
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
    <div
      style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  </div>
  );
};

export default VantaBackground;