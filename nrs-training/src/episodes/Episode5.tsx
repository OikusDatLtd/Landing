import React from 'react';
import { AbsoluteFill, Sequence, useVideoConfig } from 'remotion';
import { FPS } from '../constants';
import { TitleCard } from '../components/TitleCard';
import { Amara } from '../components/Amara';
import { SceneBg } from '../components/SceneBg';
import { EpisodeLayout } from '../components/EpisodeLayout';
import { InfoCard } from '../components/InfoCard';
import { SubtitleCaption } from '../components/SubtitleCaption';
import { SecurityScene, EmergencyScene } from '../scenes/SecurityScene';

const TITLE_DURATION = 3 * FPS;

export const Episode5: React.FC = () => {
  const { durationInFrames } = useVideoConfig();

  const captionLines = [
    { text: 'NRS HQ is a controlled, high-security federal facility.', startFrame: TITLE_DURATION + 15, endFrame: TITLE_DURATION + 76 },
    { text: 'ACCESS: Present your NRS Staff ID at ALL entry points, every time.', startFrame: TITLE_DURATION + 85, endFrame: TITLE_DURATION + 155, highlight: ['ALL', 'every time'] },
    { text: 'No ID, no entry. No exceptions — not even for senior officers.', startFrame: TITLE_DURATION + 157, endFrame: TITLE_DURATION + 220 },
    { text: 'VISITORS must be pre-registered at least 24 hours in advance.', startFrame: TITLE_DURATION + 235, endFrame: TITLE_DURATION + 305, highlight: ['24 hours'] },
    { text: 'TAILGATING — following through a secure door — is STRICTLY PROHIBITED.', startFrame: TITLE_DURATION + 315, endFrame: TITLE_DURATION + 390, highlight: ['STRICTLY PROHIBITED'] },
    { text: 'Always badge in individually. No exceptions.', startFrame: TITLE_DURATION + 392, endFrame: TITLE_DURATION + 445 },
    { text: 'EMERGENCY: Evacuate via green exits. NEVER use lifts!', startFrame: TITLE_DURATION + 455, endFrame: TITLE_DURATION + 520, highlight: ['NEVER', 'EMERGENCY'] },
    { text: 'Security is everyone\'s responsibility. Protect your NRS family!', startFrame: TITLE_DURATION + 522, endFrame: durationInFrames - 10 },
  ];

  return (
    <EpisodeLayout episodeNumber={5} episodeTitle="Security & Safety">
      <AbsoluteFill>
        <Sequence from={0} durationInFrames={TITLE_DURATION}>
          <TitleCard episodeNumber={5} title="Security & Safety: Protecting Our HQ" durationFrames={TITLE_DURATION} />
        </Sequence>

        <Sequence from={TITLE_DURATION}>
          <SceneBg type="security">
            <AbsoluteFill style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', padding: '80px 40px 60px' }}>
              <div style={{ flex: '0 0 360px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Amara expression="serious" size={340} animateIn talking />
              </div>

              <div style={{ flex: 1, paddingLeft: 32, paddingBottom: 60, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', gap: 20 }}>
                  <SecurityScene delay={0} />
                  <EmergencyScene delay={30} />
                </div>

                <InfoCard icon="🪪" title="Staff ID — Mandatory" body="Present at every entry point, every time. No exceptions. No ID = No Entry." delay={0} accentColor="#EF5350" />
                <InfoCard icon="👤" title="Visitor Management" body="Pre-register all guests 24hrs in advance via the Visitor Management System." delay={20} />
                <InfoCard icon="🚨" title="Fire Drill — Take It Seriously" body="Evacuate via green-marked stairs immediately. Never use the lifts." delay={40} accentColor="#F5A623" />
              </div>
            </AbsoluteFill>
            <SubtitleCaption lines={captionLines} />
          </SceneBg>
        </Sequence>
      </AbsoluteFill>
    </EpisodeLayout>
  );
};
