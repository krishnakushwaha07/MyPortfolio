"use client";

import {
  Home,
  MessageCircleCode,
  FolderKanban,
  GraduationCap,
} from "lucide-react";

import Link from "next/link";

// to get the current path of the page
import { usePathname } from "next/navigation";

import { Dock, DockIcon } from "@/components/ui/dock";

const navItems = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/education", label: "Education", Icon: GraduationCap },
  { href: "/projects", label: "Projects", Icon: FolderKanban },
  { href: "/contact", label: "Contact", Icon: MessageCircleCode },
];

const Doc = () => {
  const pathname = usePathname();

  return (
    <Dock className="fixed bottom-4 left-1/2 z-50 w-[90%] max-w-full sm:max-w-xl -translate-x-1/2 sm:px-0 mx-auto rounded-full bg-slate-950/20 border border-sky-200/10 px-3 py-2 gap-7 shadow-2xl shadow-slate-900/10 backdrop-blur-xl ring-1 ring-sky-200/20 dark:ring-sky-400/20">
      {navItems.map(({ href, label, Icon }) => {
        const isActive = pathname === href;
        return (
          <DockIcon key={href}>
            <Link
              href={href}
              aria-label={label}
              aria-current={isActive ? "page" : undefined}
              className={`group relative flex h-12 w-12 items-center justify-center rounded-full transition duration-300 ${isActive ? "bg-sky-500/20 text-sky-100" : "text-sky-100 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500/10"} dark:text-sky-100 dark:hover:bg-sky-500/20`}
            >
              <Icon className="h-7 w-7" />
              <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 inline-flex rounded-full bg-slate-950/95 px-2.5 py-1 text-xs text-sky-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {label}
              </span>
            </Link>
          </DockIcon>
        );
      })}
    </Dock>
  );
};

export default Doc;
