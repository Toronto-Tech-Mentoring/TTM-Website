import React from "react"

import VolunteerWithUs from "./VolunteerWithUs"
import PositiveDifferenceSection from "./PositiveDifferenceSection"
import WhatDoVolunteersDo from "./WhatDoVolunteersDo"
import SkillSet from "./SkillSet"
import WhatToKnow from "./WhatToKnow"
import Process from "./Process"

export default function Volunteer() {
  return (
    <div>
      <VolunteerWithUs />
      <PositiveDifferenceSection />
      <WhatDoVolunteersDo />
      <SkillSet />
      <WhatToKnow />
      <Process />
    </div>
  )
}
