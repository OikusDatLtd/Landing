import React from 'react';
import { AbsoluteFill, Audio, Sequence, interpolate, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { NRS, FPS } from '../constants';
import { TitleCard } from '../components/TitleCard';
import { Amara } from '../components/Amara';
import { SceneBg } from '../components/SceneBg';
import { EpisodeLayout } from '../components/EpisodeLayout';
import { SubtitleCaption } from '../components/SubtitleCaption';
import { InspireScene } from '../scenes/InspireScene';
import { NRSLogo } from '../components/NRSLogo';

const TITLE_DURATION = 3 * FPS;

const ValuesStrip: React.FC = () => {
  const frame = useCurrentFrame();
  const offset = TITLE_DURATION;
  const values = ['EXCELLENCE', 'INTEGRITY', 'SERVICE', 'PRIDE', 'NATION'];

  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
      {values.map((v, i) => {
        const progress = interpolate(frame - offset, [i * 12 + 60, i * 12 + 82], [0, 1], {
          extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
        });
        return (
          <div key={v} style={{
            opacity: progress,
            transform: `scale(${0.7 + 0.3 * progress})`,
            background: i === 0 ? NRS.gold : `${NRS.gold}22`,
            color: i === 0 ? NRS.greenDark : NRS.gold,
            border: `2px solid ${NRS.gold}`,
            borderRadius: 12,
            padding: '12px 22px',
            fontSize: 15,
            fontWeight: 'bold',
            fontFamily: 'Georgia, serif',
            letterSpacing: 3,
          }}>
            {v}
          </div>
        );
      })}
    </div>
  );
};

export const Episode10: React.FC = () => {
  const { durationInFrames } = useVideoConfig();

  const captionLines = [
    { text: 'We have reached the final episode. I want to leave you with something deeper.', startFrame: TITLE_DURATION + 15, endFrame: TITLE_DURATION + 88 },
    { text: 'NRS exists to mobilise the revenue that POWERS THIS NATION.', startFrame: TITLE_DURATION + 96, endFrame: TITLE_DURATION + 160, highlight: ['POWERS THIS NATION'] },
    { text: 'Every tax processed, every audit — it goes toward roads, hospitals, schools.', startFrame: TITLE_DURATION + 162, endFrame: TITLE_DURATION + 240 },
    { text: 'The NRS spirit: EXCELLENCE, INTEGRITY, SERVICE. We do not cut corners.', startFrame: TITLE_DURATION + 255, endFrame: TITLE_DURATION + 330, highlight: ['EXCELLENCE', 'INTEGRITY', 'SERVICE'] },
    { text: 'This headquarters was built to INSPIRE you every day you walk through those doors.', startFrame: TITLE_DURATION + 340, endFrame: TITLE_DURATION + 420, highlight: ['INSPIRE'] },
    { text: 'My challenge to you: bring your BEST — every day, in every interaction.', startFrame: TITLE_DURATION + 435, endFrame: TITLE_DURATION + 510, highlight: ['BEST'] },
    { text: 'You were chosen for this. The NRS family is proud to have you.', startFrame: TITLE_DURATION + 520, endFrame: TITLE_DURATION + 590 },
    { text: 'E jọ — use everything you have learned. This is your NRS HQ. Welcome home!', startFrame: TITLE_DURATION + 595, endFrame: durationInFrames - 10, highlight: ['E jọ'] },
  ];

  return (
    <EpisodeLayout episodeNumber={10} episodeTitle="Living the NRS Spirit">
      <AbsoluteFill>
        <Sequence from={0} durationInFrames={TITLE_DURATION}>
          <TitleCard episodeNumber={10} title="Living the NRS Spirit" durationFrames={TITLE_DURATION} />
        </Sequence>

        <Sequence from={TITLE_DURATION}>
          <Audio src={staticFile('audio/ep10.mp3')} />
        </Sequence>

        <Sequence from={TITLE_DURATION}>
          <SceneBg type="inspire">
            <AbsoluteFill style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', padding: '80px 40px 60px' }}>
              {/* Amara — most passionate */}
              <div style={{ flex: '0 0 380px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Amara expression="proud" size={360} animateIn talking />
              </div>

              {/* Right — map + values */}
              <div style={{ flex: 1, paddingLeft: 24, paddingBottom: 60, display: 'flex', flexDirection: 'column', gap: 28, alignItems: 'center' }}>
                {/* Logo */}
                <NRSLogo size={100} animateIn delay={10} showTagline />

                <InspireScene delay={20} />

                <ValuesStrip />

                {/* Final blessing */}
                <div style={{
                  color: NRS.gold,
                  fontSize: 22,
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic',
                  textAlign: 'center',
                  opacity: interpolate(0, [0, 1], [0, 1]),
                }}>
                  "E jọ — Now let us serve, together."
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
