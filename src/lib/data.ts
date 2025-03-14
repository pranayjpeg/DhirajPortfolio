import {
  Code,
  Smartphone,
  Codepen,
  Type,
  Boxes,
  GitBranch,
  FileCode,
  PaintBucket,
  LucideIcon,
} from "lucide-react";
import mockupImage from "../assets/md (1).png";
import mdLogo from "../assets/mdLogo.png";
import apLogo from "../assets/apLogo.png";

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  liveUrlG?: string;
  liveUrlA?: string;
  githubUrl?: string;
  type?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "MDHEALTHTRAK",
    description:
      "MDHealthTrak is a health management app designed to simplify elderly care. It enables users to track symptoms, schedule appointments, log medications, and monitor nutrition. With real-time health updates and reminders, it ensures better communication with healthcare providers and peace of mind for families.",
    tags: [
      "React Native",
      "Javascript",
      "Redux",
      "Google Maps",
      "FireBase",
      "OneSignal",
      "Geolocation ",
    ],
    imageUrl: mockupImage,
    type: "app",
    liveUrlG:
      "https://play.google.com/store/apps/details?id=com.liveayurprana.prod&hl=en_IN",
    liveUrlA: "https://apps.apple.com/in/app/ayurprana/id6469480400",
    githubUrl: "",
  },
  {
    id: 2,
    title: "AyurPrana+",
    description:
      "AyurPrana+ is a streaming platform offering inspirational content on Ayurveda, Yoga, and Herbalism. It features documentaries, films, and wellness practices to uplift the spirit. Users can explore mindfulness, breathwork, and traditional healing remedies. Available on iOS and Android, it helps reconnect with nature.",
    tags: ["React Native", "Typescript", "Redux", "FireBase", "Video Player"],
    imageUrl: mockupImage,
    liveUrlG:
      "https://play.google.com/store/apps/details?id=com.liveayurprana.prod&hl=en_IN",
    liveUrlA: "https://apps.apple.com/in/app/ayurprana/id6469480400",
    githubUrl: "",
    type: "app",
  },
  // {
  //   id: 3,
  //   title: "MDHEALTHTRAK",
  //   description:
  //     "A mobile application for tracking workout routines, nutrition, and fitness progress with personalized recommendations.",
  //   tags: ["React Native", "Firebase", "Redux", "Expo"],
  //   imageUrl: mdLogo,
  //   liveUrl: "https://www.mdhealthtrak.com/",
  //   githubUrl: "",
  //   type: "site",
  // },
  // {
  //   id: 4,
  //   title: "AyurPrana+",
  //   description:
  //     "A social networking platform with features like post sharing, user profiles, real-time messaging, and content discovery.",
  //   tags: ["React", "Node.js", "Socket.io", "MongoDB"],
  //   imageUrl: apLogo,
  //   liveUrl: "https://liveayurprana.com/",
  //   githubUrl: "",
  //   type: "site",
  // },
];

type Skill = {
  name: string;
  icon: LucideIcon; // <-- Correct type for Lucide Icons
};

export const skills: Skill[] = [
  { name: "React", icon: Code },
  { name: "React Native", icon: Smartphone },
  { name: "JavaScript", icon: Codepen },
  { name: "TypeScript", icon: Type },
  { name: "Redux", icon: Boxes },
  { name: "Git", icon: GitBranch },
  { name: "HTML", icon: FileCode },
  { name: "CSS", icon: PaintBucket },
];
