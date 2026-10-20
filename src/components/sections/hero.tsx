import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { toast } from "sonner";

export default function Hero() {
  return (
    <section
      id="about"
      className="scroll-mt-24 flex items-center justify-center pt-8 h-screen pb-20"
    >
      <div className="order-2 lg:order-1">
        <p className="mb-3 text-xl text-slate-200 sm:text-2xl">Hello, I'm</p>

        <h1 className="text-5xl leading-tight font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          Faisal <span className="text-green-500">Ahmed</span>
        </h1>

        <h2 className="mt-3 text-2xl font-medium text-teal-400 sm:text-3xl">
          Software Engineer
        </h2>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          I'm a Full Stack Web Developer passionate about building responsive,
          user-friendly, and scalable web applications using React.js, Next.js,
          TypeScript, Node.js, Express.js, and MongoDB. I enjoy transforming
          ideas and designs into polished digital experiences by developing
          reusable components, integrating RESTful APIs, implementing
          authentication, and building efficient frontend and backend solutions.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button className="bg-teal-600 flex items-center justify-between gap-2 text-white hover:bg-teal-700">
            <a
              href="#projects"
              className="flex items-center justify-between gap-0.5"
            >
              <span>Explore my projects</span>
              <ArrowDown className="ml-2 size-4" />
            </a>
          </Button>

          <Button variant="secondary" className="">
            <a
              href="assets/faisal.pdf"
              download="Software_Engineer_Faisal_Ahmed_CV.pdf"
              className="flex items-center justify-between gap-0.5"
            >
              <Download size={18} />
              Download CV
            </a>
          </Button>
        </div>

        <div className="mt-7 flex items-center gap-2">
          <Button variant="secondary">
            <a
              href="https://github.com/23-faisal"
              target="_blank"
              rel="noreferrer"
              aria-label="Faisal's GitHub"
              className="text-slate-400 transition-colors hover:text-teal-400"
            >
              <FaGithub className="size-5" />
            </a>
          </Button>

          <Button variant="secondary">
            <a
              href="https://linkedin.com/in/faisalahmed23/"
              target="_blank"
              rel="noreferrer"
              aria-label="Faisal's LinkedIn"
              className="text-slate-400 transition-colors hover:text-teal-400"
            >
              <FaLinkedin className="size-5" />
            </a>
          </Button>

          <Button variant="secondary">
            <a
              href="https://x.com/faisalahmed_23"
              target="_blank"
              rel="noreferrer"
              aria-label="Faisal's X"
              className="text-slate-400 transition-colors hover:text-teal-400"
            >
              <BsTwitterX className="size-5" />
            </a>
          </Button>

          <Button
            variant="secondary"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText("a.faisal23r@gmail.com");
                // Optional: show a success toast
                toast.success("Email copied to clipboard!");
              } catch {
                toast.error("Failed to copy email.");
              }
            }}
            aria-label="Copy email address"
            title="Copy email address"
          >
            <Mail className="size-6 " />
          </Button>
        </div>
      </div>
    </section>
  );
}
