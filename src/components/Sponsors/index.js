import React from 'react';

import CallForSponsorsSection from './CallForSponsors';
import ThankYouSection from './ThankYouSection';
import HowYouCanSupport from './HowYouCanSupport';

export default function Sponsors() {
  return (
    <div>
      <CallForSponsorsSection />
      <HowYouCanSupport />
      {/* <DonateTodaySection /> */}
      {/* <PartnerWithUsSection /> */}
      {/* <ContactUsSection /> */}
      {/* <SupportUsSection /> */}
      <ThankYouSection />
    </div>
  );
}
