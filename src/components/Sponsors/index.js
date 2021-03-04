import React from "react"

import SupportUsSection from "./SupportUsSection"
import ContactUsSection from "./ContactUsSection"
import DonateTodaySection from "./DonateTodaySection"
import PartnerWithUsSection from "./PartnerWithUsSection"
import CallForSponsorsSection from "./CallForSponsors"
import ThankYouSection from "./ThankYouSection"
import HowYouCanSupport from "./HowYouCanSupport"

export default function Sponsors() {
  return (
    <div>
      <CallForSponsorsSection />
      <HowYouCanSupport />
      {/* <DonateTodaySection />
      <PartnerWithUsSection />
      <ContactUsSection />
      <SupportUsSection /> */}
      <ThankYouSection />
    </div>
  )
}
