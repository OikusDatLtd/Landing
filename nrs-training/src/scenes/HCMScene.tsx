import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { NRS } from '../constants';

export const HCMScene: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);

  const topics = [
    { icon: '📋', label: 'Employment Records', color: NRS.gold },
    { icon: '🏖️', label: 'Leave Applications', color: '#4FC3F7' },
    { icon: '❤️', label: 'Welfare Benefits', color: '#F06292' },
    { icon: '⏰', label: 'Working Hours', color: '#A5D6A7' },
    { icon: '👔', label: 'Dress Code', color: NRS.gold },
    { icon: '🤝', label: 'Grievance Portal', color: '#EF5350' },
  ];

  return (
    <svg width="480" height="400" viewBox="0 0 480 400" fill="none">
      {/* HCM Portal mockup */}
      <rect x="20" y="20" width="440" height="56" rx="10" fill={NRS.greenDark} />
      <text x="240" y="56" textAnchor="middle" fill={NRS.gold} fontSize="18" fontWeight="bold" fontFamily="sans-serif">HCM — Human Capital Management</text>

      {/* Topic grid */}
      {topics.map((t, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 20 + col * 152;
        const y = 96 + row * 130;
        const show = interpolate(f, [i * 10, i * 10 + 22], [0, 1], {
          extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
        });
        return (
          <g key={i} opacity={show} transform={`scale(${0.7 + 0.3 * show})`}
             style={{ transformOrigin: `${x + 66}px ${y + 50}px` }}>
            <rect x={x} y={y} width="136" height="100" rx="12"
              fill={`${t.color}15`} stroke={t.color} strokeWidth="1.5" />
            <text x={x + 68} y={y + 46} textAnchor="middle" fontSize="28">{t.icon}</text>
            <text x={x + 68} y={y + 72} textAnchor="middle" fill={t.color} fontSize="11"
              fontWeight="bold" fontFamily="sans-serif">{t.label}</text>
          </g>
        );
      })}

      {/* Dress code day badge */}
      <g opacity={interpolate(f, [60, 80], [0, 1], { extrapolateRight: 'clamp' })}>
        <rect x="20" y="360" width="440" height="30" rx="8" fill={`${NRS.gold}18`} stroke={NRS.gold} strokeWidth="1" />
        <text x="240" y="380" textAnchor="middle" fill={NRS.gold} fontSize="12" fontFamily="sans-serif">
          Smart Formal Attire — Mon to Thu · Check HR Handbook for Full Guidelines
        </text>
      </g>
    </svg>
  );
};
