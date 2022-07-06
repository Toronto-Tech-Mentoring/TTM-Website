import React from 'react';

import ThankYou from './ThankYou';
import VitalRole from './VitalRole';
import PartnerCards from './PartnerCards';
import LastSection from './LastSection';
import { rainbowImgHack } from './Partners.module.css';

export default function Partners() {
  return (
    <div className={rainbowImgHack}>
      <ThankYou />
      <VitalRole />
      <PartnerCards />
      <LastSection />
    </div>
  );
}
