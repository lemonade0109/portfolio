import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { skills } from "@/lib/data";

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 text-sm text-muted-foreground">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const Skills: React.FC = () => {
  return (
    <section className="mb-10" id="skills">
      <h2 className="text-xl font-semibold tracking-tight">Skills</h2>

      <p className="mt-1 text-sm text-muted-foreground">
        Tool I use in building a reliable products.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Frontend</CardTitle>
            <CardContent>
              <List items={skills.frontEnd}></List>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Backend</CardTitle>
            <CardContent>
              <List items={skills.backEnd}></List>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Database</CardTitle>
            <CardContent>
              <List items={skills.databases}></List>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tools</CardTitle>
            <CardContent>
              <List items={skills.cloudTools}></List>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
