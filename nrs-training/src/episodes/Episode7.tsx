import React from 'react';
import { AbsoluteFill, Sequence, useVideoConfig } from 'remotion';
import { FPS } from '../constants';
import { TitleCard } from '../components/TitleCard';
import { Amara } from '../components/Amara';
import { SceneBg } from '../components/SceneBg';
import { EpisodeLayout } from '../components/EpisodeLayout';
import { InfoCard } from '../components/InfoCard';
import { SubtitleCaption } from '../components/SubtitleCaption';
import { HCMScene } from '../scenes/HCMScene';

const TITLE_DURATION = 3 * FPS;

export const Episode7: React.FC = () => {
  const { durationInFrames } = useVideoConfig();

  const captionLines = [
    { text: 'You have RIGHTS here at NRS — and you also have responsibilities.', startFrame: TITLE_DURATION + 15, endFrame: TITLE_DURATION + 78, highlight: ['RIGHTS'] },
    { text: 'HCM is your first point of contact for all staff welfare matters.', startFrame: TITLE_DURATION + 88, endFrame: TITLE_DURATION + 155 },
    { text: 'Employment records, leave applications, welfare benefits — HCM has you.', startFrame: TITLE_DURATION + 157, endFrame: TITLE_DURATION + 225 },
    { text: 'Your working hours are defined in your terms of engagement. Please adhere.', startFrame: TITLE_DURATION + 235, endFrame: TITLE_DURATION + 305 },
    { text: 'DRESS CODE: Smart formal attire Monday to Thursday.', startFrame: TITLE_DURATION + 315, endFrame: TITLE_DURATION + 380, highlight: ['DRESS CODE'] },
    { text: 'NRS is a federal institution — how we present ourselves matters.', startFrame: TITLE_DURATION + 382, endFrame: TITLE_DURATION + 450 },
    { text: 'Experience a workplace issue? Raise it formally via the HCM Grievance Portal.', startFrame: TITLE_DURATION + 460, endFrame: TITLE_DURATION + 535 },
    { text: 'No issue is too small. You matter here. We are in this together!', startFrame: TITLE_DURATION + 537, endFrame: durationInFrames - 10 },
  ];

  return (
    <EpisodeLayout episodeNumber={7} episodeTitle="Staff Rights & Duties">
      <AbsoluteFill>
        <Sequence from={0} durationInFrames={TITLE_DURATION}>
          <TitleCard episodeNumber={7} title="Staff Rights & Duties: Your HCM Guide" durationFrames={TITLE_DURATION} />
        </Sequence>

        <Sequence from={TITLE_DURATION}>
          <SceneBg type="hr">
            <AbsoluteFill style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', padding: '80px 40px 60px' }}>
              <div style={{ flex: '0 0 360px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Amara expression="warm" size={340} animateIn talking />
              </div>

              <div style={{ flex: 1, paddingLeft: 32, paddingBottom: 60, display: 'flex', flexDirection: 'column', gap: 18 }}>
                <HCMScene delay={0} />
              </div>
            </AbsoluteFill>
            <SubtitleCaption lines={captionLines} />
          </SceneBg>
        </Sequence>
      </AbsoluteFill>
    </EpisodeLayout>
  );
};
