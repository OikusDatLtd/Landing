import React from 'react';
import { AbsoluteFill, Sequence, useVideoConfig } from 'remotion';
import { NRS, FPS } from '../constants';
import { TitleCard } from '../components/TitleCard';
import { Amara } from '../components/Amara';
import { SceneBg } from '../components/SceneBg';
import { EpisodeLayout } from '../components/EpisodeLayout';
import { InfoCard } from '../components/InfoCard';
import { SubtitleCaption } from '../components/SubtitleCaption';
import { FloorMapScene } from '../scenes/FloorMapScene';

const TITLE_DURATION = 3 * FPS;

export const Episode2: React.FC = () => {
  const { durationInFrames } = useVideoConfig();

  const captionLines = [
    { text: 'Our building has sixteen floors — each with the same three-wing layout.', startFrame: TITLE_DURATION + 15, endFrame: TITLE_DURATION + 90, highlight: ['sixteen', 'three-wing'] },
    { text: 'Wing A faces east · Wing B faces west · Wing C faces north', startFrame: TITLE_DURATION + 92, endFrame: TITLE_DURATION + 160 },
    { text: 'All three look down into the beautiful central atrium.', startFrame: TITLE_DURATION + 162, endFrame: TITLE_DURATION + 220 },
    { text: 'TIP: Learn your wing and floor number on Day One.', startFrame: TITLE_DURATION + 240, endFrame: TITLE_DURATION + 310, highlight: ['Day One'] },
    { text: 'Floor directories are at every lift lobby on every floor.', startFrame: TITLE_DURATION + 320, endFrame: TITLE_DURATION + 390 },
    { text: 'Ground floor: food & guests · First floor: learning · Basement: wellness', startFrame: TITLE_DURATION + 400, endFrame: TITLE_DURATION + 480 },
    { text: 'You belong here — navigate with confidence!', startFrame: TITLE_DURATION + 490, endFrame: durationInFrames - 10 },
  ];

  return (
    <EpisodeLayout episodeNumber={2} episodeTitle="Your Building Guide">
      <AbsoluteFill>
        <Sequence from={0} durationInFrames={TITLE_DURATION}>
          <TitleCard episodeNumber={2} title="Your Building Guide" durationFrames={TITLE_DURATION} />
        </Sequence>

        <Sequence from={TITLE_DURATION}>
          <SceneBg type="building">
            <AbsoluteFill style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', padding: '80px 40px 60px' }}>
              {/* Amara */}
              <div style={{ flex: '0 0 380px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Amara expression="warm" size={360} animateIn talking />
              </div>

              {/* Right panel */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, paddingLeft: 32, paddingBottom: 60 }}>
                <div style={{ color: NRS.gold, fontSize: 28, fontFamily: 'Georgia, serif', fontWeight: 'bold', marginBottom: 4 }}>
                  Floor Directory
                </div>
                <FloorMapScene delay={20} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
                  <InfoCard icon="🗺️" title="Pro Navigation Tip" body="Check the lift lobby directory boards on every floor to find any department instantly." delay={50} />
                  <InfoCard icon="🏃" title="Stairs Smart Move" body="For 1–2 floors use the stairs — healthy for you, frees lifts for others." delay={70} accentColor="#4FC3F7" />
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
