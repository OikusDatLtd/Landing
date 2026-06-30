import React from 'react';
import { useCurrentFrame, interpolate, AbsoluteFill, useVideoConfig } from 'remotion';
import { NRS } from '../constants';
import { NRSLogo } from './NRSLogo';

interface EpisodeLayoutProps {
  children: React.ReactNode;
  episodeNumber: number;
  episodeTitle: string;
  showHUD?: boolean;
}

export const EpisodeLayout: React.FC<EpisodeLayoutProps> = ({
  children,
  episodeNumber,
  episodeTitle,
  showHUD = true,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const hudOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const hudFadeOut = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Progress bar
  const progress = frame / durationInFrames;

  return (
    <AbsoluteFill style={{ fontFamily: 'sans-serif' }}>
      {children}

      {showHUD && (
        <>
          {/* Top HUD bar */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 52,
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 28px',
            opacity: hudOpacity * hudFadeOut,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <NRSLogo size={34} animateIn={false} />
              <span style={{ color: NRS.gold, fontSize: 13, fontWeight: 'bold', letterSpacing: 2, textTransform: 'uppercase' }}>
                NRS HQ Staff Training
              </span>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, letterSpacing: 1 }}>
              Ep {episodeNumber} · {episodeTitle}
            </div>
          </div>

          {/* Progress bar */}
          <div style={{
            position: 'absolute',
            top: 52,
            left: 0,
            right: 0,
            height: 3,
            background: 'rgba(255,255,255,0.1)',
            opacity: hudOpacity * hudFadeOut,
          }}>
            <div style={{
              height: '100%',
              width: `${progress * 100}%`,
              background: `linear-gradient(90deg, ${NRS.green}, ${NRS.gold})`,
              borderRadius: '0 2px 2px 0',
              transition: 'width 0.1s',
            }} />
          </div>

          {/* Bottom watermark */}
          <div style={{
            position: 'absolute',
            bottom: 18,
            right: 28,
            color: `${NRS.gold}55`,
            fontSize: 11,
            letterSpacing: 2,
            textTransform: 'uppercase',
            opacity: hudOpacity * hudFadeOut,
          }}>
            nrs.gov.ng
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
