import { site } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          {site.name}
        </Link>

        <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
          <Link href="/projects" className="hover:text-foreground">
            Projects
          </Link>
          <Link href="/skills" className="hover:text-foreground">
            Skills
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href={site.ctaPrimary.href} target="_blank" rel="noreferrer">
              {site.ctaPrimary.label}
            </Link>
          </Button>
          <Button asChild>
            <Link
              href={site.ctaSecondary.href}
              target="_blank"
              rel="noreferrer"
            >
              {site.ctaSecondary.label}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
