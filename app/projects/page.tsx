import Projects from "@/components/sections/projects";
import React from "react";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-xl font-bold mb-6">
          {" "}
          Here are some of the projects I&apos;ve worked on. Each project
          showcases my skills and experience in various technologies and
          domains.
        </h1>

        <Projects />
      </main>
    </div>
  );
}
