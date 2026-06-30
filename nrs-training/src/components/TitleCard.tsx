import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { NRS } from '../constants';
import { NRSLogo } from './NRSLogo';

interface TitleCardProps {
  episodeNumber: number;
  title: string;
  durationFrames?: number;
}

export const TitleCard: React.FC<TitleCardProps> = ({ episodeNumber, title, durationFrames = 90 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = spring({ frame, fps, config: { damping: 22, stiffness: 80 }, durationInFrames: 25 });
  const titleSlide = spring({ frame: frame - 15, fps, config: { damping: 18, stiffness: 90 }, durationInFrames: 30 });

  const fadeOut = frame > durationFrames - 20
    ? interpolate(frame, [durationFrames - 20, durationFrames], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
    : 1;

  const logoOpacity = interpolate(fadeIn, [0, 1], [0, 1]);
  const titleY = interpolate(titleSlide, [0, 1], [30, 0]);
  const titleOpacity = interpolate(titleSlide, [0, 0.3], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: `linear-gradient(145deg, ${NRS.greenDark} 0%, ${NRS.green} 60%, #004F2D 100%)`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      opacity: fadeOut,
    }}>
      {/* Decorative gold lines */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: 6,
        background: `linear-gradient(90deg, transparent, ${NRS.gold}, transparent)`,
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: 6,
        background: `linear-gradient(90deg, transparent, ${NRS.gold}, transparent)`,
      }} />

      {/* Geometric background pattern */}
      <svg style={{ position: 'absolute', top: 0, left: 0, opacity: 0.06 }} width="100%" height="100%">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke={NRS.gold} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Corner accents */}
      <div style={{ position: 'absolute', top: 40, left: 40, width: 60, height: 60, borderTop: `3px solid ${NRS.gold}`, borderLeft: `3px solid ${NRS.gold}`, opacity: logoOpacity }} />
      <div style={{ position: 'absolute', top: 40, right: 40, width: 60, height: 60, borderTop: `3px solid ${NRS.gold}`, borderRight: `3px solid ${NRS.gold}`, opacity: logoOpacity }} />
      <div style={{ position: 'absolute', bottom: 40, left: 40, width: 60, height: 60, borderBottom: `3px solid ${NRS.gold}`, borderLeft: `3px solid ${NRS.gold}`, opacity: logoOpacity }} />
      <div style={{ position: 'absolute', bottom: 40, right: 40, width: 60, height: 60, borderBottom: `3px solid ${NRS.gold}`, borderRight: `3px solid ${NRS.gold}`, opacity: logoOpacity }} />

      {/* Logo */}
      <div style={{ opacity: logoOpacity, marginBottom: 32 }}>
        <NRSLogo size={110} animateIn={false} />
      </div>

      {/* Episode label */}
      <div style={{
        color: NRS.gold,
        fontSize: 18,
        fontFamily: 'Georgia, serif',
        letterSpacing: 8,
        textTransform: 'uppercase',
        marginBottom: 16,
        opacity: titleOpacity,
      }}>
        Episode {episodeNumber} of 10
      </div>

      {/* Title */}
      <div style={{
        color: NRS.white,
        fontSize: 52,
        fontFamily: 'Georgia, serif',
        fontWeight: 'bold',
        textAlign: 'center',
        maxWidth: 820,
        lineHeight: 1.25,
        transform: `translateY(${titleY}px)`,
        opacity: titleOpacity,
        textShadow: `0 2px 20px rgba(0,0,0,0.5)`,
      }}>
        {title}
      </div>

      {/* Gold underline */}
      <div style={{
        marginTop: 24,
        width: interpolate(titleSlide, [0, 1], [0, 240]),
        height: 3,
        background: `linear-gradient(90deg, transparent, ${NRS.gold}, transparent)`,
        borderRadius: 2,
      }} />

      {/* Series label */}
      <div style={{
        position: 'absolute',
        bottom: 60,
        color: NRS.gold,
        fontSize: 14,
        fontFamily: 'sans-serif',
        letterSpacing: 4,
        textTransform: 'uppercase',
        opacity: titleOpacity * 0.8,
      }}>
        NRS HQ Staff Training Series
      </div>
    </div>
  );
};
