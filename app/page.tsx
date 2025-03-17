"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import Hero from "@/components/home/Hero"
import BenefitsSection from "@/components/home/future-of-work"
import WhoWeAre from "@/components/home/who-we-wre"
import AgentServiceSection from "@/components/home/image-with-text"
import ProcessSection from "@/components/home/timeline-steps"
import Testimonial from "@/components/testimonial"
import Blog from "@/components/blog"
import Icons from "@/components/home/icons"
import Faq from "@/components/faq"
import Form from "@/components/form"
// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Home() {
  return (
    <div className="pt-16">
      <Hero/>
      <AgentServiceSection/>
      <WhoWeAre/>
      <BenefitsSection/>
      <ProcessSection/>
      <Testimonial/>
      <Blog/>
      <Icons/>
      <Faq/>
      <Form/>
    </div>
  )
}
