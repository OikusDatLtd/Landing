import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { NRS } from '../constants';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  delay?: number;
  accentColor?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  body,
  delay = 0,
  accentColor = NRS.gold,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const prog = spring({
    frame: frame - delay,
    fps,
    config: { damping: 18, stiffness: 100 },
    durationInFrames: 28,
  });

  const x = interpolate(prog, [0, 1], [-60, 0]);
  const opacity = interpolate(prog, [0, 0.25], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 20,
      background: 'rgba(255,255,255,0.06)',
      border: `1px solid rgba(255,255,255,0.12)`,
      borderLeft: `4px solid ${accentColor}`,
      borderRadius: 16,
      padding: '20px 24px',
      transform: `translateX(${x}px)`,
      opacity,
      backdropFilter: 'blur(8px)',
    }}>
      <div style={{
        width: 52,
        height: 52,
        borderRadius: 12,
        background: `${accentColor}22`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        fontSize: 26,
      }}>
        {icon}
      </div>
      <div>
        <div style={{ color: accentColor, fontSize: 18, fontWeight: 'bold', marginBottom: 6, fontFamily: 'Georgia, serif' }}>
          {title}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.6, fontFamily: 'sans-serif' }}>
          {body}
        </div>
      </div>
    </div>
  );
};

interface StatBadgeProps {
  value: string;
  label: string;
  delay?: number;
}

export const StatBadge: React.FC<StatBadgeProps> = ({ value, label, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const prog = spring({ frame: frame - delay, fps, config: { damping: 20, stiffness: 110 }, durationInFrames: 25 });
  const scale = interpolate(prog, [0, 1], [0.6, 1]);
  const opacity = interpolate(prog, [0, 0.3], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <div style={{
      transform: `scale(${scale})`,
      opacity,
      background: `linear-gradient(135deg, ${NRS.green}, ${NRS.greenDark})`,
      border: `2px solid ${NRS.gold}`,
      borderRadius: 20,
      padding: '20px 28px',
      textAlign: 'center',
      minWidth: 160,
    }}>
      <div style={{ color: NRS.gold, fontSize: 42, fontWeight: 'bold', fontFamily: 'Georgia, serif', lineHeight: 1 }}>
        {value}
      </div>
      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, marginTop: 8, letterSpacing: 1, textTransform: 'uppercase', fontFamily: 'sans-serif' }}>
        {label}
      </div>
    </div>
  );
};

interface EpisodeTeaseProps {
  episodeNumber: number;
  title: string;
  delay?: number;
}

export const EpisodeTease: React.FC<EpisodeTeaseProps> = ({ episodeNumber, title, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const prog = spring({ frame: frame - delay, fps, config: { damping: 18 }, durationInFrames: 20 });
  const opacity = interpolate(prog, [0, 0.3], [0, 1], { extrapolateRight: 'clamp' });
  const y = interpolate(prog, [0, 1], [20, 0]);

  return (
    <div style={{
      opacity,
      transform: `translateY(${y}px)`,
      background: `rgba(0,0,0,0.5)`,
      border: `1px solid ${NRS.gold}44`,
      borderRadius: 12,
      padding: '14px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
    }}>
      <div style={{
        width: 36,
        height: 36,
        borderRadius: '50%',
        background: NRS.gold,
        color: NRS.greenDark,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        flexShrink: 0,
      }}>
        {episodeNumber}
      </div>
      <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: 14, fontFamily: 'sans-serif' }}>{title}</div>
    </div>
  );
};
