import React from 'react';
import { AbsoluteFill, Sequence, useVideoConfig } from 'remotion';
import { FPS } from '../constants';
import { TitleCard } from '../components/TitleCard';
import { Amara } from '../components/Amara';
import { SceneBg } from '../components/SceneBg';
import { EpisodeLayout } from '../components/EpisodeLayout';
import { InfoCard } from '../components/InfoCard';
import { SubtitleCaption } from '../components/SubtitleCaption';
import { FacilityScene } from '../scenes/FacilityScene';

const TITLE_DURATION = 3 * FPS;

export const Episode4: React.FC = () => {
  const { durationInFrames } = useVideoConfig();

  const captionLines = [
    { text: 'Our HQ is a premium facility — keeping it excellent is shared responsibility.', startFrame: TITLE_DURATION + 15, endFrame: TITLE_DURATION + 88 },
    { text: 'LIFTS: Use for 3+ floors. 1–2 floors? Take the stairs!', startFrame: TITLE_DURATION + 95, endFrame: TITLE_DURATION + 160, highlight: ['LIFTS', '3+', '1–2'] },
    { text: 'ELECTRICAL: No personal appliances without FM approval.', startFrame: TITLE_DURATION + 170, endFrame: TITLE_DURATION + 235, highlight: ['ELECTRICAL', 'No'] },
    { text: 'Kettles, heaters, fans — all need prior Facility Management approval.', startFrame: TITLE_DURATION + 237, endFrame: TITLE_DURATION + 305 },
    { text: 'CLEANING: Keep your workstation tidy. Report spills immediately.', startFrame: TITLE_DURATION + 315, endFrame: TITLE_DURATION + 385, highlight: ['CLEANING'] },
    { text: 'Broken light, leaking pipe, faulty socket? Report via the FM Portal.', startFrame: TITLE_DURATION + 395, endFrame: TITLE_DURATION + 465 },
    { text: 'Every fault is logged and assigned within 24 hours. Together — excellence!', startFrame: TITLE_DURATION + 467, endFrame: durationInFrames - 10, highlight: ['24 hours'] },
  ];

  return (
    <EpisodeLayout episodeNumber={4} episodeTitle="Facility Management">
      <AbsoluteFill>
        <Sequence from={0} durationInFrames={TITLE_DURATION}>
          <TitleCard episodeNumber={4} title="Facility Management: Keeping Our Space Excellent" durationFrames={TITLE_DURATION} />
        </Sequence>

        <Sequence from={TITLE_DURATION}>
          <SceneBg type="facility">
            <AbsoluteFill style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', padding: '80px 40px 60px' }}>
              <div style={{ flex: '0 0 360px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Amara expression="proud" size={340} animateIn talking />
              </div>

              <div style={{ flex: 1, paddingLeft: 32, paddingBottom: 60, display: 'flex', flexDirection: 'column', gap: 18 }}>
                <FacilityScene delay={0} />
              </div>
            </AbsoluteFill>
            <SubtitleCaption lines={captionLines} />
          </SceneBg>
        </Sequence>
      </AbsoluteFill>
    </EpisodeLayout>
  );
};
