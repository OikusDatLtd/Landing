import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { NRS } from '../constants';

interface NRSLogoProps {
  size?: number;
  animateIn?: boolean;
  delay?: number;
  showTagline?: boolean;
}

export const NRSLogo: React.FC<NRSLogoProps> = ({
  size = 120,
  animateIn = true,
  delay = 0,
  showTagline = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const prog = animateIn
    ? spring({ frame: frame - delay, fps, config: { damping: 20, stiffness: 120 }, durationInFrames: 30 })
    : 1;

  const scale = interpolate(prog, [0, 1], [0.4, 1]);
  const opacity = interpolate(prog, [0, 0.2], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <div style={{ opacity, transform: `scale(${scale})`, display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring */}
        <circle cx="60" cy="60" r="58" fill={NRS.green} />
        <circle cx="60" cy="60" r="54" fill="none" stroke={NRS.gold} strokeWidth="3" />
        {/* Inner circle */}
        <circle cx="60" cy="60" r="46" fill={NRS.greenDark} />
        {/* Eagle / crest simplified */}
        <path d="M60 20 L68 40 L88 42 L74 56 L78 76 L60 66 L42 76 L46 56 L32 42 L52 40 Z" fill={NRS.gold} />
        {/* NRS text arc - simulated with text */}
        <path id="top-arc" d="M 20 60 A 40 40 0 0 1 100 60" fill="none" />
        <text fontSize="9" fontWeight="bold" fill={NRS.gold} fontFamily="Georgia, serif" letterSpacing="3">
          <textPath href="#top-arc" startOffset="15%">NIGERIA REVENUE SERVICE</textPath>
        </text>
        <path id="bottom-arc" d="M 100 68 A 40 40 0 0 1 20 68" fill="none" />
        <text fontSize="8" fill={NRS.gold} fontFamily="Georgia, serif" letterSpacing="2">
          <textPath href="#bottom-arc" startOffset="20%">EXCELLENCE · SERVICE · INTEGRITY</textPath>
        </text>
        {/* Bottom shield */}
        <path d="M50 78 L60 90 L70 78 Z" fill={NRS.gold} />
      </svg>
      {showTagline && (
        <div style={{
          color: NRS.gold,
          fontSize: size * 0.12,
          fontFamily: 'Georgia, serif',
          fontWeight: 'bold',
          letterSpacing: 3,
          textTransform: 'uppercase',
          opacity: prog,
        }}>
          Nigeria Revenue Service
        </div>
      )}
    </div>
  );
};
