import React from "react";
import { Card, CardContent } from "../ui/card";
import { site } from "@/lib/data";
import { Button } from "../ui/button";
import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="mb-6">
      <Card>
        <CardContent className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Email: <span className="text-foreground">{site.email}</span>
            </p>

            <p className="text-sm text-muted-foreground">
              LinkedIn:{" "}
              <Link
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline"
              >
                {site.linkedin}
              </Link>
            </p>
          </div>

          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href={`mailto:${site.email}`}>Send Email</Link>
            </Button>

            <Button asChild>
              <Link href={site.github} target="_blank" rel="noreferrer">
                GitHub
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
