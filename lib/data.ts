export const site = {
  name: "Jubril Oyebamiji",
  title: "Full Stack Next.js Developer",
  location: "Lagos, Nigeria",
  openTo: "Remote (USA, UK, Germany, France)",
  email: "jubriloyebamiji8@gmail.com",
  phone: "+234 807 545 4735",
  github: "https://github.com/lemonade0109",
  linkedin: "",
  portfolio: "",
  headline:
    "I build production ready web applications with Next.js, React, Prisma, TypeScript,and Cloud Tooling.",
  ctaPrimary: { label: "Github", href: "https://github.com/lemonade0109" },
  ctaSecondary: { label: "Download CV", href: "/Jubril_Oyebamiji_CV.pdf" },
  ctaTertiary: { label: "Contact Me", href: "#contact" },
};

export const projects = [
  {
    name: "Secure Escort",
    desc: "Full stack security escort and delivery management platform with role based dashboards for users, guards, administrators.",
    live: "https://secure-escort.vercel.app",
    github: "https://github.com/lemonade0109/secure-escort.git",
    tags: [
      "Next.js",
      "React",
      "Prisma",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "NextAuth",
      "Vercel",
    ],
  },

  {
    name: "Buy Easy",
    desc: "Production ready e-commerce platform with customer storefront and admin management",
    live: "https://buy-easy-six.vercel.app",
    github: "https://github.com/lemonade0109/buy-easy-six.git",
    tags: [
      "Next.js",
      "React",
      "Prisma",
      "TypeScript",
      "Postgres",
      "MongoDB",
      "NextAuth",
      "Vercel",
    ],
  },
  {
    name: "Your Home Away",
    desc: "Vacation rental platform (Airbnb-style) with bookings, reviews, Stripe payments, and dashboard.",
    live: "https://your-home-away.vercel.app",
    github: "https://github.com/lemonade0109/your-home-away.git",
    tags: [
      "Next.js",
      "React",
      "Prisma",
      "TypeScript",
      "Tailwind CSS",
      "Postgres",
      "MongoDB",
      "NextAuth",
      "Stripe",
      "Vercel",
    ],
  },
];

export const skills = {
  frontEnd: [
    "Next.js (App Router)",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "HTML",
    "CSS",
    "JavaScript",
    "Shadcn/ui",
  ],
  backEnd: [
    "Node.js",
    "Express",
    "API Routes",
    "REST/GraphQL",
    "NextAuth.js",
    "JWT/OAuth",
    "Clerk",
  ],
  databases: ["Prisma", "PostgreSQL", "MongoDB", "MySQL"],
  cloudTools: ["Vercel", "Heroku", "AWS", "Git", "Cloudinary", "Stripe/Paypal"],
  Testing: ["Jest", "RTL", "Cypress"],
};

export const experience = [
  {
    role: "Full Stack Developer | Self Employed",
    period: "April 2023 - Present",
    bullets: [
      "Built and maintained production ready web applications using Next.js, React, Prisma, and TypeScript.",
      "Implemented authentication and authorization using NextAuth.js and JWT.",
      "Designed and optimized database schemas with Prisma and PostgreSQL.",
      "Deployed applications to Vercel and Heroku, ensuring high performance and scalability.",
    ],
  },
];
