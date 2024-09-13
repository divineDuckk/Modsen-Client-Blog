"use client";
import { useState, useEffect, useRef, ReactNode } from "react";

import { VIEW_VALUE } from "./constants";

export interface LazyLoadProps {
  children: ReactNode;
}

export const LazyLoad: React.FC<LazyLoadProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    };
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: VIEW_VALUE,
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {isVisible ? (
        children
      ) : (
        <div className="h-96 text-center">Loading...</div>
      )}
    </div>
  );
};
