import md1 from "../assets/mdImages/1.png";
import md2 from "../assets/mdImages/2.png";
import md3 from "../assets/mdImages/3.png";
import md4 from "../assets/mdImages/4.png";
import md5 from "../assets/mdImages/5.png";
import md6 from "../assets/mdImages/6.png";
import md7 from "../assets/mdImages/7.png";
import md8 from "../assets/mdImages/8.png";
import md9 from "../assets/mdImages/9.png";
import md10 from "../assets/mdImages/10.png";
import md11 from "../assets/mdImages/11.png";
import md12 from "../assets/mdImages/12.png";
import md13 from "../assets/mdImages/13.png";
import md14 from "../assets/mdImages/14.png";

import ap1 from "../assets/apImages/ap (1).png";
import ap2 from "../assets/apImages/ap (2).png";
import ap3 from "../assets/apImages/ap (3).png";
import ap4 from "../assets/apImages/ap (4).png";
import ap5 from "../assets/apImages/ap (5).png";
import ap6 from "../assets/apImages/ap (6).png";
import ap7 from "../assets/apImages/ap (7).png";
import ap8 from "../assets/apImages/ap (8).png";
import ap9 from "../assets/apImages/ap (9).png";

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
    imageUrl: [
      md2,
      md1,
      md3,
      md4,
      md5,
      md6,
      md7,
      md8,
      md9,
      md10,
      md11,
      md12,
      md13,
      md14,
    ],
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
    imageUrl: [ap1, ap9, ap4, ap8, ap3, ap2, ap7, ap5, ap6],
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

import react from "../assets/React.png";
import CSS3 from "../assets/CSS3.png";
import HTML5 from "../assets/HTML5.png";
import JavaScript from "../assets/JavaScript.png";
import TypeScript from "../assets/TypeScript.png";
import Git from "../assets/Git.png";
import Redux from "../assets/Redux.png";
import science from "../assets/science.png";

type Skill = {
  name: string;
  icon: string; // <-- Correct type for Lucide Icons
};

export const skills: Skill[] = [
  { name: "React", icon: react },
  { name: "React Native", icon: science },
  { name: "JavaScript", icon: JavaScript },
  { name: "TypeScript", icon: TypeScript },
  { name: "Redux", icon: Redux },
  { name: "Git", icon: Git },
  { name: "HTML", icon: HTML5 },
  { name: "CSS", icon: CSS3 },
];
