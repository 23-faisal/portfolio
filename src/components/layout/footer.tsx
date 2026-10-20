import { ArrowUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 py-6">
      <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-xs text-slate-400">
          Designed & built by{" "}
          <a
            href="#home"
            className="font-medium text-teal-400 hover:text-teal-300"
          >
            @faisal
          </a>
          {" · "}© {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/23-faisal"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition-colors hover:text-teal-400"
          >
            <FaGithub className="size-5" />
          </a>

          <a
            href="https://linkedin.com/in/faisalahmed23/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition-colors hover:text-teal-400"
          >
            <FaLinkedin className="size-5" />
          </a>

          <a
            href="#about"
            aria-label="Back to top"
            className="text-slate-400 transition-colors hover:text-teal-400"
          >
            <ArrowUp className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
