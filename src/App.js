import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StickyNavbar } from "./components/StickyNavbar";
import { ProfileCard } from "./components/profile";
import { AboutSection } from "./components/IntroParagraph";
import { Experience } from "./components/Experience";
import { Writing } from "./components/Writing";
import { SkillsCards } from "./components/skillsCard";
import { Links } from "./components/links";
import { Projects } from "./components/Projects";

import "./App.css";

const Home = () => (
  <main>
    <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
      <div className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-16">
        <div className="flex md:w-72 lg:w-80 shrink-0">
          <ProfileCard />
        </div>
        <div className="flex flex-1 flex-col gap-8">
          <AboutSection />
          <Links />
        </div>
      </div>
    </section>

    <section id="experience" className="border-t border-blue-gray-200/80">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Experience />
      </div>
    </section>

    <section id="writing" className="border-t border-blue-gray-200/80">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Writing />
      </div>
    </section>

    <section id="projects" className="border-t border-blue-gray-200/80">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Projects />
      </div>
    </section>

    <section className="border-t border-blue-gray-200/80">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <SkillsCards />
      </div>
    </section>
  </main>
);

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <BrowserRouter>
        <ThemeProvider>
          <StickyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
