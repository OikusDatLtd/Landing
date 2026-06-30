import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { NRS } from '../constants';

export const MeetingRoomScene: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const f = Math.max(0, frame - delay);

  const show = interpolate(f, [0, 25], [0, 1], { extrapolateRight: 'clamp' });
  const calFill = interpolate(f, [20, 60], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <svg width="460" height="400" viewBox="0 0 460 400" fill="none">
      {/* Room booking UI */}
      <g opacity={show}>
        <rect x="20" y="20" width="420" height="280" rx="16" fill="rgba(0,0,0,0.5)" stroke={NRS.gold} strokeWidth="1.5" />
        {/* Header */}
        <rect x="20" y="20" width="420" height="50" rx="16" fill={NRS.greenDark} />
        <text x="230" y="52" textAnchor="middle" fill={NRS.gold} fontSize="16" fontWeight="bold" fontFamily="sans-serif">Room Booking System</text>

        {/* Calendar grid */}
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, d) => (
          <g key={d}>
            <text x={80 + d * 72} y="96" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="12" fontFamily="sans-serif">{day}</text>
            {[0, 1, 2, 3].map(slot => {
              const taken = (d + slot) % 3 === 0;
              const booked = d === 1 && slot === 1;
              const fillColor = booked ? NRS.gold : taken ? '#EF5350' : NRS.green;
              const opacity = ((d * 4 + slot) / 20) < calFill ? 1 : 0;
              return (
                <rect key={slot}
                  x={50 + d * 72}
                  y={108 + slot * 42}
                  width={58}
                  height={34}
                  rx={6}
                  fill={fillColor}
                  opacity={opacity * 0.8}
                />
              );
            })}
          </g>
        ))}

        {/* Time labels */}
        {['09:00', '10:00', '11:00', '14:00'].map((t, i) => (
          <text key={i} x="36" y={130 + i * 42} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">{t}</text>
        ))}

        {/* Legend */}
        <rect x="40" y="290" width="14" height="10" rx="2" fill={NRS.green} opacity="0.8" />
        <text x="60" y="299" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="sans-serif">Available</text>
        <rect x="140" y="290" width="14" height="10" rx="2" fill="#EF5350" opacity="0.8" />
        <text x="160" y="299" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="sans-serif">Taken</text>
        <rect x="230" y="290" width="14" height="10" rx="2" fill={NRS.gold} opacity="0.8" />
        <text x="250" y="299" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="sans-serif">Your Booking</text>
      </g>

      {/* Rules strip */}
      <g opacity={interpolate(f, [50, 70], [0, 1], { extrapolateRight: 'clamp' })}>
        {[
          '📋  Book only what you need',
          '❌  Cancel if plans change',
          '✅  Leave room as you found it',
        ].map((rule, i) => (
          <g key={i}>
            <rect x="20" y={320 + i * 26} width="420" height="22" rx="5"
              fill={i === 1 ? 'rgba(239,83,80,0.1)' : 'rgba(255,255,255,0.05)'}
              stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="36" y={335 + i * 26} fill="rgba(255,255,255,0.8)" fontSize="12" fontFamily="sans-serif">{rule}</text>
          </g>
        ))}
      </g>
    </svg>
  );
};
