
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const About = () => {
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
              className="inline-block px-3 py-1 bg-black/5 rounded-full text-sm mb-4"
            >
              About Me
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 text-gradient"
            >
              Passionate about creating meaningful digital solutions
            </motion.h2>
            
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-600"
              >
                I'm a frontend developer with expertise in building responsive and
                performant web and mobile applications using modern technologies and
                frameworks.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-600"
              >
                My approach combines technical expertise with a strong focus on user
                experience, creating intuitive interfaces that are both visually
                appealing and highly functional.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-600"
              >
                When I'm not coding, you can find me exploring new design trends,
                contributing to open-source projects, or experimenting with emerging
                technologies to stay at the forefront of web development.
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
                  className="bg-white rounded-lg p-4 text-center shadow-sm border border-black/5 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 mx-auto bg-black/5 rounded-lg flex items-center justify-center mb-3">
                    {skill.icon.length > 2 ? (
                      <span className="text-sm font-semibold">{skill.icon}</span>
                    ) : (
                      <span className="text-xl">{skill.icon}</span>
                    )}
                  </div>
                  <h3 className="font-medium">{skill.name}</h3>
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
              <h3 className="text-lg font-semibold mb-4">Additional Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "REST API",
                  "GraphQL",
                  "Responsive Design",
                  "UI/UX",
                  "Testing",
                  "Performance Optimization",
                  "Webpack",
                  "Firebase",
                  "AWS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white rounded-full text-sm border border-black/5"
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
