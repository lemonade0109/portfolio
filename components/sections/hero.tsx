import React from "react";
import { Card, CardContent } from "../ui/card";
import { site } from "@/lib/data";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero: React.FC = () => {
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
              <Link href={site.ctaSecondary.href}>
                {site.ctaSecondary.label}
              </Link>
            </Button>

            <Button asChild variant="ghost">
              <Link href={site.ctaTertiary.href}>{site.ctaTertiary.label}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Hero;
