import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { NRS } from '../constants';

export const ParkingScene: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);
  const carEnter = interpolate(f, [20, 60], [0, 1], { extrapolateRight: 'clamp' });
  const barrierAngle = interpolate(carEnter, [0, 0.4, 0.6, 1], [0, 0, 80, 80]);

  const spots = [
    { x: 60, taken: true }, { x: 130, taken: true }, { x: 200, taken: false },
    { x: 270, taken: true }, { x: 340, taken: false },
  ];

  return (
    <svg width="460" height="380" viewBox="0 0 460 380" fill="none">
      {/* Parking structure outline */}
      <rect x="20" y="20" width="420" height="280" rx="8" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <text x="230" y="50" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="13" fontFamily="sans-serif" letterSpacing="3">MULTI-LEVEL CAR PARK</text>

      {/* Barrier */}
      <rect x="110" y="230" width="8" height="30" fill="#888" />
      <g transform={`rotate(${-barrierAngle}, 118, 233)`} style={{ transformOrigin: '118px 233px' }}>
        <rect x="118" y="230" width="100" height="8" rx="3" fill={NRS.gold} />
        {/* Stripe */}
        {[0, 1, 2, 3].map(i => (
          <rect key={i} x={120 + i * 25} y="230" width="12" height="8" fill="#EF5350" />
        ))}
      </g>
      {/* Card reader */}
      <rect x="74" y="218" width="28" height="40" rx="6" fill="#1A1A1A" />
      <rect x="80" y="224" width="16" height="22" rx="3" fill="#0D2A1A" />
      <circle cx="88" cy="248" r="4" fill={carEnter > 0.3 ? '#22C55E' : '#EF5350'} />

      {/* Car entering */}
      <g transform={`translate(${interpolate(carEnter, [0, 0.4], [-80, 30])}, 210)`} opacity={carEnter}>
        {/* Car body */}
        <rect x="0" y="10" width="70" height="30" rx="6" fill="#2196F3" />
        <rect x="8" y="0" width="54" height="20" rx="5" fill="#1565C0" />
        {/* Windows */}
        <rect x="12" y="3" width="20" height="14" rx="3" fill="#90CAF9" opacity="0.7" />
        <rect x="38" y="3" width="20" height="14" rx="3" fill="#90CAF9" opacity="0.7" />
        {/* Wheels */}
        <circle cx="14" cy="40" r="8" fill="#333" />
        <circle cx="56" cy="40" r="8" fill="#333" />
        {/* Headlights */}
        <rect x="64" y="14" width="6" height="8" rx="2" fill="#FFF176" opacity={carEnter < 0.6 ? 1 : 0} />
      </g>

      {/* Parking spots */}
      <g transform="translate(30, 80)">
        {spots.map((s, i) => (
          <g key={i}>
            <rect x={s.x} y="0" width="60" height="100" rx="4" fill="transparent" stroke="white" strokeWidth="1.5" opacity="0.3" />
            {/* Spot number */}
            <text x={s.x + 30} y="18" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="monospace">
              {`P${(i + 1).toString().padStart(2, '0')}`}
            </text>
            {s.taken ? (
              <g opacity={interpolate(f, [i * 8, i * 8 + 18], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })}>
                <rect x={s.x + 6} y="24" width="48" height="68" rx="4" fill="#37474F" />
                <rect x={s.x + 12} y="28" width="18" height="14" rx="2" fill="#546E7A" opacity="0.7" />
                <rect x={s.x + 34} y="28" width="18" height="14" rx="2" fill="#546E7A" opacity="0.7" />
                <circle cx={s.x + 18} cy="90" r="7" fill="#263238" />
                <circle cx={s.x + 42} cy="90" r="7" fill="#263238" />
              </g>
            ) : (
              <text x={s.x + 30} y="72" textAnchor="middle" fill={NRS.gold} fontSize="22" opacity={interpolate(f, [40, 55], [0, 1], { extrapolateRight: 'clamp' })}>P</text>
            )}
          </g>
        ))}
      </g>

      {/* Grade allocation notice */}
      <g opacity={interpolate(f, [70, 90], [0, 1], { extrapolateRight: 'clamp' })}>
        <rect x="20" y="310" width="420" height="60" rx="10" fill={`${NRS.gold}18`} stroke={NRS.gold} strokeWidth="1.5" />
        <text x="230" y="338" textAnchor="middle" fill={NRS.gold} fontSize="13" fontWeight="bold" fontFamily="sans-serif">Spaces allocated by grade level</text>
        <text x="230" y="358" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="sans-serif">Do not park in unallocated spaces · Enforcement patrols daily</text>
      </g>
    </svg>
  );
};
