import React from 'react';
import { ReactComponent as Skylinefooter } from '../../images/skyline/skylinefooter.svg';
import { skylineFooterContainer, skylineFooterImg } from './skyline.module.css';

export default function SkylineFooterSVG() {
  return (
    <div className={skylineFooterContainer}>
      <Skylinefooter className={skylineFooterImg} />
    </div>
  );
}
