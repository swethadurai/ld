"use client"

import OurServices from "@/components/services/ourservices"
import Servicestimeline from "@/components/services/timeline"
import Servicesstory from "@/components/services/successstory"
import Solutions from "@/components/services/solutions"
import Cta from "@/components/services/cta"
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function PricingPage() {
  return (
    <div  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-36">
     <OurServices/>
     <Servicestimeline/>
     <Servicesstory/>
     <Solutions/>
     <Cta/>
    </div>
  )
}
