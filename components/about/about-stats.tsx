"use client"
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Award } from "lucide-react";

interface AnimatedValues {
  team: number;
  clients: number;
  interactions: number;
  awards: number;
}

const AboutStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<AnimatedValues>({
    team: 0,
    clients: 0,
    interactions: 0,
    awards: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const animateNumbers = (key: keyof AnimatedValues, target: number) => {
        let start = 0;
        const duration = 2000;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            start = target;
            clearInterval(timer);
          }
          setAnimatedValues((prev) => ({ ...prev, [key]: Math.floor(start) }));
        }, stepTime);
      };

      animateNumbers("team", 10);
      animateNumbers("clients", 200);
      animateNumbers("interactions", 1000);
      animateNumbers("awards", 15);
    }
  }, [inView]);

  const stats = [
    { 
      icon: <Users className="w-14 h-14 text-[#FF6B2C] mb-3" strokeWidth={1} />, 
      value: animatedValues.team, 
      label: "Years of Combined Experience" 
    },
    { 
      icon: <Target className="w-14 h-14 text-[#FF6B2C] mb-3" strokeWidth={1} />, 
      value: '', 
      label: "Trusted by Multiple Businesses" 
    },
    { 
      icon: <Lightbulb className="w-14 h-14 text-[#FF6B2C] mb-3" strokeWidth={1} />, 
      value: animatedValues.interactions, 
      label: "AI Interactions Processed" 
    },
    { 
      icon: <Award className="w-14 h-14 text-[#FF6B2C] mb-3" strokeWidth={1} />, 
      value: '', 
      label: "Recognised for Innovation" 
    }
  ];

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-wrap justify-center gap-0 sm:gap-16">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-center p-8 bg-white w-64 h-64 flex flex-col justify-center items-center transform hover:scale-105 transition-transform duration-300"
          >
            {stat.icon}
            <p className="text-gray-600 text-md sm:text-lg">
              {stat.value && (
                <span className="text-xl font-bold">
                  {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                </span>
              )}{' '}
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutStats;
