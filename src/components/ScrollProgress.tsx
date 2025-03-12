import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const ScrollProgress = () => {
  const { theme } = useTheme();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50"
        style={{ scaleX }}
        initial={{ backgroundColor: theme === "dark" ? "#ffffff" : "#000000" }}
        animate={{ backgroundColor: theme === "dark" ? "#ffffff" : "#000000" }}
        transition={{ duration: 0.3 }}
      />

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center shadow-md z-50 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-white text-black hover:bg-gray-300"
            : "bg-black text-white hover:bg-gray-700"
        }`}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </motion.button>
    </>
  );
};

export default ScrollProgress;
