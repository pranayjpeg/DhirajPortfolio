import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import { FaApple, FaGooglePlay } from "react-icons/fa";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard = ({ project, index }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
        <div className="relative h-80 overflow-hidden rounded-2xl flex items-center justify-center bg-white">
          <motion.img
            src={project.imageUrl[currentIndex]}
            alt="Project Mockup"
            className="max-h-full max-w-full object-contain"
            animate={{ opacity: [0, 1], scale: [0.95, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {/* Project Details */}
        <div className="p-6 space-y-4">
          <h3
            className={`text-2xl font-bold dark:text-white ${
              // project.title === "MDHEALTHTRAK"
              // ? "text-[#1187d5]"
              // : project.title === "AyurPrana+"
              // ? "text-[#d58728]"
              "text-[#1187d5]"
            }`}
          >
            {project.title}
          </h3>
          <span
            className={`text-1xl font-bold dark:text-white ${
              // project.title === "MDHEALTHTRAK"
              // ? "text-[#1187d5]"
              // : project.title === "AyurPrana+"
              // ? "text-[#d58728]"
              "text-[#1187d5]"
            }`}
          >
            {project.loc}
          </span>

          <ul className="list-disc pl-5 text-base dark:text-gray-300 text-[#1187d5] space-y-1">
            {project?.description?.map((point, idx):any => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
