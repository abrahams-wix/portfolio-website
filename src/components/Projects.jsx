import React, { useState } from "react";

const projects = [
  {
    id: "tic-tac-toe",
    title: "Multiplayer Tic Tac Toe",
    stack: ["Express 5", "WebSockets", "Node.js"],
    highlights: [
      "Designed 3 play modes (CPU, local 2 player, online) so different users could start a game in one click without a tutorial.",
      "Built Express 5 server serving static assets and a WebSocket endpoint for real time room state on 1 port.",
      "Defined JSON WebSocket protocol for join, move, leave, and full board sync across 4 server handler modules.",
      "Implemented lobby and game room modules tracking 2 players per room with turn validation on 9 cell boards.",
    ],
    github: "https://github.com/abrahams-wix/tic-tac-toe",
    demo: "https://tic-tac-toe-0y98.onrender.com",
  },
  {
    id: "live-sports",
    title: "Live Sports App",
    stack: ["Express", "REST", "ESPN API"],
    highlights: [
      "Built Cleveland focused team pages with score tables for fans checking schedules and results quickly.",
      "Built Express proxy with 3 league routers forwarding requests to ESPN public APIs for NBA, NFL, and MLB.",
      "Exposed 10+ REST routes for scoreboard, teams, schedules, standings, news, and game summaries as JSON.",
      "Refreshed score and schedule data by polling on a timer so pages stayed fast instead of 1 heavy bulk load.",
    ],
    github: "https://github.com/abrahams-wix/live-sports-app",
    demo: "https://live-sports-app-lyart.vercel.app/home.html",
  },
  {
    id: "fullstack-course",
    title: "Full Stack Web Development Course",
    stack: ["HTML", "CSS", "React", "Node.js"],
    highlights: [
      "Unit 1: Shipped responsive 8 unit static site with HTML, CSS Flexbox, Grid, 2+ breakpoints, forms, and media embeds.",
      "Unit 2: Built games hub with login flow and user scores stored in localStorage for returning players.",
      "Unit 3: Built SPA with client routing, simulated network delay, 2 fake servers, and REST CRUD on JSON in localStorage.",
      "Unit 4: Built React app with json server, fetch, React Router, and CRUD plus search on todos, posts, and albums.",
      "Unit 5: Built React editor with contentEditable, Range API formatting, undo stack, and per user documents in localStorage.",
    ],
    github: "https://github.com/abrahams-wix/Fullstack_5786_project_4",
  },
];

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ProjectLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-blue-gray-300 px-4 py-2 text-sm text-blue-gray-700 transition-colors duration-200 hover:border-blue-gray-900 hover:text-blue-gray-900"
    >
      {children}
    </a>
  );
}

export const Projects = () => {
  const [activeTab, setActiveTab] = useState(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeTab);

  return (
    <section>
      <p className="section-label text-center">Projects</p>
      <h2 className="section-title mb-8 text-center">Projects</h2>

      <div className="card-minimal overflow-hidden">
        <div
          role="tablist"
          className="flex overflow-x-auto border-b border-blue-gray-200/80"
        >
          {projects.map((project) => (
            <button
              key={project.id}
              role="tab"
              aria-selected={activeTab === project.id}
              onClick={() => setActiveTab(project.id)}
              className={`shrink-0 border-b-2 -mb-px px-5 py-3.5 text-sm transition-colors duration-200 ${
                activeTab === project.id
                  ? "border-blue-gray-900 text-blue-gray-900"
                  : "border-transparent text-blue-gray-400 hover:text-blue-gray-600"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {activeProject && (
          <div className="p-6 md:p-8">
            {activeProject.stack && (
              <div className="mb-6 flex flex-wrap gap-2">
                {activeProject.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-gray-200 px-3 py-1 text-xs text-blue-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h3 className="mb-5 text-lg font-medium text-blue-gray-900">
              {activeProject.title}
            </h3>

            <ul className="mb-6 space-y-2 pl-4 text-sm leading-relaxed text-blue-gray-600">
              {activeProject.highlights.map((item) => (
                <li key={item} className="list-disc">
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <ProjectLink href={activeProject.github}>
                <GitHubIcon />
                View on GitHub
              </ProjectLink>
              {activeProject.demo && (
                <ProjectLink href={activeProject.demo}>Live demo</ProjectLink>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
