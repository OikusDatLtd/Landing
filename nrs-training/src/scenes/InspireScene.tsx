import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { NRS } from '../constants';

export const InspireScene: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);

  // Nigeria map points (simplified outline)
  const mapPath = "M200,60 L240,50 L280,65 L310,60 L330,80 L320,110 L340,140 L330,170 L300,200 L280,230 L240,250 L210,240 L180,220 L160,200 L140,170 L145,140 L130,110 L150,85 L180,70 Z";

  const pulse = Math.sin(f * 0.12) * 0.4 + 0.6;

  const revenuePoints = [
    { x: 230, y: 130, label: 'ABUJA HQ' },
    { x: 160, y: 180, label: 'Lagos' },
    { x: 280, y: 190, label: 'Port Harcourt' },
    { x: 200, y: 100, label: 'Kano' },
    { x: 240, y: 200, label: 'Enugu' },
  ];

  return (
    <svg width="480" height="420" viewBox="0 0 140 420" fill="none">
      {/* Nigeria map */}
      <g transform="translate(-50, 40)">
        <path d={mapPath} fill={`${NRS.green}30`} stroke={NRS.green} strokeWidth="1.5" />
        {/* Revenue flows */}
        {revenuePoints.slice(1).map((p, i) => {
          const t = ((f + i * 18) % 90) / 90;
          const hqX = 230, hqY = 130;
          const cx = hqX + (p.x - hqX) * t;
          const cy = hqY + (p.y - hqY) * t;
          return (
            <g key={i}>
              <line x1={p.x} y1={p.y} x2={hqX} y2={hqY}
                stroke={NRS.gold} strokeWidth="0.8" strokeDasharray="4 4" opacity="0.3" />
              <circle cx={cx} cy={cy} r="3" fill={NRS.gold} opacity={0.8 * (1 - Math.abs(t - 0.5) * 2)} />
            </g>
          );
        })}
        {/* Location dots */}
        {revenuePoints.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={i === 0 ? 8 : 5}
              fill={i === 0 ? NRS.gold : NRS.green}
              opacity={pulse}
            />
            {i === 0 && <circle cx={p.x} cy={p.y} r={12} fill="none" stroke={NRS.gold} strokeWidth="1.5" opacity={0.4 * pulse} />}
            <text x={p.x + (i === 0 ? 14 : 8)} y={p.y + 4}
              fill={i === 0 ? NRS.gold : 'rgba(255,255,255,0.7)'}
              fontSize={i === 0 ? 9 : 7}
              fontFamily="sans-serif"
              fontWeight={i === 0 ? 'bold' : 'normal'}
            >
              {p.label}
            </text>
          </g>
        ))}
      </g>

      {/* Values strip */}
      {['EXCELLENCE', 'INTEGRITY', 'SERVICE'].map((v, i) => {
        const show = interpolate(f, [i * 15 + 30, i * 15 + 50], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
        return (
          <g key={i} opacity={show}>
            <rect x="-50" y={310 + i * 36} width="240" height="30" rx="6"
              fill={`${NRS.gold}18`} stroke={NRS.gold} strokeWidth="1" />
            <text x="70" y={330 + i * 36} textAnchor="middle"
              fill={NRS.gold} fontSize="13" fontWeight="bold" fontFamily="Georgia, serif" letterSpacing="3">
              {v}
            </text>
          </g>
        );
      })}
    </svg>
  );
};
