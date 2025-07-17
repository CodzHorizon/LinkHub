"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const AnimationContext = createContext();
const ANIMATION_COUNT = 4;

export function AnimationProvider({ children }) {
  const [animationIdx, setAnimationIdx] = useState(0); // SSR-safe initial value

  // On client mount, read stored value from localStorage and update state
  useEffect(() => {
    const stored = localStorage.getItem("navbarTheme");
    if (stored !== null) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed) && parsed >= 0 && parsed < ANIMATION_COUNT) {
        setAnimationIdx(parsed);
      }
    }
  }, []);

  // Whenever animationIdx changes, update localStorage
  useEffect(() => {
    localStorage.setItem("navbarTheme", animationIdx);
  }, [animationIdx]);

  const handleAnimationChange = (idx = null) => {
    setAnimationIdx(prev => {
      const next = idx !== null ? idx : (prev + 1) % ANIMATION_COUNT;
      return next;
    });
  };

  return (
    <AnimationContext.Provider value={{ animationIdx, handleAnimationChange }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within AnimationProvider");
  }
  return context;
}
