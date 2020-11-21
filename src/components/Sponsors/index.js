import React from "react"

import SupportUsSection from './SupportUsSection';
import ContactUsSection from './ContactUsSection';
import DonateTodaySection from './DonateTodaySection';
import PartnerWithUsSection from './PartnerWithUsSection';
import CallForSponsorsSection from './CallForSponsors';

export default function Sponsors() {
  return (
    <div>
      <CallForSponsorsSection />
      <DonateTodaySection />
       <PartnerWithUsSection />
       <ContactUsSection />
       <SupportUsSection />
    </div>
  )
}