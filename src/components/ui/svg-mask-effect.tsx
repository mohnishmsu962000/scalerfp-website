"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const updateMousePosition = (e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", updateMousePosition);
      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener("mousemove", updateMousePosition);
        }
      };
    }
  }, []);

  const maskSize = isHovered ? revealSize : size;

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center"
        style={{
          maskImage: `radial-gradient(${maskSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(${maskSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
        transition={{ duration: 0.3 }}
      >
        {revealText}
      </motion.div>

      <div className="flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};