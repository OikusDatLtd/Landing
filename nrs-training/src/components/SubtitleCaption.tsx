import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { NRS } from '../constants';

interface CaptionLine {
  text: string;
  startFrame: number;
  endFrame: number;
  highlight?: string[];
}

interface SubtitleCaptionProps {
  lines: CaptionLine[];
  style?: React.CSSProperties;
}

export const SubtitleCaption: React.FC<SubtitleCaptionProps> = ({ lines, style }) => {
  const frame = useCurrentFrame();

  const activeLine = lines.find(l => frame >= l.startFrame && frame <= l.endFrame);
  if (!activeLine) return null;

  const progress = interpolate(frame, [activeLine.startFrame, activeLine.startFrame + 8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const fadeOut = interpolate(frame, [activeLine.endFrame - 8, activeLine.endFrame], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const words = activeLine.text.split(' ');
  const highlights = activeLine.highlight || [];

  return (
    <div style={{
      position: 'absolute',
      bottom: 60,
      left: '50%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      maxWidth: 880,
      padding: '16px 32px',
      background: 'rgba(0,0,0,0.72)',
      borderRadius: 12,
      borderLeft: `4px solid ${NRS.gold}`,
      opacity: progress * fadeOut,
      ...style,
    }}>
      <p style={{
        margin: 0,
        color: 'white',
        fontSize: 28,
        fontFamily: 'Georgia, serif',
        lineHeight: 1.5,
        fontWeight: 500,
      }}>
        {words.map((word, i) => {
          const isHighlighted = highlights.some(h => word.toLowerCase().includes(h.toLowerCase()));
          return (
            <span key={i} style={{ color: isHighlighted ? NRS.gold : 'white', fontWeight: isHighlighted ? 'bold' : 'normal' }}>
              {word}{i < words.length - 1 ? ' ' : ''}
            </span>
          );
        })}
      </p>
    </div>
  );
};

interface AnimatedTextProps {
  text: string;
  style?: React.CSSProperties;
  delay?: number;
  highlight?: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, style, delay = 0, highlight = false }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame - delay, [0, 18], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{
      opacity: progress,
      transform: `translateY(${interpolate(progress, [0, 1], [20, 0])}px)`,
      color: highlight ? NRS.gold : NRS.white,
      ...style,
    }}>
      {text}
    </div>
  );
};
