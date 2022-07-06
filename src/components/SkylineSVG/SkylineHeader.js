import React from 'react';
import { ReactComponent as Skylinehead } from '../../images/skyline/skylineheader.svg';
import { skylineSettings, moveUp } from './skyline.module.css';

export default function SkylineHeaderSVG() {
  return (
    <div className={moveUp}>
      <Skylinehead className={skylineSettings} />
    </div>
  );
}
