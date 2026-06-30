import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { NRS } from '../constants';

export const SecurityScene: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);
  const scanPulse = Math.sin(f * 0.15) * 0.5 + 0.5;
  const gateOpen = interpolate(f, [30, 50], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <svg width="440" height="400" viewBox="0 0 440 400" fill="none">
      {/* Floor */}
      <rect x="0" y="350" width="440" height="50" fill="#0A1A0A" />
      {/* Entry gate frame */}
      <rect x="140" y="80" width="160" height="270" rx="4" fill="none" stroke={NRS.gold} strokeWidth="2.5" />
      {/* Gate pillars */}
      <rect x="130" y="80" width="20" height="270" fill={NRS.greenDark} rx="2" />
      <rect x="290" y="80" width="20" height="270" fill={NRS.greenDark} rx="2" />
      {/* Gate doors */}
      <rect x="150" y="90" width={70 * (1 - gateOpen)} height="250" fill={NRS.green} opacity="0.8" rx="2" />
      <rect x={220 + 70 * gateOpen} y="90" width={70 * (1 - gateOpen)} height="250" fill={NRS.green} opacity="0.8" rx="2" />
      {/* Security scanner beam */}
      <rect x="148" y={120 + scanPulse * 200} width="144" height="3" fill="#4FC3F7" opacity={0.7 * scanPulse} />
      <rect x="148" y={120 + scanPulse * 200} width="144" height="40" fill="#4FC3F7" opacity={0.07 * scanPulse} />

      {/* Access card reader */}
      <rect x="96" y="160" width="36" height="60" rx="8" fill="#1A1A1A" />
      <rect x="102" y="168" width="24" height="36" rx="4" fill="#0D2A1A" />
      <circle cx="114" cy="236" r="5" fill={gateOpen > 0.5 ? '#22C55E' : '#EF5350'} />
      <text x="114" y="244" textAnchor="middle" fill={NRS.gold} fontSize="6" fontFamily="monospace">TAP</text>

      {/* NRS ID Card */}
      <g transform={`translate(${interpolate(gateOpen, [0, 1], [340, 310])}, 180)`} opacity={interpolate(f, [0, 20], [0, 1], { extrapolateRight: 'clamp' })}>
        <rect width="72" height="48" rx="5" fill={NRS.green} />
        <rect x="4" y="4" width="64" height="40" rx="3" fill={NRS.greenDark} />
        <circle cx="20" cy="20" r="10" fill="#8D5524" />
        <text x="36" y="18" fill={NRS.gold} fontSize="8" fontWeight="bold" fontFamily="sans-serif">NRS STAFF</text>
        <text x="36" y="28" fill="white" fontSize="6" fontFamily="sans-serif">A. IBRAHIM</text>
        <rect x="36" y="33" width="24" height="4" rx="2" fill={NRS.gold} opacity="0.6" />
      </g>

      {/* CCTV Camera */}
      <g transform="translate(350, 90)">
        <rect x="0" y="0" width="36" height="22" rx="6" fill="#1A1A1A" />
        <circle cx="30" cy="11" r="9" fill="#111" stroke="#444" strokeWidth="2" />
        <circle cx="30" cy="11" r="5" fill="#1A1A2A" />
        <circle cx="30" cy="11" r="2.5" fill="#4FC3F7" opacity={0.7 + Math.sin(f * 0.1) * 0.3} />
        <path d="M -10 -15 L 4 6 L 4 16 L -10 30" stroke={NRS.gold} strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
      </g>

      {/* Tailgating warning sign */}
      <g transform="translate(20, 120)" opacity={interpolate(f, [60, 80], [0, 1], { extrapolateRight: 'clamp' })}>
        <rect width="88" height="80" rx="8" fill="#EF5350" opacity="0.15" stroke="#EF5350" strokeWidth="1.5" />
        <text x="44" y="30" textAnchor="middle" fill="#EF5350" fontSize="22">⛔</text>
        <text x="44" y="52" textAnchor="middle" fill="#EF5350" fontSize="9" fontWeight="bold" fontFamily="sans-serif">NO</text>
        <text x="44" y="64" textAnchor="middle" fill="#EF5350" fontSize="9" fontFamily="sans-serif">TAILGATING</text>
      </g>
    </svg>
  );
};

export const EmergencyScene: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);
  const flash = Math.floor(f / 12) % 2 === 0;

  return (
    <svg width="380" height="360" viewBox="0 0 380 360" fill="none">
      {/* Exit sign */}
      <rect x="100" y="40" width="180" height="70" rx="8" fill={flash ? '#22C55E' : '#166534'} />
      <text x="190" y="68" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" fontFamily="sans-serif">EXIT</text>
      <text x="190" y="90" textAnchor="middle" fill="white" fontSize="14" fontFamily="sans-serif">→ STAIRCASE</text>

      {/* Arrow path */}
      <path d="M 190 130 L 190 280 L 310 280" stroke="#22C55E" strokeWidth="4" strokeDasharray="14 8"
        opacity={interpolate(f, [20, 40], [0, 1], { extrapolateRight: 'clamp' })}
      />
      <polygon points="310,272 330,280 310,288" fill="#22C55E"
        opacity={interpolate(f, [40, 55], [0, 1], { extrapolateRight: 'clamp' })}
      />

      {/* No lift warning */}
      <g opacity={interpolate(f, [50, 70], [0, 1], { extrapolateRight: 'clamp' })}>
        <rect x="20" y="200" width="120" height="100" rx="8" fill="rgba(239,83,80,0.15)" stroke="#EF5350" strokeWidth="2" />
        <text x="80" y="245" textAnchor="middle" fontSize="30">🚫</text>
        <text x="80" y="272" textAnchor="middle" fill="#EF5350" fontSize="11" fontFamily="sans-serif">NO LIFTS</text>
        <text x="80" y="286" textAnchor="middle" fill="#EF5350" fontSize="11" fontFamily="sans-serif">IN EMERGENCY</text>
      </g>
    </svg>
  );
};
