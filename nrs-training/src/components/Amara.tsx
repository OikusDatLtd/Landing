import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { NRS } from '../constants';

interface AmaraProps {
  expression?: 'smile' | 'serious' | 'proud' | 'warm';
  size?: number;
  animateIn?: boolean;
  talking?: boolean;
}

export const Amara: React.FC<AmaraProps> = ({
  expression = 'smile',
  size = 420,
  animateIn = true,
  talking = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideIn = animateIn
    ? spring({ frame, fps, config: { damping: 18, stiffness: 100 }, durationInFrames: 35 })
    : 1;

  const translateY = interpolate(slideIn, [0, 1], [80, 0]);
  const opacity = interpolate(slideIn, [0, 0.3], [0, 1], { extrapolateRight: 'clamp' });

  // Subtle breathing animation
  const breathe = Math.sin(frame * 0.06) * 2;

  // Mouth animation (talking)
  const mouthOpen = talking
    ? Math.abs(Math.sin(frame * 0.45)) * 6
    : 0;

  // Eye blink every ~3 seconds
  const blinkCycle = frame % (fps * 3);
  const blinkClose = blinkCycle > fps * 2.9 ? interpolate(blinkCycle, [fps * 2.9, fps * 2.95, fps * 3], [0, 1, 0]) : 0;
  const eyeScaleY = interpolate(blinkClose, [0, 1], [1, 0.1]);

  const mouthY = expression === 'serious' ? 2 : expression === 'proud' ? -2 : 0;
  const smileAmount = expression === 'warm' ? 1.2 : expression === 'proud' ? 1.1 : 1;

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        display: 'inline-block',
      }}
    >
      <svg
        width={size}
        height={size * 1.1}
        viewBox="0 0 420 462"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── BODY / BLAZER ── */}
        <g transform={`translate(0, ${breathe})`}>
          {/* Blazer body */}
          <path
            d="M60 462 L60 310 Q80 280 130 270 L180 262 L210 300 L240 262 L290 270 Q340 280 360 310 L360 462 Z"
            fill={NRS.green}
          />
          {/* Lapels */}
          <path d="M180 262 L165 310 L210 330 L255 310 L240 262 L210 300 Z" fill={NRS.greenDark} />
          {/* White shirt / blouse under collar */}
          <path d="M195 265 L210 295 L225 265 L215 262 L205 262 Z" fill="#FAFAFA" />
          {/* Left epaulette */}
          <rect x="72" y="275" width="52" height="14" rx="5" fill={NRS.gold} />
          <rect x="76" y="278" width="8" height="8" rx="2" fill={NRS.goldDark} />
          <rect x="88" y="278" width="8" height="8" rx="2" fill={NRS.goldDark} />
          <rect x="100" y="278" width="8" height="8" rx="2" fill={NRS.goldDark} />
          {/* Right epaulette */}
          <rect x="296" y="275" width="52" height="14" rx="5" fill={NRS.gold} />
          <rect x="300" y="278" width="8" height="8" rx="2" fill={NRS.goldDark} />
          <rect x="312" y="278" width="8" height="8" rx="2" fill={NRS.goldDark} />
          <rect x="324" y="278" width="8" height="8" rx="2" fill={NRS.goldDark} />
          {/* Gold badge */}
          <rect x="148" y="318" width="48" height="34" rx="6" fill={NRS.gold} />
          <rect x="150" y="320" width="44" height="30" rx="5" fill={NRS.goldDark} />
          <text x="172" y="332" textAnchor="middle" fill={NRS.gold} fontSize="7" fontWeight="bold" fontFamily="sans-serif">NRS</text>
          <text x="172" y="342" textAnchor="middle" fill="#FBBF24" fontSize="5" fontFamily="sans-serif">STAFF</text>
          {/* Blazer bottom buttons */}
          <circle cx="210" cy="380" r="5" fill={NRS.gold} />
          <circle cx="210" cy="398" r="5" fill={NRS.gold} />
          {/* Arms */}
          <path d="M60 310 Q40 340 45 400 Q55 415 75 410 Q90 390 88 355 L90 315 Z" fill={NRS.green} />
          <path d="M360 310 Q380 340 375 400 Q365 415 345 410 Q330 390 332 355 L330 315 Z" fill={NRS.green} />
          {/* Hands */}
          <ellipse cx="58" cy="415" rx="22" ry="18" fill="#8D5524" />
          <ellipse cx="362" cy="415" rx="22" ry="18" fill="#8D5524" />
        </g>

        {/* ── NECK ── */}
        <rect x="192" y="232" width="36" height="40" rx="8" fill="#8D5524" />

        {/* ── HEAD ── */}
        <ellipse cx="210" cy="185" rx="88" ry="100" fill="#A0522D" />

        {/* ── AFRO HAIR ── */}
        {/* Main afro cloud */}
        <ellipse cx="210" cy="118" rx="100" ry="90" fill="#1A0A00" />
        {/* Hair texture puffs */}
        <circle cx="145" cy="100" r="42" fill="#1A0A00" />
        <circle cx="275" cy="100" r="42" fill="#1A0A00" />
        <circle cx="160" cy="148" r="36" fill="#1A0A00" />
        <circle cx="260" cy="148" r="36" fill="#1A0A00" />
        <circle cx="210" cy="78" r="50" fill="#1A0A00" />
        <circle cx="175" cy="72" r="38" fill="#221100" />
        <circle cx="245" cy="72" r="38" fill="#221100" />
        {/* Updo bun */}
        <ellipse cx="210" cy="52" rx="55" ry="48" fill="#1A0A00" />
        <ellipse cx="210" cy="40" rx="44" ry="36" fill="#221100" />
        <circle cx="185" cy="40" r="22" fill="#1A0A00" />
        <circle cx="235" cy="40" r="22" fill="#1A0A00" />
        {/* Gold hair pin */}
        <ellipse cx="210" cy="28" rx="18" ry="7" fill={NRS.gold} />
        <rect x="196" y="24" width="28" height="5" rx="2.5" fill={NRS.goldDark} />

        {/* ── FACE FEATURES ── */}
        {/* Forehead highlight */}
        <ellipse cx="200" cy="152" rx="30" ry="18" fill="#B8662E" opacity="0.3" />

        {/* Eyebrows */}
        <path d="M162 168 Q175 162 190 167" stroke="#1A0A00" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M230 167 Q245 162 258 168" stroke="#1A0A00" strokeWidth="4.5" strokeLinecap="round" fill="none" />

        {/* Eyes */}
        <g transform={`scale(1, ${eyeScaleY})`} style={{ transformOrigin: '176px 183px' }}>
          <ellipse cx="176" cy="183" rx="16" ry="14" fill="white" />
          <ellipse cx="176" cy="184" rx="10" ry="10" fill="#3D1F00" />
          <ellipse cx="176" cy="184" rx="6" ry="6" fill="#1A0A00" />
          <circle cx="180" cy="180" r="3" fill="white" />
        </g>
        <g transform={`scale(1, ${eyeScaleY})`} style={{ transformOrigin: '244px 183px' }}>
          <ellipse cx="244" cy="183" rx="16" ry="14" fill="white" />
          <ellipse cx="244" cy="184" rx="10" ry="10" fill="#3D1F00" />
          <ellipse cx="244" cy="184" rx="6" ry="6" fill="#1A0A00" />
          <circle cx="248" cy="180" r="3" fill="white" />
        </g>
        {/* Eyelashes */}
        <path d="M162 174 L158 168 M167 172 L165 166 M172 171 L171 164" stroke="#1A0A00" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M230 172 L228 166 M235 171 L234 164 M241 172 L243 166" stroke="#1A0A00" strokeWidth="1.8" strokeLinecap="round" />

        {/* Nose */}
        <path d="M200 195 Q210 210 220 195" stroke="#7A3B1E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="196" cy="202" r="4" fill="#7A3B1E" opacity="0.5" />
        <circle cx="224" cy="202" r="4" fill="#7A3B1E" opacity="0.5" />

        {/* Mouth */}
        <g transform={`translate(0, ${mouthY})`}>
          {/* Smile line */}
          <path
            d={`M183 ${220 + mouthOpen * 0.3} Q${210} ${230 * smileAmount + mouthOpen} ${237} ${220 + mouthOpen * 0.3}`}
            stroke="#7A3B1E"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Open mouth when talking */}
          {mouthOpen > 1 && (
            <>
              <path
                d={`M187 222 Q210 ${224 + mouthOpen} 233 222`}
                fill="#5C1A1A"
              />
              <path
                d={`M190 222 Q210 ${218 - mouthOpen * 0.3} 230 222`}
                fill="white"
                opacity="0.9"
              />
            </>
          )}
          {/* Cheek dimples */}
          <circle cx="163" cy="212" r="14" fill="#C17040" opacity={0.25 * smileAmount} />
          <circle cx="257" cy="212" r="14" fill="#C17040" opacity={0.25 * smileAmount} />
        </g>

        {/* ── EARRINGS ── */}
        <circle cx="122" cy="210" r="8" fill={NRS.gold} />
        <circle cx="298" cy="210" r="8" fill={NRS.gold} />
        <ellipse cx="122" cy="224" rx="5" ry="8" fill={NRS.gold} />
        <ellipse cx="298" cy="224" rx="5" ry="8" fill={NRS.gold} />
      </svg>
    </div>
  );
};
