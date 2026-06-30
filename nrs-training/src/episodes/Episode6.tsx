import React from 'react';
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig } from 'remotion';
import { FPS } from '../constants';
import { TitleCard } from '../components/TitleCard';
import { Amara } from '../components/Amara';
import { SceneBg } from '../components/SceneBg';
import { EpisodeLayout } from '../components/EpisodeLayout';
import { InfoCard } from '../components/InfoCard';
import { SubtitleCaption } from '../components/SubtitleCaption';
import { ParkingScene } from '../scenes/ParkingScene';

const TITLE_DURATION = 3 * FPS;

export const Episode6: React.FC = () => {
  const { durationInFrames } = useVideoConfig();

  const captionLines = [
    { text: 'Ah, parking! Let me walk you through how our car park works.', startFrame: TITLE_DURATION + 15, endFrame: TITLE_DURATION + 76 },
    { text: 'Our multi-level car park has ALLOCATED spaces — not free-for-all.', startFrame: TITLE_DURATION + 85, endFrame: TITLE_DURATION + 155, highlight: ['ALLOCATED'] },
    { text: 'Allocation is determined by grade level and availability.', startFrame: TITLE_DURATION + 157, endFrame: TITLE_DURATION + 218 },
    { text: 'You will receive written confirmation of your allocated space.', startFrame: TITLE_DURATION + 228, endFrame: TITLE_DURATION + 292 },
    { text: 'Do NOT park in an unallocated space — even "just for today."', startFrame: TITLE_DURATION + 302, endFrame: TITLE_DURATION + 370 },
    { text: 'Use your NRS access card at the barrier — it logs entry & exit.', startFrame: TITLE_DURATION + 380, endFrame: TITLE_DURATION + 450 },
    { text: 'Motorbike & bicycle parking available near the REAR entrance.', startFrame: TITLE_DURATION + 460, endFrame: TITLE_DURATION + 520 },
    { text: 'Carpooling is encouraged! Speak to HCM if interested.', startFrame: TITLE_DURATION + 528, endFrame: durationInFrames - 10 },
  ];

  return (
    <EpisodeLayout episodeNumber={6} episodeTitle="Parking Made Easy">
      <AbsoluteFill>
        <Sequence from={0} durationInFrames={TITLE_DURATION}>
          <TitleCard episodeNumber={6} title="Parking Made Easy" durationFrames={TITLE_DURATION} />
        </Sequence>

        <Sequence from={TITLE_DURATION}>
          <Audio src={staticFile('audio/ep06.mp3')} />
        </Sequence>

        <Sequence from={TITLE_DURATION}>
          <SceneBg type="parking">
            <AbsoluteFill style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', padding: '80px 40px 60px' }}>
              <div style={{ flex: '0 0 360px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Amara expression="warm" size={340} animateIn talking />
              </div>

              <div style={{ flex: 1, paddingLeft: 32, paddingBottom: 60, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <ParkingScene delay={10} />
                <InfoCard icon="🅿️" title="Allocated by Grade" body="Written confirmation sent when you join. Do not use unallocated spaces — enforcement patrols daily." delay={0} />
                <InfoCard icon="💳" title="Access Card Required" body="Tap your NRS access card at the barrier to enter and exit. Card not working? Report to Security Desk." delay={20} accentColor="#4FC3F7" />
                <InfoCard icon="🚲" title="Cycling & Carpooling" body="Motorbike/bicycle zones near the rear entrance. Carpooling encouraged — contact HCM." delay={40} accentColor="#A5D6A7" />
              </div>
            </AbsoluteFill>
            <SubtitleCaption lines={captionLines} />
          </SceneBg>
        </Sequence>
      </AbsoluteFill>
    </EpisodeLayout>
  );
};
