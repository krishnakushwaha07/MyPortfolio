"use client";

import { ExternalLink } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "YT video chat application",
    description:
      "AI-powered YouTube Video Chat that lets users ask questions about videos and get context-aware answers using RAG, embeddings, and Google Gemini.",
    techStack: ["Python","Next.js", "FastAPI", "PostgreSQL", "Langchain", "Gemini"],
    livePreview: "https://videogpt-frontend.vercel.app",
    githubRepo: "https://github.com/krishnakushwaha07/videogpt-frontend.git",
    image: "/ytchat.png",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
    techStack: ["React", "Firebase", "Tailwind CSS", "Redux"],
    livePreview: "https://task-manager-app.com",
    githubRepo: "https://github.com/krishnak/task-management",
    image: "/projects/taskmanager.jpg",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard displaying real-time weather data, forecasts, and interactive maps for multiple locations.",
    techStack: ["React", "OpenWeather API", "Tailwind CSS", "Chart.js"],
    livePreview: "https://weather-dashboard.com",
    githubRepo: "https://github.com/krishnak/weather-dashboard",
    image: "/projects/weather.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-blue-400 font-semibold tracking-[0.20em] uppercase mb-4 text-3xl sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto">
            Explore a collection of my recent work showcasing various
            technologies and problem-solving approaches.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group h-full rounded-3xl border border-slate-800/70 bg-slate-900/70 backdrop-blur-xl hover:border-slate-600/70 transition-all duration-300 overflow-hidden shadow-xl shadow-slate-950/30"
            >
              {/* Project Image */}
              <div className="relative w-full h-50 sm:h-64 bg-linear-to-br from-slate-800 to-slate-900 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col h-70">
                {/* Title */}
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-slate-300 text-sm md:text-base mb-4 line-clamp-3 grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block px-3 py-1 bg-slate-800/90 border border-slate-700 text-slate-100 text-xs rounded-full hover:bg-slate-700/80 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-800 p-8">
                <a
                  href={project.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm font-semibold rounded-3xl shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Live
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-linear-to-r from-slate-900/90 to-slate-800/90 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-slate-100 hover:text-white text-sm font-semibold rounded-3xl shadow-lg shadow-slate-950/20 transition-all duration-200 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
