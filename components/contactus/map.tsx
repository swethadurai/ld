import { motion } from "framer-motion"

function Map() {

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  }
    return (
        <motion.div 
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16"
      >
        <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <iframe 
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy" 
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=leadtap&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </motion.div>
    )}

    export default Map;