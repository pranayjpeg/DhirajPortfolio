import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Control body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      // Prevent scrolling on body when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = "";
    }

    // Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-transparent transition-all duration-300"
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between px-4 py-4 bg-transparent">
        <a
          // href="#hero"
          className={`text-1xl font-semibold px-2 py-1.5 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 backdrop-blur-md ${
            theme === "dark"
              ? "text-white/80 bg-gray-900/30"
              : "text-black/80 bg-white/30"
          }`}
        >
          PV
        </a>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["About", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`relative text-sm px-3 py-1 rounded-md shadow-md border border-gray-300 dark:border-gray-700 backdrop-blur-md ${
                    theme === "dark"
                      ? "text-white/80 bg-gray-900/30 hover:text-white"
                      : "text-black/80 bg-white/30 hover:text-black"
                  } transition-colors duration-300`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 backdrop-blur-md ${
              theme === "dark"
                ? "bg-gray-900/30 text-yellow-300 hover:bg-gray-800"
                : "bg-white/30 text-gray-700 hover:bg-gray-200"
            } transition-colors duration-300`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
