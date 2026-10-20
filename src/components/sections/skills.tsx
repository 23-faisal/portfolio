import {
  ArrowUpRight,
  Code2,
  Workflow,
  Server,
  Database,
  Wrench,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building modern, responsive user interfaces.",
    icon: Code2,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "shadcn/ui",
    ],
  },
  {
    title: "State & Form Management",
    description: "Managing application state and form validation.",
    icon: Workflow,
    skills: ["Zustand", "TanStack Query", "React Hook Form", "Zod"],
  },
  {
    title: "Backend Development",
    description: "Building APIs and handling application logic.",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases & Services",
    description: "Working with data storage and external services.",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Cloudinary"],
  },
  {
    title: "Tools & Deployment",
    description: "Version control, development tools, and deployment.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "Linux", "Nginx", "PM2", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="pb-20">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-teal-400 uppercase">
          My Expertise
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Skills<span className="text-teal-400">.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
          A growing toolkit of modern full-stack technologies I use to build
          responsive interfaces, integrate APIs, manage application state, and
          develop functional web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;

          return (
            <Card
              key={category.title}
              className="group relative overflow-hidden border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-white/[0.04]"
            >
              {/* Subtle decorative accent */}
              <div className="absolute top-0 left-0 h-px w-0 bg-teal-400 transition-all duration-500 group-hover:w-full" />

              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-400 transition-colors group-hover:bg-teal-400/15">
                    <Icon className="size-5" />
                  </div>

                  <span className="font-mono text-xs text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle className="flex items-center justify-between gap-2 text-lg">
                  {category.title}

                  <ArrowUpRight className="size-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-400" />
                </CardTitle>

                <CardDescription className="text-sm leading-6 text-slate-400">
                  {category.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="rounded-md border border-teal-900/80 bg-teal-950/50 px-2.5 py-1 text-xs text-teal-300 transition-colors duration-300 hover:border-teal-500/50 hover:bg-teal-900/50"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
