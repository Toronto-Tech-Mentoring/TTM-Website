import React from 'react';
import WhatIsTTM from './WhatIsTTM';
import HowAreWeDifferentSection from './HowAreWeDifferentSection';
import WhyTech from './WhyTech';
import Testmonials from './Testmonials';
import { SkylineFooter as SkylineFooterSVG } from '../SkylineSVG';

const LandingPage = () => (
  <>
    <WhatIsTTM />
    <HowAreWeDifferentSection />
    <WhyTech />
    <Testmonials />
    <SkylineFooterSVG />
  </>
);

export default LandingPage;
