import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const closeMobileMenu = (e) => {
    if (e.target.id === "mobile-menu-overlay") {
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-transparent transition-all duration-300"
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between px-4 py-4 bg-transparent">
        <a></a>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["About", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`relative text-1xl font-semibold px-3 py-1.5 rounded-lg shadow-xl border border-gray-300 dark:border-gray-700 backdrop-blur-5xl ${
                    theme === "dark"
                      ? "text-white font-bold bg-gray-900/50 hover:text-white shadow-gray-900/60"
                      : "text-black font-bold bg-white/50 hover:text-black shadow-gray-400/60"
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

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-3/5 h-full bg-white dark:bg-gray-900 shadow-xl p-8 md:hidden z-50 rounded-l-lg"
            >
              <div className="flex justify-end">
                <button
                  onClick={toggleMobileMenu}
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300"
                >
                  <X size={20} />
                </button>
              </div>
              <ul className="flex flex-col space-y-8 mt-12 text-center">
                {["About", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-xl font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      onClick={toggleMobileMenu}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
