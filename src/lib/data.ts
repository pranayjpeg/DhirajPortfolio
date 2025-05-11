import md1 from "../assets/tg.png";
import ap1 from "../assets/eq.png";
import ispta from "../assets/ispta.png";
import rr from "../assets/rr.png";

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string[];
  liveUrl?: string;
  liveUrlG?: string;
  liveUrlA?: string;
  githubUrl?: string;
  type?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Tivoli Group",
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
    imageUrl: [
      md1,
     
    ],
    type: "app",
    liveUrlG:
      "https://play.google.com/store/apps/details?id=com.mdht&hl=en_IN",
    liveUrlA: "https://apps.apple.com/in/app/mdhealthtrak/id6743380687",
    githubUrl: "",
  },
  {
    id: 2,
    title: "AyurPrana+",
    description:
      "AyurPrana+ is a streaming platform offering inspirational content on Ayurveda, Yoga, and Herbalism. It features documentaries, films, and wellness practices to uplift the spirit. Users can explore mindfulness, breathwork, and traditional healing remedies. Available on iOS and Android, it helps reconnect with nature.",
    tags: ["React Native", "Typescript", "Redux", "FireBase", "Video Player"],
    imageUrl: [ap1],
    liveUrlG:
      "https://play.google.com/store/apps/details?id=com.liveayurprana.prod&hl=en_IN",
    liveUrlA: "https://apps.apple.com/in/app/ayurprana/id6469480400",
    githubUrl: "",
    type: "app",
  },
  {
    id: 3,
    title: "MDHEALTHTRAK",
    description:
      "A mobile application for tracking workout routines, nutrition, and fitness progress with personalized recommendations.",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    imageUrl: [ispta],
    liveUrl: "https://www.mdhealthtrak.com/",
    githubUrl: "",
    type: "site",
  },
  {
    id: 4,
    title: "AyurPrana+",
    description:
      "A social networking platform with features like post sharing, user profiles, real-time messaging, and content discovery.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    imageUrl: [rr],
    liveUrl: "https://liveayurprana.com/",
    githubUrl: "",
    type: "site",
  },
  {
    id: 5,
    title: "AyurPrana+",
    description:
      "A social networking platform with features like post sharing, user profiles, real-time messaging, and content discovery.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    imageUrl: [ispta],
    liveUrl: "https://liveayurprana.com/",
    githubUrl: "",
    type: "site",
  },
];

import react from "../assets/sap.png";
import CSS3 from "../assets/tally.png";
import HTML5 from "../assets/d2.png";
import JavaScript from "../assets/office.png";
import TypeScript from "../assets/ms.png";
import Git from "../assets/outlook.png";
import science from "../assets/tax.png";

type Skill = {
  name: string;
  icon: string; // <-- Correct type for Lucide Icons
};

export const skills: Skill[] = [
  { name: "SAP", icon: react },
  { name: "Taxation", icon: science },
  { name: "MS Dyanamics", icon: HTML5 },
  { name: "Tally", icon: CSS3 },
  { name: "MS OFFICE", icon: JavaScript },
  { name: "MS 365", icon: TypeScript },
  { name: "Outlook", icon: Git },
];
