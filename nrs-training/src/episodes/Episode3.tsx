import React from 'react';
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig } from 'remotion';
import { FPS } from '../constants';
import { TitleCard } from '../components/TitleCard';
import { Amara } from '../components/Amara';
import { SceneBg } from '../components/SceneBg';
import { EpisodeLayout } from '../components/EpisodeLayout';
import { InfoCard } from '../components/InfoCard';
import { SubtitleCaption } from '../components/SubtitleCaption';
import { TechScene, PhoneScene } from '../scenes/TechScene';

const TITLE_DURATION = 3 * FPS;

export const Episode3: React.FC = () => {
  const { durationInFrames } = useVideoConfig();

  const captionLines = [
    { text: 'NRS HQ is a SMART BUILDING. Let me walk you through the tech.', startFrame: TITLE_DURATION + 15, endFrame: TITLE_DURATION + 80, highlight: ['SMART'] },
    { text: 'IP Telephony: your phone extension follows you desk to desk.', startFrame: TITLE_DURATION + 90, endFrame: TITLE_DURATION + 165 },
    { text: 'Simply log in — and your extension follows you. No excuses!', startFrame: TITLE_DURATION + 167, endFrame: TITLE_DURATION + 230 },
    { text: 'CCTV monitors all public areas, corridors & entry points 24/7.', startFrame: TITLE_DURATION + 250, endFrame: TITLE_DURATION + 320, highlight: ['CCTV'] },
    { text: 'Do not tamper with cameras or monitoring equipment.', startFrame: TITLE_DURATION + 322, endFrame: TITLE_DURATION + 385 },
    { text: 'The CCH — Central Clearing House — is the heartbeat of our operations.', startFrame: TITLE_DURATION + 400, endFrame: TITLE_DURATION + 475, highlight: ['CCH'] },
    { text: 'All official NRS transactions pass through it. Use technology wisely!', startFrame: TITLE_DURATION + 477, endFrame: durationInFrames - 10 },
  ];

  return (
    <EpisodeLayout episodeNumber={3} episodeTitle="Tech at Your Fingertips">
      <AbsoluteFill>
        <Sequence from={0} durationInFrames={TITLE_DURATION}>
          <TitleCard episodeNumber={3} title="Tech at Your Fingertips" durationFrames={TITLE_DURATION} />
        </Sequence>

        <Sequence from={TITLE_DURATION}>
          <Audio src={staticFile('audio/ep03.mp3')} />
        </Sequence>

        <Sequence from={TITLE_DURATION}>
          <SceneBg type="tech">
            <AbsoluteFill style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', padding: '80px 40px 60px' }}>
              {/* Amara */}
              <div style={{ flex: '0 0 360px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Amara expression="proud" size={340} animateIn talking />
              </div>

              {/* Right */}
              <div style={{ flex: 1, paddingLeft: 32, paddingBottom: 60, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                  <TechScene delay={0} />
                  <PhoneScene delay={20} />
                </div>

                <InfoCard icon="📞" title="IP Telephony" body="Log in from any desk — extension follows you automatically across all 16 floors." delay={0} />
                <InfoCard icon="📷" title="CCTV — 24/7" body="All public areas, corridors, lifts & entry points monitored around the clock." delay={20} accentColor="#EF5350" />
                <InfoCard icon="🖥️" title="Central Clearing House (CCH)" body="Integrated data & document management — the heartbeat of NRS operations." delay={40} accentColor="#4FC3F7" />
                <InfoCard icon="📶" title="Network" body="Full wired & wireless connectivity throughout the building." delay={60} accentColor="#A78BFA" />
              </div>
            </AbsoluteFill>
            <SubtitleCaption lines={captionLines} />
          </SceneBg>
        </Sequence>
      </AbsoluteFill>
    </EpisodeLayout>
  );
};
