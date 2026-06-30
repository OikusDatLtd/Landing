import React from 'react';
import { AbsoluteFill, Sequence, useVideoConfig } from 'remotion';
import { NRS, FPS } from '../constants';
import { TitleCard } from '../components/TitleCard';
import { Amara } from '../components/Amara';
import { SceneBg } from '../components/SceneBg';
import { EpisodeLayout } from '../components/EpisodeLayout';
import { InfoCard, StatBadge } from '../components/InfoCard';
import { SubtitleCaption } from '../components/SubtitleCaption';
import { BuildingScene } from '../scenes/BuildingScene';
import { NRSLogo } from '../components/NRSLogo';

const TITLE_DURATION = 3 * FPS;
const LOGO_DURATION = 2 * FPS;

export const Episode1: React.FC = () => {
  const { durationInFrames } = useVideoConfig();

  const captionLines = [
    { text: 'Welcome! On behalf of the Nigeria Revenue Service — E kaabo!', startFrame: TITLE_DURATION + LOGO_DURATION + 10, endFrame: TITLE_DURATION + LOGO_DURATION + 80 },
    { text: 'You are now part of something truly great.', startFrame: TITLE_DURATION + LOGO_DURATION + 82, endFrame: TITLE_DURATION + LOGO_DURATION + 130 },
    { text: 'NRS HQ accommodates approximately THREE THOUSAND staff members', startFrame: TITLE_DURATION + LOGO_DURATION + 140, endFrame: TITLE_DURATION + LOGO_DURATION + 210, highlight: ['THREE'] },
    { text: '...and welcomes up to FIVE HUNDRED visitors every single day.', startFrame: TITLE_DURATION + LOGO_DURATION + 212, endFrame: TITLE_DURATION + LOGO_DURATION + 270, highlight: ['FIVE'] },
    { text: 'SIXTEEN suspended floors — each divided into THREE wings', startFrame: TITLE_DURATION + LOGO_DURATION + 290, endFrame: TITLE_DURATION + LOGO_DURATION + 360, highlight: ['SIXTEEN', 'THREE'] },
    { text: 'overlooking a beautiful central atrium.', startFrame: TITLE_DURATION + LOGO_DURATION + 362, endFrame: TITLE_DURATION + LOGO_DURATION + 410 },
    { text: 'This is YOUR home. Your workplace. Your community.', startFrame: TITLE_DURATION + LOGO_DURATION + 430, endFrame: TITLE_DURATION + LOGO_DURATION + 500, highlight: ['YOUR'] },
    { text: 'Welcome to NRS HQ — let us begin!', startFrame: TITLE_DURATION + LOGO_DURATION + 510, endFrame: durationInFrames - 10 },
  ];

  return (
    <EpisodeLayout episodeNumber={1} episodeTitle="Welcome to NRS HQ">
      <AbsoluteFill>
        {/* Title Card */}
        <Sequence from={0} durationInFrames={TITLE_DURATION}>
          <TitleCard episodeNumber={1} title="Welcome to NRS HQ" durationFrames={TITLE_DURATION} />
        </Sequence>

        {/* Logo sting */}
        <Sequence from={TITLE_DURATION} durationInFrames={LOGO_DURATION}>
          <AbsoluteFill style={{ background: NRS.greenDark, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 20 }}>
            <NRSLogo size={180} animateIn delay={5} showTagline />
          </AbsoluteFill>
        </Sequence>

        {/* Main content */}
        <Sequence from={TITLE_DURATION + LOGO_DURATION}>
          <SceneBg type="studio">
            <AbsoluteFill style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', padding: '80px 40px 60px' }}>
              {/* Left — Amara */}
              <div style={{ flex: '0 0 420px', display: 'flex', justifyContent: 'center' }}>
                <Amara expression="smile" size={400} animateIn talking />
              </div>

              {/* Right — building + stats */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, paddingLeft: 40, paddingBottom: 80 }}>
                <BuildingScene delay={10} />

                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <StatBadge value="3,000" label="Staff Members" delay={30} />
                  <StatBadge value="500" label="Daily Visitors" delay={50} />
                  <StatBadge value="16" label="Suspended Floors" delay={70} />
                  <StatBadge value="3" label="Wings per Floor" delay={90} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
                  <InfoCard icon="🏋️" title="Basement" body="Gymnasium · Crèche · Archive · Prayer Rooms · Clinic" delay={60} />
                  <InfoCard icon="☕" title="Ground Floor" body="Visitors' Lounge · Café · Main Cafeteria" delay={80} accentColor="#4FC3F7" />
                  <InfoCard icon="📚" title="First Floor" body="Library · Grand Auditorium · Meeting Rooms" delay={100} accentColor="#A78BFA" />
                </div>
              </div>
            </AbsoluteFill>

            <SubtitleCaption lines={captionLines} />
          </SceneBg>
        </Sequence>
      </AbsoluteFill>
    </EpisodeLayout>
  );
};
