import { Mail, Phone, MapPin, Clock, Heart } from "lucide-react"
import { motion } from "framer-motion"

function Info() {

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
          className="mt-24 "
        >
          <h2 className="text-2xl font-semibold mb-10 text-center">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#FE701A] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#FE701A]" strokeWidth={1.5}/>
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">hello@leadbridge.co.uk</p>
              <a href="mailto:contact@leadbridge.ai" className="text-[#FE701A] text-sm mt-2 inline-block hover:underline">
                Send an email →
              </a>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#0F766E] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#0F766E]" strokeWidth={1.5}/>
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <a href="tel:+15551234567" className="text-[#0F766E] text-sm mt-2 inline-block hover:underline">
                Call us →
              </a>
            </motion.div>
            
            {/* <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#FE701A] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#FE701A]"strokeWidth={1.5} />
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600">
                123 AI Street<br />
                Tech City, TC 12345<br />
                United States
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#0F766E] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#0F766E]"strokeWidth={1.5} />
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday:<br />9:00 AM - 6:00 PM EST<br />
                Saturday - Sunday: Closed
              </p>
            </motion.div> */}
          </div>
        </motion.div>
    )}

    export default Info;