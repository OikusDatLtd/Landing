import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { NRS } from '../constants';

export const FloorMapScene: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);

  const floors = [
    { label: 'B1 BASEMENT', color: '#4FC3F7', items: 'Gym · Crèche · Clinic · Archive · Prayer', y: 20 },
    { label: 'G GROUND', color: NRS.gold, items: "Reception · Visitors' Lounge · Café · Cafeteria", y: 80 },
    { label: '1st FLOOR', color: '#A78BFA', items: 'Library · Auditorium · Meeting Rooms', y: 140 },
    { label: '2–16 FLOORS', color: NRS.green, items: 'Offices — Wing A · Wing B · Wing C', y: 200 },
  ];

  return (
    <svg width="500" height="300" viewBox="0 0 500 300" fill="none">
      {floors.map((fl, i) => {
        const show = interpolate(f, [i * 14, i * 14 + 22], [0, 1], {
          extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
        });
        return (
          <g key={i} opacity={show} transform={`translateX(${interpolate(show, [0, 1], [30, 0])})`}>
            <rect x="0" y={fl.y} width="500" height="52" rx="8"
              fill={`${fl.color}18`} stroke={fl.color} strokeWidth="1.5" />
            <rect x="0" y={fl.y} width="130" height="52" rx="8"
              fill={`${fl.color}30`} />
            <text x="65" y={fl.y + 32} textAnchor="middle" fill={fl.color} fontSize="12" fontWeight="bold" fontFamily="monospace">{fl.label}</text>
            <text x="148" y={fl.y + 32} fill="rgba(255,255,255,0.8)" fontSize="12" fontFamily="sans-serif">{fl.items}</text>
          </g>
        );
      })}

      {/* Wing labels */}
      <g opacity={interpolate(f, [60, 80], [0, 1], { extrapolateRight: 'clamp' })}>
        {[
          { label: 'Wing A — East', x: 50 },
          { label: 'Wing B — West', x: 200 },
          { label: 'Wing C — North', x: 360 },
        ].map((w, i) => (
          <g key={i}>
            <rect x={w.x - 10} y="268" width="130" height="26" rx="6" fill={`${NRS.gold}22`} stroke={NRS.gold} strokeWidth="1" />
            <text x={w.x + 55} y="285" textAnchor="middle" fill={NRS.gold} fontSize="11" fontFamily="sans-serif">{w.label}</text>
          </g>
        ))}
      </g>
    </svg>
  );
};
