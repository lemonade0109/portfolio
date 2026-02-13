"use client";

import React from "react";
import { Card, CardContent } from "../ui/card";
import { site } from "@/lib/data";
import { Button } from "../ui/button";

const Hero: React.FC = () => {
  const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#contact");
  };

  return (
    <section>
      <Card>
        <CardContent className="p-6 sm:p-8">
          <p className="text-sm text-muted-foreground">
            {site.location} ● {site.openTo}
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {site.name}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{site.title}</p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
            {site.headline}
          </p>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <Button asChild variant="outline">
              <a
                href={site.ctaSecondary.href}
                download="Jubril_Oyebamiji_CV.pdf"
              >
                {site.ctaSecondary.label}
              </a>
            </Button>

            <Button asChild variant="ghost">
              <a href={site.ctaTertiary.href} onClick={handleContactClick}>
                {site.ctaTertiary.label}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Hero;
