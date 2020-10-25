import React from "react"

import SupportUsSection from './SupportUsSection';
import ContactUsSection from './ContactUsSection';
import DonateTodaySection from './DonateTodaySection';

export default function Sponsors() {
  return (
    <div>
      <DonateTodaySection />
       <ContactUsSection />
       <SupportUsSection />
    </div>
  )
}