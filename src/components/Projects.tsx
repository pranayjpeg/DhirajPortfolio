import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import { useTheme } from "@/hooks/useTheme";

const tabs = ["All", "Web", "Mobile"];

const Projects = () => {
  const { theme, toggleTheme } = useTheme();

  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "All") return true;
    if (activeTab === "Web") return !project.tags.includes("React Native");
    if (activeTab === "Mobile") return project.tags.includes("React Native");
    return true;
  });

  return (
    <section id="projects" className="pt-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.06)_50%)] dark:bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.06)_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-black/5 dark:bg-white/10 rounded-full text-sm mb-4 text-black dark:text-white"
          >
            My Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-gradient dark:text-white"
          >
            Projects
          </motion.h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects?.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center my-6 py-0 bg-transparent px-4"></div>
    </section>
  );
};

export default Projects;
