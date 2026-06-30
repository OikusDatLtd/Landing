import React from 'react';
import { AbsoluteFill, Sequence, useVideoConfig } from 'remotion';
import { FPS } from '../constants';
import { TitleCard } from '../components/TitleCard';
import { Amara } from '../components/Amara';
import { SceneBg } from '../components/SceneBg';
import { EpisodeLayout } from '../components/EpisodeLayout';
import { InfoCard } from '../components/InfoCard';
import { SubtitleCaption } from '../components/SubtitleCaption';
import { MeetingRoomScene } from '../scenes/MeetingRoomScene';

const TITLE_DURATION = 3 * FPS;

export const Episode8: React.FC = () => {
  const { durationInFrames } = useVideoConfig();

  const captionLines = [
    { text: 'We have the best collaboration spaces in any federal institution.', startFrame: TITLE_DURATION + 15, endFrame: TITLE_DURATION + 76 },
    { text: 'Meeting rooms across all 16 floors. Book via the Room Booking System.', startFrame: TITLE_DURATION + 85, endFrame: TITLE_DURATION + 155 },
    { text: 'See availability in real time and reserve for as little as 30 minutes.', startFrame: TITLE_DURATION + 157, endFrame: TITLE_DURATION + 220 },
    { text: 'RULE: Book only what you need. Don\'t hold a 12-person room for 3 people!', startFrame: TITLE_DURATION + 235, endFrame: TITLE_DURATION + 310, highlight: ['RULE'] },
    { text: 'Cancel promptly if plans change — free the space for others.', startFrame: TITLE_DURATION + 320, endFrame: TITLE_DURATION + 385 },
    { text: 'Leave rooms as found: clear the whiteboard, take your materials.', startFrame: TITLE_DURATION + 395, endFrame: TITLE_DURATION + 460 },
    { text: 'AUDITORIUM: First floor. Request via Events Management, 5 days notice.', startFrame: TITLE_DURATION + 470, endFrame: TITLE_DURATION + 540, highlight: ['AUDITORIUM'] },
    { text: 'Shared spaces work best when we all take ownership. Thank you!', startFrame: TITLE_DURATION + 542, endFrame: durationInFrames - 10 },
  ];

  return (
    <EpisodeLayout episodeNumber={8} episodeTitle="Meeting Rooms & Shared Spaces">
      <AbsoluteFill>
        <Sequence from={0} durationInFrames={TITLE_DURATION}>
          <TitleCard episodeNumber={8} title="Meeting Rooms & Shared Spaces" durationFrames={TITLE_DURATION} />
        </Sequence>

        <Sequence from={TITLE_DURATION}>
          <SceneBg type="meetings">
            <AbsoluteFill style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', padding: '80px 40px 60px' }}>
              <div style={{ flex: '0 0 360px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Amara expression="warm" size={340} animateIn talking />
              </div>

              <div style={{ flex: 1, paddingLeft: 32, paddingBottom: 60, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <MeetingRoomScene delay={0} />
                <InfoCard icon="🎭" title="Grand Auditorium — 1st Floor" body="For townhalls, training, ceremonies. Book via Events Management with 5 working days notice." delay={0} accentColor="#A78BFA" />
                <InfoCard icon="☕" title="Cafeteria Etiquette" body="Shared space — mind noise levels, clean up after yourself, respect colleagues' space." delay={20} />
              </div>
            </AbsoluteFill>
            <SubtitleCaption lines={captionLines} />
          </SceneBg>
        </Sequence>
      </AbsoluteFill>
    </EpisodeLayout>
  );
};
