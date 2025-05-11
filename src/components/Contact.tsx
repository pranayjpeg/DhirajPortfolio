import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const Contact = () => {
  const { theme } = useTheme();

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.06)_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-2xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`inline-block px-3 py-1 rounded-full text-sm mb-4 transition-colors ${
              theme === "dark"
                ? "bg-white/10 text-gray-300"
                : "bg-black/5 text-gray-700"
            }`}
          >
            Get In Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-black dark:text-white"
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 mb-8"
          >
            Open to freelance projects, collaborations, or full-time roles. Feel
            free to reach out to connect or say hello.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4 mb-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black/5 dark:bg-white/10 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-black dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <a
                  href="mailto:revankardhiraj@yahoo.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  revankardhiraj@yahoo.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black/5 dark:bg-white/10 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.002 2.75a9.242 9.242 0 00-9.25 9.25c0 1.63.42 3.16 1.165 4.497l-1.29 4.708a.345.345 0 00.422.421l4.708-1.29a9.207 9.207 0 004.496 1.164c5.108 0 9.25-4.14 9.25-9.25s-4.142-9.25-9.25-9.25z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.972 14.382c-.27-.14-1.6-.79-1.85-.88-.25-.09-.44-.14-.63.14-.19.28-.67.89-.83 1.08-.16.18-.31.2-.58.07-1.58-.78-2.63-1.4-3.68-3.15-.28-.48.28-.44.78-1.46.09-.17.04-.33-.02-.46-.07-.13-.6-1.47-.82-2-.22-.52-.44-.45-.61-.46-.16-.007-.34-.007-.53-.007a1.002 1.002 0 00-.75.34c-.26.27-.97.93-.97 2.27s.995 2.63 1.133 2.815c.138.183 1.96 3.04 4.74 4.27 2.287.97 2.75.78 3.24.73.49-.05 1.64-.65 1.88-1.28.23-.63.23-1.17.16-1.28-.07-.11-.26-.18-.53-.32z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Mobile No</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  (+966) 534091995
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium mb-4 text-black dark:text-white">
              Connect with me
            </h3>
            <div className="flex gap-4">
              {[
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/dhiraj-revankar-473a9321/",
                },
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/dhirajrevankar?igsh=MWMwZjd4b2Z4bmRy",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center transition-transform hover:translate-y-[-2px]"
                  aria-label={social.name}
                >
                  {social.name === "GitHub" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-white dark:stroke-black"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  )}

                  {social.name === "LinkedIn" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-white dark:stroke-black"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}

                  {social.name === "Instagram" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-white dark:stroke-black"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
