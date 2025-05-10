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
              Driven to optimize financial processes and deliver impactful
              solutions.
            </motion.h2>

            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-700 dark:text-gray-300"
              >
                An experienced Senior Accountant and Finance & Logistics
                Executive with over 15 years of expertise across the Middle East
                and India. Skilled in financial reporting, budgeting, auditing,
                and logistics coordination, with a proven ability to streamline
                operations and support strategic decision-making.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-700 dark:text-gray-300"
              >
                Proficient in ERP systems, managing full-cycle accounting, and
                collaborating across departments to enhance financial
                transparency and control. Adaptable to multicultural
                environments and committed to delivering accuracy, compliance,
                and business efficiency. Known for driving cost-saving
                initiatives and optimizing financial processes.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-700 dark:text-gray-300"
              >
                Passionate about continuous professional growth and implementing
                innovative solutions to meet business challenges. Strong focus
                on fostering effective communication and building lasting
                relationships across teams.
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
              transition={{ duration: 0.5 }} // Removed delay
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.1 }} // Removed per-item delay
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-[#a370f0] to-[#5aa3f8] dark:from-[#3b4863] dark:to-[#4b5563]
                 rounded-lg p-4 text-center shadow-md border border-black/10 
                 dark:border-white/10 transition-all duration-300 ease-in-out
                 hover:shadow-[0_4px_20px_rgba(163,112,240,0.6)]"
                >
                  <div className="w-12 h-12 mx-auto bg-black/10 dark:bg-white/30 rounded-lg flex items-center justify-center mb-3">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                    />
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
              transition={{ duration: 0, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-200">
                Additional Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Financial Reporting & Management",
                  "Budget Preparation & Forecasting",
                  "Financial Statement Analysis",
                  "Accounts Payable & Receivable Management",
                  "Cost Accounting & Job Costing",
                  "Payroll Management",
                  "Cash Flow Management",
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
