import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { NRS } from '../constants';

export const FacilityScene: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);

  const liftDoor = interpolate(f, [20, 50], [0, 1], { extrapolateRight: 'clamp' });

  const rules = [
    { icon: '🛗', label: 'Lift: 3+ floors only', color: NRS.gold },
    { icon: '🚶', label: 'Stairs: 1–2 floors', color: '#4FC3F7' },
    { icon: '🔌', label: 'No personal appliances without approval', color: '#EF5350' },
    { icon: '🧹', label: 'Keep workstation tidy', color: '#A5D6A7' },
    { icon: '⚠️', label: 'Report faults via FM Portal', color: NRS.gold },
  ];

  return (
    <svg width="480" height="420" viewBox="0 0 480 420" fill="none">
      {/* Lift animation */}
      <g transform="translate(20, 20)">
        <rect x="0" y="0" width="100" height="240" rx="8" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        {/* Lift doors */}
        <rect x="5" y="5" width={45 * (1 - liftDoor)} height="230" fill={NRS.green} opacity="0.8" rx="3" />
        <rect x={55 + 45 * liftDoor} y="5" width={45 * (1 - liftDoor)} height="230" fill={NRS.green} opacity="0.8" rx="3" />
        {/* Floor indicator */}
        <rect x="30" y="8" width="40" height="22" rx="4" fill="#1A1A1A" />
        <text x="50" y="24" textAnchor="middle" fill={NRS.gold} fontSize="13" fontWeight="bold" fontFamily="monospace">12</text>
        {/* UP arrow */}
        <polygon points="50,35 42,46 58,46" fill={NRS.gold} opacity="0.8" />
      </g>

      {/* Rules list */}
      <g transform="translate(140, 20)">
        {rules.map((r, i) => {
          const show = interpolate(f, [i * 10 + 10, i * 10 + 28], [0, 1], {
            extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
          });
          return (
            <g key={i} opacity={show} transform={`translateX(${interpolate(show, [0, 1], [24, 0])})`}>
              <rect x="0" y={i * 60} width="330" height="52" rx="8"
                fill={`${r.color}12`} stroke={r.color} strokeWidth="1.2" />
              <text x="16" y={i * 60 + 32} fontSize="22">{r.icon}</text>
              <text x="52" y={i * 60 + 32} fill="rgba(255,255,255,0.85)" fontSize="13" fontFamily="sans-serif">{r.label}</text>
            </g>
          );
        })}
      </g>

      {/* FM Portal */}
      <g opacity={interpolate(f, [70, 90], [0, 1], { extrapolateRight: 'clamp' })}>
        <rect x="20" y="280" width="100" height="120" rx="8" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        {/* Screen */}
        <rect x="26" y="290" width="88" height="70" rx="4" fill="#0D1F0D" />
        <text x="70" y="318" textAnchor="middle" fill={NRS.gold} fontSize="10" fontWeight="bold" fontFamily="sans-serif">FM PORTAL</text>
        <rect x="34" y="326" width="72" height="6" rx="2" fill={NRS.green} opacity="0.6" />
        <rect x="34" y="336" width="50" height="6" rx="2" fill={NRS.green} opacity="0.4" />
        <text x="70" y="380" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="sans-serif">24hr response</text>
      </g>
    </svg>
  );
};
