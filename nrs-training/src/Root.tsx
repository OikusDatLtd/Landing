import React from 'react';
import { Composition } from 'remotion';
import { FPS, WIDTH, HEIGHT, EPISODES } from './constants';
import { Episode1 } from './episodes/Episode1';
import { Episode2 } from './episodes/Episode2';
import { Episode3 } from './episodes/Episode3';
import { Episode4 } from './episodes/Episode4';
import { Episode5 } from './episodes/Episode5';
import { Episode6 } from './episodes/Episode6';
import { Episode7 } from './episodes/Episode7';
import { Episode8 } from './episodes/Episode8';
import { Episode9 } from './episodes/Episode9';
import { Episode10 } from './episodes/Episode10';

const COMPONENTS = [
  Episode1, Episode2, Episode3, Episode4, Episode5,
  Episode6, Episode7, Episode8, Episode9, Episode10,
];

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {EPISODES.map((ep, i) => (
        <Composition
          key={ep.id}
          id={`NRS-Episode-${ep.id.toString().padStart(2, '0')}`}
          component={COMPONENTS[i]}
          durationInFrames={ep.durationSecs * FPS}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
          defaultProps={{}}
        />
      ))}
    </>
  );
};
