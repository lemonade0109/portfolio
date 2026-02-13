import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 my-20">
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <p>
            I&apos;m a self-taught full-stack developer with over three years of
            hands-on experience building production-ready web applications.
          </p>

          <p>
            My primary stack revolves around Next.js, TypeScript, Prisma, and
            modern cloud tools. I enjoy building systems with clean
            architecture, real-world features, and strong user experience.
          </p>

          <p>
            I&apos;ve built multiple full-stack products including a security
            escort platform, an e-commerce system, and a vacation rental
            application.
          </p>

          <p>
            I&apos;m currently seeking a remote full-stack role in a fast-moving
            product team in the USA, UK, Germany, or France.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
