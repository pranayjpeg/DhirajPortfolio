import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { useTheme } from "@/hooks/useTheme";

const About = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-50 to-purple-50 rounded-full opacity-50 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
                theme === "dark"
                  ? "bg-white/10 text-white"
                  : "bg-black/5 text-black"
              }`}
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Passionate about creating impactful technology solutions
            </motion.h2>

            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-700 dark:text-gray-300"
              >
                I'm a frontend developer specializing in React and React Native,
                with a strong focus on building scalable and high-performance
                web and mobile applications.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-700 dark:text-gray-300"
              >
                With hands-on experience in UI development, API integration, and
                optimizing system performance, I create intuitive and visually
                appealing interfaces that enhance user experiences.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-700 dark:text-gray-300"
              >
                Beyond coding, I enjoy exploring new design trends and
                experimenting with emerging technologies to stay ahead in the
                ever-evolving world of development.
              </motion.p>
            </div>
          </div>

          <div className="md:w-1/2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-black/5 rounded-full text-sm mb-4"
            >
              My Skills
            </motion.span>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm border border-black/5 dark:border-white/10 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 mx-auto bg-black/5 dark:bg-white/10 rounded-lg flex items-center justify-center mb-3">
                    {skill.icon.length > 2 ? (
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-300">
                        {skill.icon}
                      </span>
                    ) : (
                      <span className="text-xl text-gray-900 dark:text-gray-100">
                        {skill.icon}
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-200">
                    {skill.name}
                  </h3>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-200">
                Additional Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "REST API",
                  "Responsive Design",
                  "Testing",
                  "Performance Optimization",
                  "Firebase",
                  "Push Notifications",
                  "Google Maps",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm border border-black/5 dark:border-white/10 
       transition-all duration-300 transform hover:bg-gray-900 hover:text-white 
       dark:hover:bg-gray-100 dark:hover:text-black hover:shadow-lg hover:border-black/10 dark:hover:border-white/20 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
