import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiSocketdotio,
  SiMongodb,
  SiMongoose,
  SiGit,
  SiGithub,
  SiPostman,
  SiRender,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbDatabase } from "react-icons/tb";
import { FiLock } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";

// solid badge background + icon color, for the colorful "app icon" style chips
export const toolBadges = {
  Git: { icon: SiGit, bg: "#F05032", fg: "#ffffff" },
  GitHub: { icon: SiGithub, bg: "#181717", fg: "#ffffff" },
  Postman: { icon: SiPostman, bg: "#FF6C37", fg: "#ffffff" },
  "VS Code": { icon: VscVscode, bg: "#007ACC", fg: "#ffffff" },
  Render: { icon: SiRender, bg: "#46E3B7", fg: "#0B1F1A" },
  Vercel: { icon: SiVercel, bg: "#000000", fg: "#ffffff" },
};

// icon + optional brand color (omit color to inherit the site's text color)
export const skillIcons = {
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  Vite: { icon: SiVite, color: "#646CFF" },

  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress },
  "REST API": { icon: TbApi },
  JWT: { icon: SiJsonwebtokens },
  "Socket.IO": { icon: SiSocketdotio },
  bcrypt: { icon: FiLock },

  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Mongoose: { icon: SiMongoose, color: "#880000" },
  SQL: { icon: TbDatabase },

  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  "VS Code": { icon: VscVscode, color: "#007ACC" },
  Render: { icon: SiRender },
  Vercel: { icon: SiVercel },
};
