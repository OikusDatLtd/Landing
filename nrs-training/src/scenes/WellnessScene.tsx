import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { NRS } from '../constants';

export const WellnessScene: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);

  return (
    <svg width="460" height="420" viewBox="0 0 460 420" fill="none">
      {/* GYM card */}
      <g opacity={interpolate(f, [0, 20], [0, 1], { extrapolateRight: 'clamp' })}
         transform={`translateX(${interpolate(f, [0, 20], [-30, 0])})`}>
        <rect x="20" y="20" width="190" height="150" rx="14" fill="rgba(0,107,60,0.2)" stroke={NRS.green} strokeWidth="2" />
        <text x="115" y="68" textAnchor="middle" fontSize="36">🏋️</text>
        <text x="115" y="100" textAnchor="middle" fill={NRS.gold} fontSize="16" fontWeight="bold" fontFamily="sans-serif">GYMNASIUM</text>
        <text x="115" y="120" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="12" fontFamily="sans-serif">All Staff • Register via HCM</text>
        <text x="115" y="148" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="sans-serif">B1 — Basement Level</text>
      </g>

      {/* CRÈCHE card */}
      <g opacity={interpolate(f, [15, 35], [0, 1], { extrapolateRight: 'clamp' })}
         transform={`translateX(${interpolate(f, [15, 35], [30, 0])})`}>
        <rect x="250" y="20" width="190" height="150" rx="14" fill="rgba(245,166,35,0.1)" stroke={NRS.gold} strokeWidth="2" />
        <text x="345" y="68" textAnchor="middle" fontSize="36">👶</text>
        <text x="345" y="100" textAnchor="middle" fill={NRS.gold} fontSize="16" fontWeight="bold" fontFamily="sans-serif">CRÈCHE</text>
        <text x="345" y="120" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="12" fontFamily="sans-serif">Nursing Mothers • Limited Spaces</text>
        <text x="345" y="148" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="sans-serif">B1 — Register Early</text>
      </g>

      {/* CLINIC card */}
      <g opacity={interpolate(f, [30, 50], [0, 1], { extrapolateRight: 'clamp' })}
         transform={`translateX(${interpolate(f, [30, 50], [-30, 0])})`}>
        <rect x="20" y="200" width="190" height="150" rx="14" fill="rgba(79,195,247,0.1)" stroke="#4FC3F7" strokeWidth="2" />
        <text x="115" y="248" textAnchor="middle" fontSize="36">🏥</text>
        <text x="115" y="280" textAnchor="middle" fill="#4FC3F7" fontSize="16" fontWeight="bold" fontFamily="sans-serif">CLINIC</text>
        <text x="115" y="300" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="12" fontFamily="sans-serif">Walk-In • No Appt Needed</text>
        <text x="115" y="328" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="sans-serif">B1 — Working Hours</text>
      </g>

      {/* PRAYER card */}
      <g opacity={interpolate(f, [45, 65], [0, 1], { extrapolateRight: 'clamp' })}
         transform={`translateX(${interpolate(f, [45, 65], [30, 0])})`}>
        <rect x="250" y="200" width="190" height="150" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <text x="345" y="248" textAnchor="middle" fontSize="36">🕌</text>
        <text x="345" y="280" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="16" fontWeight="bold" fontFamily="sans-serif">PRAYER ROOMS</text>
        <text x="345" y="300" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="12" fontFamily="sans-serif">All Faiths Welcome</text>
        <text x="345" y="328" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="sans-serif">B1 — Designated Times</text>
      </g>
    </svg>
  );
};
