
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20 px-6"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.06)_50%)]" />
      </div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 bg-black/5 rounded-full text-sm mb-4"
          >
            Frontend Developer
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-gradient leading-tight"
          >
            Creating Digital<br />Experiences
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8 max-w-md"
          >
            I build modern web and mobile applications focused on performance,
            accessibility, and delightful user experiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="px-6 py-3 bg-black text-white rounded-lg text-sm font-medium transition-transform hover:translate-y-[-2px] active:translate-y-[0px]"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-black/10 hover:border-black/30 rounded-lg text-sm font-medium transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.7,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="w-full max-w-md aspect-square relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8ECAE6] to-[#219EBC] rounded-full opacity-20 blur-3xl" />
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#8ECAE6] to-[#219EBC] flex items-center justify-center animate-float">
                <div className="w-60 h-60 md:w-76 md:h-76 rounded-full glass flex items-center justify-center">
                  <span className="text-6xl font-bold text-gradient">MM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-6 h-6"
          >
            <path d="M12 5v14"></path>
            <path d="M19 12l-7 7-7-7"></path>
          </svg>
        </motion.div>
        <span className="text-xs mt-1 text-black/60">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
