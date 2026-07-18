import {
  Home,
  MessageCircleCode,
  FolderKanban,
  GraduationCap,
  BrainCircuit,
} from "lucide-react";

import Link from "next/link";

import { Dock, DockIcon } from "@/components/ui/dock";

const Doc = () => {
  return (
    <Dock className="fixed bottom-4 left-1/2 z-50 w-full max-w-full sm:max-w-xl -translate-x-1/2 sm:px-0 mx-auto rounded-full bg-slate-950/20 border border-sky-200/10 px-3 py-2 gap-7 shadow-2xl shadow-slate-900/10 backdrop-blur-xl ring-1 ring-sky-200/20 dark:ring-sky-400/20">
      <DockIcon>
        <Link
          href="/"
          aria-label="Home"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full text-sky-100 transition duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500/10 dark:text-sky-100 dark:hover:bg-sky-500/20"
        >
          <Home className="h-7 w-7" />
          <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 inline-flex rounded-full bg-slate-950/95 px-2.5 py-1 text-xs text-sky-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Home
          </span>
        </Link>
      </DockIcon>
      <DockIcon>
        <Link
          href="/education"
          aria-label="Education"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full text-sky-100 transition duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500/10 dark:text-sky-100 dark:hover:bg-sky-500/20"
        >
          <GraduationCap className="h-7 w-7" />
          <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 inline-flex rounded-full bg-slate-950/95 px-2.5 py-1 text-xs text-sky-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Education
          </span>
        </Link>
      </DockIcon>
      <DockIcon>
        <Link
          href="/projects"
          aria-label="Projects"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full text-sky-100 transition duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500/10 dark:text-sky-100 dark:hover:bg-sky-500/20"
        >
          <FolderKanban className="h-7 w-7" />
          <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 inline-flex rounded-full bg-slate-950/95 px-2.5 py-1 text-xs text-sky-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Projects
          </span>
        </Link>
      </DockIcon>
      <DockIcon>
        <Link
          href="/contact"
          aria-label="Contact"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full text-sky-100 transition duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500/10 dark:text-sky-100 dark:hover:bg-sky-500/20"
        >
          <MessageCircleCode className="h-7 w-7" />
          <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 inline-flex rounded-full bg-slate-950/95 px-2.5 py-1 text-xs text-sky-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Contact
          </span>
        </Link>
      </DockIcon>
    </Dock>
  );
};

export default Doc;
