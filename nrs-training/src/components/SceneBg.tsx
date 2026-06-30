import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { NRS } from '../constants';

type SceneType =
  | 'studio'
  | 'building'
  | 'tech'
  | 'facility'
  | 'security'
  | 'parking'
  | 'hr'
  | 'meetings'
  | 'wellness'
  | 'inspire';

interface SceneBgProps {
  type: SceneType;
  children?: React.ReactNode;
}

export const SceneBg: React.FC<SceneBgProps> = ({ type, children }) => {
  const frame = useCurrentFrame();

  const gradients: Record<SceneType, string> = {
    studio: `linear-gradient(160deg, ${NRS.greenDark} 0%, #004F2D 50%, #002B18 100%)`,
    building: `linear-gradient(160deg, #0A1628 0%, #112240 50%, #1B3A4B 100%)`,
    tech: `linear-gradient(160deg, #0D0D2B 0%, #1A1A4E 50%, #0D2B4E 100%)`,
    facility: `linear-gradient(160deg, #1A2E1A 0%, #2A4A2A 50%, #1A3A2A 100%)`,
    security: `linear-gradient(160deg, #1A0A0A 0%, #2A1010 50%, #200A0A 100%)`,
    parking: `linear-gradient(160deg, #1A1A2A 0%, #2A2A4A 50%, #222240 100%)`,
    hr: `linear-gradient(160deg, #1A1A2E 0%, ${NRS.greenDark} 70%, #001A10 100%)`,
    meetings: `linear-gradient(160deg, #0D1A1A 0%, #1A2E2E 50%, #0D2222 100%)`,
    wellness: `linear-gradient(160deg, #0A1A0A 0%, #1A3020 50%, #0A2010 100%)`,
    inspire: `linear-gradient(160deg, ${NRS.greenDark} 0%, #004020 40%, #002810 100%)`,
  };

  const pan = interpolate(frame, [0, 2700], [0, -30]);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: gradients[type],
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated background particles */}
      <Particles type={type} frame={frame} />
      {/* Pan layer for depth */}
      <div style={{ position: 'absolute', inset: 0, transform: `translateX(${pan}px)`, opacity: 0.05 }}>
        <svg width="120%" height="100%">
          <defs>
            <pattern id={`dot-${type}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill={NRS.gold} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#dot-${type})`} />
        </svg>
      </div>
      {children}
    </div>
  );
};

const Particles: React.FC<{ type: SceneType; frame: number }> = ({ type, frame }) => {
  const particles = [
    { x: 80, y: 120, size: 4, speed: 0.4, delay: 0 },
    { x: 200, y: 800, size: 6, speed: 0.3, delay: 20 },
    { x: 400, y: 300, size: 3, speed: 0.5, delay: 10 },
    { x: 700, y: 600, size: 5, speed: 0.35, delay: 30 },
    { x: 900, y: 200, size: 4, speed: 0.45, delay: 5 },
    { x: 550, y: 900, size: 7, speed: 0.25, delay: 45 },
    { x: 150, y: 500, size: 3, speed: 0.55, delay: 15 },
    { x: 820, y: 750, size: 5, speed: 0.3, delay: 60 },
  ];

  const techColor = type === 'tech' ? '#4FC3F7' : type === 'security' ? '#EF5350' : NRS.gold;

  return (
    <svg style={{ position: 'absolute', inset: 0, opacity: 0.25 }} width="100%" height="100%">
      {particles.map((p, i) => {
        const y = ((p.y + (frame - p.delay) * p.speed) % 1100) - 50;
        const opacity = interpolate(Math.sin((frame + p.delay * 10) * 0.05), [-1, 1], [0.2, 0.8]);
        return (
          <circle
            key={i}
            cx={p.x}
            cy={y}
            r={p.size}
            fill={techColor}
            opacity={opacity}
          />
        );
      })}
    </svg>
  );
};
