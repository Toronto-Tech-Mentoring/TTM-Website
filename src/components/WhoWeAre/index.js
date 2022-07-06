import React from 'react';

import FirstSection from './FirstSection';
import OurRootsSection from './OurRootsSection';
import TimelineSection from './TimelineSection';
import { SkylineFooter as SkylineFooterSVG } from '../SkylineSVG';
import SecondSection from './SecondSection';

export default function AboutUs() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <OurRootsSection />
      <TimelineSection />
      <SkylineFooterSVG />
    </div>
  );
}
