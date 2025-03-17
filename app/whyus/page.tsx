"use client"
import AboutStory from "@/components/about/about-story"
import Aboutmission from "@/components/about/about-mission"
import AboutStats from "@/components/about/about-stats"
import Aboutvalue from "@/components/about/about-core-values"
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutStory/>
      <Aboutmission/>
      <AboutStats/>
      <Aboutvalue/>
    </div>
  )
}
