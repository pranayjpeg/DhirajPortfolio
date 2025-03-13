import { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/lib/data";

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
        className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-white/40 via-white/20 to-white/5 dark:from-gray-900/40 dark:via-gray-900/20 dark:to-gray-900/5 border border-gray-300/20 dark:border-gray-700/20"
        style={{ willChange: "transform" }} // Helps prevent text blurring
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Project Details (Separate from Hover Effect) */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex space-x-4 mt-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:scale-105 transition-transform"
              >
                <span>View Live</span>
                🔗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:scale-105 transition-transform"
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
