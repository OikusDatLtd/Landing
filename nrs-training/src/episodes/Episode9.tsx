import React from 'react';
import { AbsoluteFill, Sequence, useVideoConfig } from 'remotion';
import { FPS } from '../constants';
import { TitleCard } from '../components/TitleCard';
import { Amara } from '../components/Amara';
import { SceneBg } from '../components/SceneBg';
import { EpisodeLayout } from '../components/EpisodeLayout';
import { SubtitleCaption } from '../components/SubtitleCaption';
import { WellnessScene } from '../scenes/WellnessScene';

const TITLE_DURATION = 3 * FPS;

export const Episode9: React.FC = () => {
  const { durationInFrames } = useVideoConfig();

  const captionLines = [
    { text: 'NRS HQ truly invests in your wellbeing — and your family\'s.', startFrame: TITLE_DURATION + 15, endFrame: TITLE_DURATION + 76 },
    { text: 'Our fully equipped GYMNASIUM is available to all staff.', startFrame: TITLE_DURATION + 85, endFrame: TITLE_DURATION + 148, highlight: ['GYMNASIUM'] },
    { text: 'Register via HCM to receive your gym access card. Use it!', startFrame: TITLE_DURATION + 150, endFrame: TITLE_DURATION + 210 },
    { text: 'For nursing mothers: our dedicated CRÈCHE in the basement.', startFrame: TITLE_DURATION + 225, endFrame: TITLE_DURATION + 290, highlight: ['CRÈCHE'] },
    { text: 'Spaces are limited — register EARLY with HCM.', startFrame: TITLE_DURATION + 292, endFrame: TITLE_DURATION + 345, highlight: ['EARLY'] },
    { text: 'Our on-site CLINIC is staffed by qualified medical personnel.', startFrame: TITLE_DURATION + 360, endFrame: TITLE_DURATION + 425, highlight: ['CLINIC'] },
    { text: 'No appointment needed for urgent matters. Walk in.', startFrame: TITLE_DURATION + 427, endFrame: TITLE_DURATION + 480 },
    { text: 'PRAYER ROOMS for all faiths — respect the space and schedules.', startFrame: TITLE_DURATION + 490, endFrame: TITLE_DURATION + 558, highlight: ['PRAYER ROOMS'] },
    { text: 'Your health is your greatest asset. Use these facilities!', startFrame: TITLE_DURATION + 560, endFrame: durationInFrames - 10 },
  ];

  return (
    <EpisodeLayout episodeNumber={9} episodeTitle="Health, Wellness & Family">
      <AbsoluteFill>
        <Sequence from={0} durationInFrames={TITLE_DURATION}>
          <TitleCard episodeNumber={9} title="Health, Wellness & Family" durationFrames={TITLE_DURATION} />
        </Sequence>

        <Sequence from={TITLE_DURATION}>
          <SceneBg type="wellness">
            <AbsoluteFill style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', padding: '80px 40px 60px' }}>
              <div style={{ flex: '0 0 360px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Amara expression="warm" size={340} animateIn talking />
              </div>

              <div style={{ flex: 1, paddingLeft: 20, paddingBottom: 60 }}>
                <WellnessScene delay={20} />
              </div>
            </AbsoluteFill>
            <SubtitleCaption lines={captionLines} />
          </SceneBg>
        </Sequence>
      </AbsoluteFill>
    </EpisodeLayout>
  );
};
