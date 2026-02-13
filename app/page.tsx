import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-5xl px-4 py-10">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
