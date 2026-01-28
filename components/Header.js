"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Header() {
  return (
    <header className="py-10">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-5xl font-semibold tracking-widest text-slate-50 sm:text-6xl">
          ARYΛN DUTT
        </h1>
        <p className="mt-4 font-mono text-sm text-slate-300">
          Data Science &amp; AI @ NTU | Researcher @ MIT JuliaLab
        </p>
        <p className="mt-2 text-xs text-slate-400">
          Singapore | Email:{" "}
          <a href="mailto:aryan102004@gmail.com">aryan102004@gmail.com</a> |
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/aryan-dutt-" target="_blank">
            aryan-dutt-
          </a>{" "}
          | GitHub:{" "}
          <a href="https://github.com/Aryand43" target="_blank">
            Aryand43
          </a>
        </p>

        <div className="mt-4 flex justify-center">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                type="button"
                className="inline-flex items-center rounded-xl border border-white/10 bg-slate-950/20 px-4 py-2 text-sm text-slate-200 transition-colors duration-200 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Links
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                align="center"
                sideOffset={8}
                className="w-48 rounded-xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl outline-none backdrop-blur-sm"
              >
                <DropdownMenu.Item asChild>
                  <a
                    className="block rounded-lg px-4 py-2 text-sm text-slate-200 outline-none transition-colors duration-200 hover:bg-white/[0.04] focus:bg-white/[0.06]"
                    href="mailto:aryan102004@gmail.com"
                  >
                    Email
                  </a>
                </DropdownMenu.Item>

                <DropdownMenu.Item asChild>
                  <a
                    className="block rounded-lg px-4 py-2 text-sm text-slate-200 outline-none transition-colors duration-200 hover:bg-white/[0.04] focus:bg-white/[0.06]"
                    href="https://www.linkedin.com/in/aryan-dutt-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </DropdownMenu.Item>

                <DropdownMenu.Item asChild>
                  <a
                    className="block rounded-lg px-4 py-2 text-sm text-slate-200 outline-none transition-colors duration-200 hover:bg-white/[0.04] focus:bg-white/[0.06]"
                    href="https://github.com/Aryand43"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
      <div className="mx-auto mt-10 h-px max-w-4xl bg-white/5" />
    </header>
  );
}
