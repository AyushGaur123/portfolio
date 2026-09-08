import chatty from "../assets/projects/chatty.png"
import todo from "../assets/projects/todo.png"
import port from "../assets/projects/portfolio.png"
import spotify from "../assets/projects/spotify.png"
import leadNova from "../assets/projects/leadNova.jpeg"

export const projects = [
  {
    id: 1,
    number: "01",
    title: "LeadNova",
    year: "2026",
    description:
      "A full-stack CRM platform for managing leads, tracking sales pipelines, organizing follow-ups, and monitoring lead performance with analytics.",
    image: leadNova,
    tech: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
    github: "https://github.com/AyushGaur123/crm",
    live: "https://crm-frontend-fjro.onrender.com",
    featured: true,
  },
  {
    id: 2,
    number: "02",
    title: "Chatty",
    year: "2025",
    description:
      "A real-time communication platform with authentication, private conversations, image sharing and Socket.IO powered messaging.",
    image: chatty,
    tech: ["React", "Node.js", "MongoDB", "Socket.IO", "JWT"],
    github: "https://github.com/AyushGaur123/chatt-app",
    live: "https://chatt-app-xt6j.onrender.com",
    featured: true,
  },
  {
    id: 3,
    number: "03",
    title: "Todo Application",
    year: "2025",
    description:
      "A focused task-management application with user authentication, CRUD operations, protected APIs and a responsive React interface.",
    image: todo,
    tech: ["React", "Express", "MongoDB", "JWT"],
    github: "https://github.com/AyushGaur123/todo-frontend",
    live: "https://todo-frontend-84h3.onrender.com",
    featured: true,
  },
  {
    id: 4,
    number: "04",
    title: "Spotify Clone",
    year: "2025",
    description:
      "A responsive music interface exploring playlists, a custom player experience and component-based React UI.",
    image: spotify,
    tech: ["html", "JavaScript", "CSS"],
    github: "https://github.com/AyushGaur123/spotifyClone",
    live: "",
    featured: false,
  },
  {
    id: 5,
    number: "05",
    title: "Developer Portfolio",
    year: "2026",
    description:
      "A personal portfolio redesigned around a restrained editorial visual system, responsive layouts and accessible light/dark themes.",
    image: port,
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    github: "https://github.com/AyushGaur123/FUTURE_FS_01",
    live: "",
    featured: false,
  },
];