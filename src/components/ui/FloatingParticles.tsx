import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate 30 random particles
    const newParticles: Particle[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // Random X position (%)
      y: Math.random() * 100, // Random Y position (%)
      size: Math.random() * 4 + 1, // Size between 1px and 5px
      duration: Math.random() * 10 + 10, // Float duration between 10s and 20s
      delay: Math.random() * 5, // Random start delay
      opacity: Math.random() * 0.5 + 0.1, // Random opacity
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gold-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 2}px ${p.size / 2}px rgba(201, 168, 76, 0.6)`,
            animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
