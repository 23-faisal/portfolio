import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";

import { projects } from "@/data/projects";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Projects() {
  const autoplay = useRef(
    Autoplay({
      delay: 1500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <section id="projects" className="pb-20 h-sereen">
      {/* Section heading */}
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-teal-400 uppercase">
          Selected work
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          My Projects<span className="text-teal-400">.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
          A collection of projects where I apply my frontend and full-stack
          development skills to practical problems.
        </p>
      </div>

      {/* Projects slider */}
      <div className="group/carousel relative px-1 sm:px-2">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 py-2">
            {projects.map((project, index) => (
              <CarouselItem
                key={project.id}
                className="flex basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="group/card relative flex h-full w-full flex-col gap-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-0 text-white transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-white/[0.04]">
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 z-10 h-px w-0 bg-teal-400 transition-all duration-500 group-hover/card:w-full" />

                  {/* Project screenshot */}
                  <div className="relative aspect-video shrink-0 overflow-hidden bg-slate-800">
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      loading="lazy"
                      draggable={false}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                    />

                    {/* Project status */}
                    <span className="absolute top-3 right-3 rounded-full border border-teal-700/50 bg-teal-900/80 px-3 py-1 text-xs font-medium text-teal-200 backdrop-blur-md">
                      {project.status}
                    </span>

                    {/* Project number */}
                    <span className="absolute bottom-3 left-3 rounded-md border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-xs text-white/80 backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Project information */}
                  <CardHeader className="gap-3 px-5 pt-5 pb-3">
                    <CardTitle className="text-lg font-semibold transition-colors duration-300 group-hover/card:text-teal-300 sm:text-xl">
                      {project.title}
                    </CardTitle>

                    <CardDescription className="min-h-[96px] text-sm leading-6 text-slate-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Technology badges */}
                  <CardContent className="px-5 py-3">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-teal-900/80 bg-teal-950/50 px-2.5 py-1 text-xs text-teal-300 transition-colors duration-300 hover:border-teal-500/50 hover:bg-teal-900/50"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  {/* Links with bottom padding */}
                  <CardFooter className="mt-auto flex flex-wrap gap-3 px-5 pt-4 pb-5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      draggable={false}
                      className="inline-flex h-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] px-3 text-sm font-medium text-white transition-colors hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-300"
                    >
                      <FaGithub className="mr-2 size-4" />
                      GitHub
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        draggable={false}
                        className="inline-flex h-9 items-center justify-center rounded-md bg-teal-600 px-3 text-sm font-medium text-white transition-colors hover:bg-teal-500"
                      >
                        Live Demo
                      </a>
                    )}
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Slider instruction */}
      <p className="mt-6 text-center text-xs text-slate-500">
        Auto-scrolling projects · Drag or swipe to explore
      </p>
    </section>
  );
}
