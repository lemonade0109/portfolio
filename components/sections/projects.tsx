import { projects } from "@/lib/data";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-10 mt-7">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">My Projects</h2>
          <p className="text-sm text-muted-foreground">
            Production-focused apps built end to end
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.name}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{project.name}</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm text-muted-foreground">{project.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge asChild key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
