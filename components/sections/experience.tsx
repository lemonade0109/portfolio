import { experience } from "@/lib/data";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Experience: React.FC = () => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
      <div className="mt-4 grid gap-4">
        {experience.map((item) => (
          <Card key={item.role}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">
                {item.role}
                <p className="text-sm text-muted-foreground">{item.period}</p>
              </CardTitle>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
