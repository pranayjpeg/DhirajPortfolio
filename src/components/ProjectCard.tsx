import { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import { FaApple, FaGooglePlay } from "react-icons/fa";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="group perspective"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white/40 via-white/20 to-white/5 dark:from-gray-900/40 dark:via-gray-900/20 dark:to-gray-900/5 border border-gray-300/20 dark:border-gray-700/20 p-4"
        style={{ willChange: "transform" }}
      >
        {/* Enlarged Mockup Image */}
        <div
          className={`relative h-80 overflow-hidden rounded-2xl flex items-center justify-center 
    ${
      project.title === "MDHEALTHTRAK"
        ? "bg-gradient-to-br from-[#08578c] to-[#1187d5]"
        : project.title === "AyurPrana+"
        ? "bg-[#d58728]"
        : "bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-700 dark:to-gray-900 border border-gray-400 dark:border-gray-800"
    }`}
        >
          <motion.img
            src={project.imageUrl}
            alt="Project Mockup"
            className="w-auto h-full object-contain scale-110 shadow-lg"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {/* Project Details */}
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-base">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-4 py-2 text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex space-x-6 mt-4">
            {project.type === "app" ? (
              <>
                <a
                  href={project.liveUrlA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base font-medium text-gray-900 dark:text-white hover:scale-105 transition-transform"
                >
                  <FaApple size={20} />
                  <span>App Store</span>
                </a>
                <a
                  href={project.liveUrlG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base font-medium text-gray-900 dark:text-white hover:scale-105 transition-transform"
                >
                  <FaGooglePlay size={20} />
                  <span>Google Play</span>
                </a>
              </>
            ) : (
              project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base font-medium text-gray-900 dark:text-white hover:scale-105 transition-transform"
                >
                  <span>View Live</span>
                  🔗
                </a>
              )
            )}
            {project.githubUrl && project.type === "site" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base font-medium text-gray-900 dark:text-white hover:scale-105 transition-transform"
              >
                <span>GitHub</span>
                🛠️
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
