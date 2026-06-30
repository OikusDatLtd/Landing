import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { NRS } from '../constants';

export const TechScene: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);
  const pulse = Math.sin(f * 0.12) * 0.5 + 0.5;

  return (
    <svg width="480" height="440" viewBox="0 0 480 440" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Network nodes */}
      {[
        { cx: 240, cy: 200, label: 'CCH', main: true },
        { cx: 90, cy: 120, label: 'Floor A' },
        { cx: 390, cy: 120, label: 'Floor B' },
        { cx: 90, cy: 310, label: 'Desks' },
        { cx: 390, cy: 310, label: 'CCTV' },
        { cx: 240, cy: 60, label: 'Internet' },
        { cx: 140, cy: 370, label: 'IP Phone' },
        { cx: 340, cy: 370, label: 'Network' },
      ].map((n, i) => {
        const show = interpolate(f, [i * 8, i * 8 + 20], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
        const nodePulse = n.main ? pulse : 0.7;
        return (
          <g key={i} opacity={show}>
            {/* Connection lines from main */}
            {!n.main && (
              <line
                x1={240} y1={200}
                x2={n.cx} y2={n.cy}
                stroke={NRS.gold}
                strokeWidth="1.5"
                strokeDasharray="6 4"
                opacity={0.4 * nodePulse}
              />
            )}
            {/* Node circle */}
            <circle cx={n.cx} cy={n.cy} r={n.main ? 52 : 36}
              fill={n.main ? `${NRS.green}44` : 'rgba(255,255,255,0.04)'}
              stroke={n.main ? NRS.gold : '#4FC3F7'}
              strokeWidth={n.main ? 3 : 1.5}
              opacity={nodePulse}
            />
            {n.main && (
              <circle cx={n.cx} cy={n.cy} r={62}
                fill="none"
                stroke={NRS.gold}
                strokeWidth="1"
                strokeDasharray="8 6"
                opacity={0.3 * pulse}
              />
            )}
            <text x={n.cx} y={n.cy + (n.main ? 8 : 5)} textAnchor="middle"
              fill={n.main ? NRS.gold : '#4FC3F7'}
              fontSize={n.main ? 15 : 11}
              fontWeight={n.main ? 'bold' : 'normal'}
              fontFamily="monospace"
            >
              {n.label}
            </text>
            {!n.main && (
              <circle cx={n.cx} cy={n.cy} r={5} fill="#4FC3F7" opacity={0.8 * pulse} />
            )}
          </g>
        );
      })}

      {/* Data packets travelling along lines */}
      {[0, 60, 120, 180, 240].map((offset, i) => {
        const t = ((f + offset) % 120) / 120;
        const angle = (i * 72 * Math.PI) / 180;
        const radius = 130;
        const cx = 240 + Math.cos(angle) * radius * t;
        const cy = 200 + Math.sin(angle) * radius * t;
        return (
          <circle key={i} cx={cx} cy={cy} r="4" fill={NRS.gold} opacity={0.7 * (1 - t)} />
        );
      })}
    </svg>
  );
};

export const PhoneScene: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);
  const slideIn = interpolate(f, [0, 25], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <svg width="280" height="320" viewBox="0 0 280 320" fill="none">
      <g opacity={slideIn} transform={`translateY(${interpolate(slideIn, [0, 1], [40, 0])})`}>
        {/* IP Phone body */}
        <rect x="40" y="60" width="200" height="230" rx="14" fill="#2A2A2A" />
        <rect x="50" y="70" width="180" height="130" rx="8" fill="#1A1A1A" />
        {/* Screen content */}
        <rect x="55" y="75" width="170" height="120" rx="5" fill="#0D2A1A" />
        <text x="140" y="120" textAnchor="middle" fill={NRS.gold} fontSize="22" fontWeight="bold" fontFamily="monospace">EXT 4821</text>
        <text x="140" y="144" textAnchor="middle" fill="#4FC3F7" fontSize="12" fontFamily="monospace">● Connected</text>
        {/* Keypad */}
        {[0, 1, 2].map(row =>
          [0, 1, 2].map(col => (
            <rect key={`${row}-${col}`} x={62 + col * 52} y={220 + row * 22} width={36} height={14} rx="3"
              fill={NRS.green} opacity="0.7" />
          ))
        )}
        {/* Extension indicator */}
        <circle cx="60" cy="76" r="6" fill="#22C55E" opacity={Math.sin(f * 0.15) > 0 ? 1 : 0.3} />
      </g>
    </svg>
  );
};
