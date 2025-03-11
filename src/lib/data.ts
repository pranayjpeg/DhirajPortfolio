
export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
};

export type Skill = {
  name: string;
  icon: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce platforms with analytics, inventory management, and order processing.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks with drag-and-drop functionality, user collaboration, and deadline tracking.",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Fitness Tracking Mobile App",
    description: "A mobile application for tracking workout routines, nutrition, and fitness progress with personalized recommendations.",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    imageUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "A social networking platform with features like post sharing, user profiles, real-time messaging, and content discovery.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export const skills: Skill[] = [
  { name: "React", icon: "⚛️" },
  { name: "React Native", icon: "📱" },
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "HTML", icon: "HTML" },
  { name: "CSS", icon: "CSS" },
  { name: "Redux", icon: "⚙️" },
  { name: "Git", icon: "🔄" },
];
