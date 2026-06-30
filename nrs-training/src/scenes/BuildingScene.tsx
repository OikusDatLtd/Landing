import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { NRS } from '../constants';

export const BuildingScene: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);

  const rise = interpolate(f, [0, 45], [0, 1], { extrapolateRight: 'clamp' });
  const winkodd = Math.floor(f / 40) % 2 === 0;

  return (
    <svg width="480" height="500" viewBox="0 0 480 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sky gradient */}
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A1628" />
          <stop offset="100%" stopColor="#1B3A4B" />
        </linearGradient>
        <linearGradient id="buildingGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A3A2A" />
          <stop offset="100%" stopColor={NRS.green} />
        </linearGradient>
      </defs>
      <rect width="480" height="500" fill="url(#skyGrad)" />

      {/* Stars */}
      {[40, 120, 200, 320, 400, 80, 280, 440].map((x, i) => (
        <circle key={i} cx={x} cy={20 + (i % 4) * 18} r="1.5" fill="white" opacity={0.6 + Math.sin(f * 0.05 + i) * 0.3} />
      ))}

      {/* Ground */}
      <rect x="0" y="460" width="480" height="40" fill="#0D1F0D" />
      <rect x="0" y="456" width="480" height="6" fill={NRS.green} opacity="0.3" />

      {/* Building rises from bottom */}
      <g transform={`translate(0, ${interpolate(rise, [0, 1], [200, 0])})`} opacity={rise}>
        {/* Main building body */}
        <rect x="120" y="60" width="240" height="400" fill="url(#buildingGrad)" rx="4" />
        {/* Building facade lines (floors) */}
        {Array.from({ length: 16 }).map((_, i) => (
          <rect key={i} x="120" y={60 + i * 25} width="240" height="1" fill={NRS.gold} opacity="0.2" />
        ))}
        {/* Wing A (left protrusion) */}
        <rect x="60" y="120" width="60" height="340" fill={NRS.green} opacity="0.9" rx="2" />
        {/* Wing C (right protrusion) */}
        <rect x="360" y="120" width="60" height="340" fill={NRS.green} opacity="0.9" rx="2" />
        {/* Atrium (centre glass) */}
        <rect x="170" y="80" width="140" height="380" fill="#1A4A3A" opacity="0.5" />
        {Array.from({ length: 5 }).map((_, i) => (
          <rect key={i} x="170" y={80 + i * 76} width="140" height="2" fill={NRS.gold} opacity="0.15" />
        ))}

        {/* Windows - randomised lit */}
        {Array.from({ length: 16 }).map((_, floor) =>
          [130, 150, 175, 200, 225, 250, 280, 305, 330, 350].map((x, w) => {
            const lit = (floor + w + (winkodd ? 1 : 0)) % 3 !== 0;
            return (
              <rect
                key={`${floor}-${w}`}
                x={x}
                y={70 + floor * 25}
                width={12}
                height={18}
                fill={lit ? '#F5E6A0' : '#0A1E0A'}
                opacity={lit ? 0.9 : 0.5}
                rx="1"
              />
            );
          })
        )}

        {/* Roof helipad / antenna */}
        <rect x="225" y="40" width="30" height="20" fill={NRS.greenDark} rx="2" />
        <rect x="237" y="10" width="6" height="30" fill="#888" />
        <circle cx="240" cy="10" r="4" fill="#EF5350" opacity={Math.sin(f * 0.2) > 0 ? 1 : 0.2} />

        {/* NRS sign on building */}
        <rect x="188" y="100" width="104" height="36" fill={NRS.gold} rx="4" />
        <text x="240" y="124" textAnchor="middle" fill={NRS.greenDark} fontSize="20" fontWeight="bold" fontFamily="Georgia, serif">NRS</text>

        {/* Main entrance */}
        <rect x="196" y="420" width="88" height="40" fill={NRS.greenDark} rx="4" />
        <rect x="210" y="425" width="26" height="35" fill="#4FC3F7" opacity="0.3" rx="2" />
        <rect x="244" y="425" width="26" height="35" fill="#4FC3F7" opacity="0.3" rx="2" />

        {/* Flag */}
        <rect x="390" y="20" width="3" height="60" fill="#888" />
        <rect x="393" y="20" width="28" height="18" fill="#008751" />
        <rect x="393" y="20" width="9" height="18" fill="white" />
        <rect x="412" y="20" width="9" height="18" fill="white" />
      </g>

      {/* Ground details */}
      <rect x="60" y="455" width="360" height="8" fill={NRS.gold} opacity="0.15" />
      {/* Path */}
      <path d="M 196 462 L 196 500 M 284 462 L 284 500" stroke={NRS.gold} strokeWidth="2" opacity="0.2" />
    </svg>
  );
};
